<template>
  <div id="app">
    <el-container class="app_box">
      <el-header height="50px">
        <TopBar/>
      </el-header>
<!-- v-show="$store.state.lyric"  -->
      <Lyric :class="$store.state.lyric ? 'show' : ''"/>
      <el-container>
        <el-aside width="200px">
          <AsideBar/>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>

      <el-footer height="60px">
        <BottomBar/>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TopBar from './components/top/TopBar.vue';
import AsideBar from './components/aside/AsideBar.vue';
import BottomBar from './components/bottom/BottomBar.vue';

import Lyric from './views/Lyric.vue';

@Component({
  components: {
    TopBar,
    AsideBar,
    BottomBar,
    Lyric
  }
})
export default class App extends Vue {


}
</script>

<style lang="scss" scoped>
.app_box {
  position: relative;
  
  .lyric {
    top: 100%;
    transition: all .3s ease;
  }
  .show {
    top: 50px;
    transition: all .3s ease;
  }


}

</style>


<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
ul, li {
  padding:0;
  margin:0;
  list-style:none
}
input {
  outline: none;
}
a {
  text-decoration: none;
  color: #303133;
  &:link{text-decoration: none;}
  &:visited {text-decoration: none;}
  &:hover {text-decoration: none;}
  &:active {text-decoration: none;}
}
#app {
  height: 100%;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,sans-serif;
  font-size: 14px;
  color: #303133;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  padding: 0;
  line-height: 50px;
  overflow: hidden;
}
.el-footer {
  padding: 0;
  line-height: 60px;
  // overflow: hidden;
}
.el-aside {
  overflow: hidden;
}
.el-main {
  padding: 0;

}
</style>
