<template>
  <el-container class="main_container">
    <!--头部布局-->
    <el-header>

      <!--logo和项目名称-->
      <div class="left_box">
        <img src="../assets/img/1.jpg"/>
        <span>MY管理系统</span>
      </div>

      <!--用户登录展示的头像-->
      <div class="right_box">

        <el-dropdown>
          <!--下拉菜单-->
          <span class="el-dropdown-link">下拉菜单<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <!--            <img src="../assets/img/1.jpg"/>-->
            <el-dropdown-item icon="el-icon-house">系统首页</el-dropdown-item>
            <el-dropdown-item icon="el-icon-ship">交流讨论</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <!--侧边栏-->
      <el-aside :width="isCollapse?'60px':'200px'">
        <!--展开/收起-->
        <div class="toggle_box" @click="toggleCollapse">||||||</div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-location"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: "Main",
    data(){
      return{
        isCollapse :false
      }
    },
    methods:{
      toggleCollapse(){
        this.isCollapse = !this.isCollapse;
      }
    }
  }
</script>

<style lang="less" scoped>
  /*整个容器的高度*/
  .main_container {
    height: 100%;
  }

  /*下拉样式*/
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  /*头部布局*/
  .el-header, .el-footer {
    background-color: #001529;
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    align-items: center;
    font-size: 20px;
    /*左边logo和标题*/

    .left_box {
      display: flex;
      align-items: center;
      /*logo*/

      img {
        width: 60px;
        height: 60px;
        margin: 0px 0px 10px 15px
      }

      /*标题*/

      span {
        margin-left: 15px;
      }
    }

    /*右边的登录头像*/

    .right_box {
      .el-dropdown > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #ffffff;
        margin: 0px 15px 0px 0px;
        background-size: contain;
      }
    }

  }

  /*侧边栏*/
  .el-aside {
    background-color: #001529;
    color: #333;
    /*text-align: center;*/
    line-height: 200px;
    .el-menu{
      border-right: none;
    }
    /*展开/收起*/
    .toggle_box{
      background-color: chartreuse;
      font-size: 15px;
      font-weight: bold;
      line-height: 24px;
      color: #ffffff;
      letter-spacing: 0.2em;
      text-align: center;
      cursor: pointer;
    }
  }

  /*内容主体*/
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }


  /*body > .el-container {*/
  /*  margin-bottom: 40px;*/
  /*}*/

</style>
