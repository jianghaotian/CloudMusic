<template>
  <div class="music_list_comp">

    <div class="box" v-for="item in list" :key="item.id">
      <!-- TODO -->
      <router-link to="">
        <img :src="item.picUrl" width="196px" @mouseenter="show(item.id)" @mouseleave="unshow(item.id)">
      </router-link>
      <!-- TODO -->
      <router-link to="">
        <span class="title">{{item.name}}</span>
      </router-link>
      <span class="play_count">
        <i class="iconfont icon-normal"></i>
        {{item.playCount > 10000 ? `${Math.round(item.playCount / 10000)} 万` : item.playCount}}
      </span>
      <!-- TODO -->
      <span class="play" :class="{show: showId === item.id}" @mouseenter="show(item.id)" @mouseleave="unshow(item.id)">
        <i class="iconfont icon-bofang"></i>
      </span>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class MusicListComp extends Vue {
  @Prop() private list!: Object[];
  @Prop() private location!: string;
  showId: number = 0;

  show(id: number) {
    this.showId = id;
  }
  unshow(id: number) {
    this.showId = 0;
  }


}
</script>

<style lang="scss" scoped>
.music_list_comp {
  display: grid;
  // 178px
  grid-auto-rows: 236px;
  // grid-auto-columns: 196px;
  // grid-template-rows: repeat(2, 236px);
  grid-template-columns: repeat(5, 196px);
  // 134px
  grid-gap: 40px 16px;
  margin-bottom: 50px;

  .box {
    position: relative;
    height: 236px;
    width: 196px;

    // background-color: red;

    img {
      border-radius: 10px;

    }
    .title {
      &:hover {
        color: #000;
      }

    }
    .play_count {
      position: absolute;
      right: 5px;
      top: 2px;
      font-size: 12px;
      color: #fff;
      i {
        font-size: 10px;
      }
    }
    .play {
      position: absolute;
      right: 15px;
      bottom: 40px + 15px;
      height: 30px;
      width: 30px;
      border-radius: 15px;
      background-color: #fff;
      line-height: 30px;
      text-align: center;
      opacity: 0;
      cursor: pointer;

      i {
        margin-left: 2px;
        color: #c9594e;
        font-size: 10px;
      }
    }
    .show {
      opacity: 0.8;
      transition: all .3s ease-in;
    }
  }
}


</style>