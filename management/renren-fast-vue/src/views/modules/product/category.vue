
<template>
  <div>
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
      <el-table-column label="序号" type="index" width="300">
      </el-table-column>
      <el-table-column label="类名称" prop="name">
      </el-table-column>
      <el-table-column label="id" prop="id">
      </el-table-column>
      <el-table-column label="主题" prop="title">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div class="addBtn">
      <el-button type="primary" @click="addEquipment">新增+</el-button>
    </div>
    <el-dialog :title="titleMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="id">
          <el-input v-model="form.id" auto-complete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="主题">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeEdit">取 消</el-button>
        <el-button type="primary" @click="submmitForm">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    return {
      tableData: [],
      search: '',
      dialogFormVisible: false,
      form: {
        name: "",
        title: "",
        id: ""
      },
      //新增or编辑弹框标题(根据点击的新增or编辑按钮显示不同的标题)
      titleMap: {
        addEquipment: '新增类型',
        editEquipment: "编辑类型"
      },
      //新增和编辑弹框标题
      dialogStatus: "",
    };
  },
  methods: {
    //新增
    addEquipment() {
      //显示弹框
      this.dialogFormVisible = true;
      //新增弹框标题
      this.dialogStatus = "addEquipment";
    },
    getTypeList() {
      this.$http({
        url: this.$http.adornUrl('/mall/type/list'),
        method: 'get'
      }).then(({ data }) => {
        this.tableData = data.page.list
      })
    },
    handleEdit(index, row) {
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.title = row.title;
      //显示弹框
      this.dialogFormVisible = true;
      //编辑弹框标题
      this.dialogStatus = "editEquipment"
    },
    handleDelete(index, row) {
      this.$confirm('是否确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = [row.id]
        this.$http({
          url: this.$http.adornUrl('/mall/type/delete'),
          method: 'post',
          data: this.$http.adornData(ids, false)
        }).then(({ data }) => {
          this.getTypeList();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //取消编辑
    closeEdit() {
      this.dialogFormVisible = false;
      this.clearForm();
    },
    //提交数据
    submmitForm() {
      if (this.dialogStatus == "addEquipment") {
        this.updateAndAdd("save","添加成功!");
      } else {
        this.updateAndAdd("update","修改成功!");
      }
    },
    //发送更新和增加请求
    updateAndAdd(url,mass){
        if (this.form.name.trim() != "" && this.form.title.trim() != "") {
          this.$http({
            url: this.$http.adornUrl('/mall/type/'+url),
            method: 'post',
            data: this.$http.adornData(this.form, false)
          }).then(({ data }) => {
            this.dialogFormVisible = false;
            this.clearForm();
            this.getTypeList();
            this.$message({
              type: 'success',
              message: mass
            });
          })
        } else {
          this.$alert('请输入名称和主题', '提示', {
            confirmButtonText: '确定'
          });
        }
    },
    //清空form
    clearForm() {
      this.form.id = "";
      this.form.name = "";
      this.form.title = "";
    }
  },
  mounted() {
    this.getTypeList();
  }
}

</script>
<style lang='css' scoped>
.addBtn {
  float: right;
  margin: 20px 30px;
}
</style>