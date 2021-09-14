<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="" prop="userId">
      <el-input v-model="dataForm.userId" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="goodsName">
      <el-input v-model="dataForm.goodsName" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="price">
      <el-input v-model="dataForm.price" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="count">
      <el-input v-model="dataForm.count" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="specifi">
      <el-input v-model="dataForm.specifi" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="collection">
      <el-input v-model="dataForm.collection" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="imgUrl">
      <el-input v-model="dataForm.imgUrl" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="goodsId">
      <el-input v-model="dataForm.goodsId" placeholder=""></el-input>
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
          userId: '',
          goodsName: '',
          price: '',
          count: '',
          specifi: '',
          collection: '',
          imgUrl: '',
          goodsId: ''
        },
        dataRule: {
          userId: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          goodsName: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          price: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          count: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          specifi: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          collection: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          imgUrl: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          goodsId: [
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
              url: this.$http.adornUrl(`/mall/ccart/info/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.userId = data.cCart.userId
                this.dataForm.goodsName = data.cCart.goodsName
                this.dataForm.price = data.cCart.price
                this.dataForm.count = data.cCart.count
                this.dataForm.specifi = data.cCart.specifi
                this.dataForm.collection = data.cCart.collection
                this.dataForm.imgUrl = data.cCart.imgUrl
                this.dataForm.goodsId = data.cCart.goodsId
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
              url: this.$http.adornUrl(`/mall/ccart/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'userId': this.dataForm.userId,
                'goodsName': this.dataForm.goodsName,
                'price': this.dataForm.price,
                'count': this.dataForm.count,
                'specifi': this.dataForm.specifi,
                'collection': this.dataForm.collection,
                'imgUrl': this.dataForm.imgUrl,
                'goodsId': this.dataForm.goodsId
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
