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
            <el-radio v-model="formInline.sex" label="1">男</el-radio>
            <el-radio v-model="formInline.sex" label="2">女</el-radio>
            <el-radio v-model="formInline.sex" label="3">其他</el-radio>
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
          :data="userList"
          border
          max-height="1000"
          style="width: 100%;">
          <el-table-column
            prop="id"
            label="#"
            width="50">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名"
            width="110">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="110">
            <template slot-scope="scope">
              {{scope.row.sex==0?'男':(scope.row.sex==1?'女':'保密')}}
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="所属部门"
            width="180">
          </el-table-column>
          <el-table-column
            sortable
            prop="birth"
            label="生日"
            width="180">
          </el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="180">
          </el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="电话号码"
            width="150">
          </el-table-column>
          <el-table-column
            prop="status"
            label="是否禁用"
            width="100">

            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status==1"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>

          </el-table-column>
          <el-table-column
            label="操作">
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
            <el-button type="warning" size="mini" icon="el-icon-s-tools"></el-button>
          </el-table-column>
        </el-table>
        <el-pagination style="padding-top: 15px"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="current"
                       :page-sizes="[6, 10, 20, 30]"
                       :page-size="size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </template>

    </el-card>
  </div>
</template>

<script>
  import {findUserList} from '../../api/user'

  export default {
    name: 'Users',
    data() {
      return {
        formInline: {
          user: '',
          emil: '',
          cities: '',
          sex: '1',
          nickName: ''
        },
        size:6,
        //当前页码
        current: 1,
        //每页显示的条数
        // pageSize:4,
        //总条数
        total:100,
        //用户集合
        userList: [],
        //部门集合
        deptList: [],
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
      }
    },
    created() {
      //创建组件的时候调用查询所有用户的方法
      this.findUser();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      //当每页条数改变的时候
      handleSizeChange(val) {
        //将val赋值给size
        this.size = val;
        //重新去后台查询数据
        this.findUser();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.current = val;
        this.findUser();
        console.log(`当前页: ${val}`);
      },
      async findUser() {
        const {data} = await findUserList(this.current,this.size)
        this.userList = data.data.data;
        this.total = data.data.total;
        // console.log(data.data)
      }
    }
  }
</script>

<style scoped>

</style>
