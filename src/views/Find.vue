<template>
  <div class="find">
    <div class="title">
      <router-link to="/find/list">
        <span>推荐歌单</span>
        <i class="iconfont icon-youjiantou"></i>
      </router-link>
    </div>
    <MusicListComp :list="musicList" location="find" class="test"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MusicListComp from '../components/find/MusicListComp.vue'

@Component({
  components: {
    MusicListComp
  }
})
export default class Find extends Vue {

  musicList: object[] = [];


  created () {
    this.axios.get('/personalized', {params: {limit: 10}}).then(res => {
      this.musicList = res.data.result;
      // console.log(res);
      
    })

  }


}
</script>

<style lang="scss" scoped>
.find {
  width: 1044px;
  margin: 0 auto;


  .title {
    height: 46px;
    line-height: 46px;
    a:hover {
      color: #000;
    }
    span {
      margin-right: 6px;
      font-size: 16px;
      font-weight: bold;

    }

  }



}



</style>