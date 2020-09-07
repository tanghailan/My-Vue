<template>
  <div>
    <template v-for="item in this.menuList">
      <el-submenu :disabled="item.disable" :index="item.id+''" :key="item.id+''">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menuName}}</span>
        </template>
        <MenuTree :menuList="item.children"></MenuTree>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'MenuTree',
    props:["menuList"]
  }
</script>

<style scoped>

</style>
