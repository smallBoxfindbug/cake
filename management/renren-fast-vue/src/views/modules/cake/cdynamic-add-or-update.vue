<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="" prop="dTitle">
      <el-input v-model="dataForm.dTitle" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="dContent">
      <el-input v-model="dataForm.dContent" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="dYear">
      <el-input v-model="dataForm.dYear" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="" prop="dTime">
      <el-input v-model="dataForm.dTime" placeholder=""></el-input>
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
          dTitle: '',
          dContent: '',
          dYear: '',
          dTime: ''
        },
        dataRule: {
          dTitle: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          dContent: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          dYear: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          dTime: [
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
              url: this.$http.adornUrl(`/mall/cdynamic/info/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.dTitle = data.cDynamic.dTitle
                this.dataForm.dContent = data.cDynamic.dContent
                this.dataForm.dYear = data.cDynamic.dYear
                this.dataForm.dTime = data.cDynamic.dTime
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
              url: this.$http.adornUrl(`/mall/cdynamic/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'dTitle': this.dataForm.dTitle,
                'dContent': this.dataForm.dContent,
                'dYear': this.dataForm.dYear,
                'dTime': this.dataForm.dTime
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
