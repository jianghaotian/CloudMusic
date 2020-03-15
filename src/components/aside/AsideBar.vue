<template>
  <div class="aside_bar">
    <div class="user">
      <el-avatar :size="40" :src="avatarUrl">
        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
      </el-avatar>
      <div>
        <span>未登录</span>
        <i class="iconfont icon-arrLeft"></i>
      </div>
    </div>
    <ul>
      <router-link to="/find">
        <li :class="{select: $route.name === 'find'}">
          <i class="iconfont icon-find" :style="{fontSize: '18px'}"></i>
          发现音乐
        </li>
      </router-link>
      <router-link to="/fm">
        <li :class="{select: $route.name === 'fm'}">
          <i class="iconfont icon-fm"></i>
          私人FM
        </li>
      </router-link>
      <router-link to="/video">
        <li :class="{select: $route.name === 'video'}">
          <i class="iconfont icon-video"></i>
          视频
        </li>
      </router-link>
      <router-link to="/friend">
        <li :class="{select: $route.name === 'friend'}">
          <i class="iconfont icon-friend"></i>
          朋友
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AsideBar extends Vue {
  avatarUrl : string = '';

}
</script>

<style lang="scss" scoped>
.aside_bar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ededed;


  .user {
    display: flex;
    height: 40px;
    width: 100%;
    padding: 10px;

    div {
      margin-left: 10px;
      line-height: 40px;

      i {
        margin-left: 10px;
        color: #8e8e8e;
      }
    }
  }

}
ul {
  li {
    height: 36px;
    line-height: 36px;
    padding-left: 20px;

    &:hover {
      background-color: #e7e7e7;
    }
    i {
      margin-right: 10px;
    }
  }
}
.select {
  background-color: #e2e2e2;
  color: #c9594e
}

</style>