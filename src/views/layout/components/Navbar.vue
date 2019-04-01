<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb />

    <!--<div class="avatar-container">
        <el-tooltip  content="尚有3个未读消息">
          <el-badge :value="3" class="item right-menu-item">
            <el-button size="small">消息</el-button>
          </el-badge>
        </el-tooltip>
    </div>-->

    <el-dropdown class="avatar-container right-menu-item" trigger="click">
      <div class="avatar-wrapper ">
        <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"><!--'?imageView2/1/w/80/h/80':图片缩略操作（/1/w/<Width>/h/<Height>）-->
        <i class="el-icon-caret-bottom"/>
      </div>

      <el-dropdown-menu slot="dropdown" class="user-dropdown">

        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>个人信息</el-dropdown-item>
        </router-link>

        <el-dropdown-item divided>
          <span style="display:block;text-align: center" @click="logout" >登 出</span>
        </el-dropdown-item>
      </el-dropdown-menu>

    </el-dropdown>


  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data(){
    return{
      activeIndex:'1'
    }
  },

  methods: {

    // message01(){
    //   this.$router.push({path:'/message',name:'Message'})
    // },

    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);


  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }

  .right-menu {
    //float:right;
    display: inline-block;
    height: 100%;
    line-height: 10px;
    //overflow:hidden;
  }
 /* &:focus {
    outline: none;
  }*/
  .right-menu-item {
    display: inline-block;//两个块级排列一行（融合行内于块级）
    //padding:0 8px;
    height: 50px;//高度100%
    font-size: 12px;//字体大小
    color: #5a5e66;
    vertical-align: text-bottom;//两个盒子底部区域对齐
  }

  &.hover-effect {
    cursor: pointer;
    transition: background .3s;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .item {
    margin-top: 2px;
    margin-right: 60px;
  }

  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

