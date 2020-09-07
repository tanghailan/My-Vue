<template>
    <div>
<!--      面包屑-->
      <el-breadcrumb separator="/" style="padding-left: 10px;padding-bottom: 10px;font-size: 12px">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
<!--      用户列表卡片-->
      <el-card class="box-card">
        <template>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="部门" label-width="70px">
            <el-select clearable v-model="formInline.cities" placeholder="请选择">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="用户名" label-width="70px">
              <el-input clearable v-model="formInline.user" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" label-width="70px">
              <el-input clearable v-model="formInline.emil" placeholder="请输入邮箱"></el-input>
            </el-form-item>

            <el-form-item label-width="70px">
              <el-radio v-model="formInline.radio" label="1">备选项</el-radio>
              <el-radio v-model="formInline.radio" label="2">备选项</el-radio>
              <el-radio v-model="formInline.radio" label="3">备选项</el-radio>
            </el-form-item>

            <el-form-item label="昵称" label-width="70px">
              <el-input clearable v-model="formInline.nickName" placeholder="请输入昵称"></el-input>
            </el-form-item>

            <el-form-item label-width="70px">
            <el-row>
              <el-button icon="el-icon-refresh">重置</el-button>
              <el-button type="primary" icon="el-icon-search">查询</el-button>
              <el-button type="success" icon="el-icon-plus">添加</el-button>
              <el-button type="warning" icon="el-icon-download">导出</el-button>
            </el-row>
            </el-form-item>

<!--            <el-form-item>-->
<!--              <el-button type="primary" @click="onSubmit">查询</el-button>-->
<!--            </el-form-item>-->
          </el-form>
<!--表格内容演示区域-->
          <el-table
            :data="tableData"
            border
            style="width: 100%;height: 630px">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
          <el-pagination style="padding-top: 15px"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </template>

      </el-card>
    </div>
</template>

<script>
  export default {
    name: 'Users',
    data() {
      return {
        formInline: {
          user: '',
          emil: '',
          cities:'',
          radio:'1',
          nickName:''
        },
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage4: 4
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>
