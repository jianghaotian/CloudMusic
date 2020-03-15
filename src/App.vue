<template>
  <div id="app">
    <el-container>
        <el-header height="50px">
          <TopBar/>
        </el-header>
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
import BottomBar from './components/bottom/BottomBar.vue'

@Component({
  components: {
    TopBar,
    AsideBar,
    BottomBar
  }
})
export default class App extends Vue {


}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  line-height: 50px;
}
.el-footer {
  padding: 0;
  line-height: 60px;
}
.el-aside {

}
.el-main {
  padding: 0 20px;

}
</style>
