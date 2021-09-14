<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="蛋糕名" prop="goodName">
      <el-input v-model="dataForm.goodName" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="小类id" prop="smallType">
      <el-input v-model="dataForm.smallType" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="大类id" prop="type">
      <el-input v-model="dataForm.type" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="价格" prop="price">
      <el-input v-model="dataForm.price" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="简介" prop="introduc">
      <el-input v-model="dataForm.introduc" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="首页图片" prop="indexImg">
      <el-input v-model="dataForm.indexImg" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="详情图" prop="introducImg">
      <el-input v-model="dataForm.introducImg" placeholder=""></el-input>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          goodName: '',
          smallType: '',
          type: '',
          price: '',
          introduc: '',
          indexImg: '',
          introducImg: ''
        },
        dataRule: {
          goodName: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          smallType: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          price: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          introduc: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          indexImg: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          introducImg: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/mall/goods/info/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.goodName = data.goods.goodName
                this.dataForm.smallType = data.goods.smallType
                this.dataForm.type = data.goods.type
                this.dataForm.price = data.goods.price
                this.dataForm.introduc = data.goods.introduc
                this.dataForm.indexImg = data.goods.indexImg
                this.dataForm.introducImg = data.goods.introducImg
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/mall/goods/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'goodName': this.dataForm.goodName,
                'smallType': this.dataForm.smallType,
                'type': this.dataForm.type,
                'price': this.dataForm.price,
                'introduc': this.dataForm.introduc,
                'indexImg': this.dataForm.indexImg,
                'introducImg': this.dataForm.introducImg
              })
            }).then(({data}) => {
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
    }
  }
</script>
