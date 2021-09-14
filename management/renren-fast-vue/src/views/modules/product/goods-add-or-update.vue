<template>
  <el-dialog :title="!dataForm.id ? '新增' : '修改'" :close-on-click-modal="false" :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="dataForm.name" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="简介" prop="discri">
        <el-input v-model="dataForm.discri" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="logo图" prop="imgUrl">
        <single-upload v-model="dataForm.imgUrl"></single-upload>
        <!-- <el-input v-model="dataForm.imgUrl" placeholder=""></el-input> -->
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="dataForm.price" placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="类型id" prop="type">
        <el-input v-model="dataForm.type" placeholder=""></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import SingleUpload from "@/components/upload/singleUpload" 
export default {
  components:{
    SingleUpload
  },
  data() {
    return {
      fileList: [],
      visible: false,
      dataForm: {
        id: 0,
        name: '',
        discri: '',
        imgUrl: '',
        price: '',
        type: ''
      },
      dataRule: {
        name: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        discri: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        imgUrl: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    init(id) {
      this.dataForm.id = id || 0
      this.visible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].resetFields()
        if (this.dataForm.id) {
          this.$http({
            url: this.$http.adornUrl(`/mall/goods/info/${this.dataForm.id}`),
            method: 'get',
            params: this.$http.adornParams()
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.dataForm.name = data.goods.name
              this.dataForm.discri = data.goods.discri
              this.dataForm.imgUrl = data.goods.imgUrl
              this.dataForm.price = data.goods.price
              this.dataForm.type = data.goods.type
            }
          })
        }
      })
    },
    // 表单提交
    dataFormSubmit() {
      console.log(this.dataForm.imgUrl)
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.$http({
            url: this.$http.adornUrl(`/mall/goods/${!this.dataForm.id ? 'save' : 'update'}`),
            method: 'post',
            data: this.$http.adornData({
              'id': this.dataForm.id || undefined,
              'name': this.dataForm.name,
              'discri': this.dataForm.discri,
              'imgUrl': this.dataForm.imgUrl,
              'price': this.dataForm.price,
              'type': this.dataForm.type
            })
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.visible = false
                  this.$emit('refreshDataList')
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        }
      })
    }

  // beforeUploadHandle(file){
  //   let _that = this;
  //   return new Promise((resolve,reject)=>{
  //     this.$http({
  //       url:this.$http.adornUrl("/thirdparty/oss/policy"),
  //       method:"get",
  //       data:this.$http.adornParams({})
  //     }).then(({data})=>{
  //       _that.dataObj.policy = data.respMap.policy;
  //       _that.dataObj.signature = data.respMap.signature;
  //       _that.dataObj.ossaccessKeyId = data.respMap.accessid;
  //       _that.dataObj.key = data.respMap.dir+getUUID()+"_${filename}";
  //       _that.dataObj.dir = data.respMap.dir;
  //       _that.dataObj.host = data.respMap.host;
  //       resolve(true);
  //     }).catch((err)=>{
  //       reject(false);
  //     });
  //   })
      
    // }

  
  
  
  
  
  }
}
</script>
