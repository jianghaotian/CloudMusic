<template>
  <div class="bottom_bar">
    <el-slider v-model="played" :show-tooltip="false" @change="changeCurrentTime" class="slider" :disabled="$store.state.playUrl == ''"></el-slider>
    <audio 
      ref="audio"
      :src="$store.state.playUrl"
      @ended="onEnded"
      @timeupdate="onTimeupdate"
      @loadedmetadata="onLoadedmetadata"
      preload
      @canplay="audioCanPlay"
    >您的浏览器不支持 audio 标签。</audio>
      <!-- controls -->
      <!-- @pause="onPause" -->
      <!-- @play="onPlay" -->
    <div class="bottom">
      <div class="music_info" v-show="$store.state.playUrl != ''">
        <img :src="$store.state.musicImgUrl" width="40px" height="40px">
        
        <div class="info">
          <div class="name">
            <span>{{$store.state.musicName}}</span>
            <span> - {{$store.state.musicAuthor}}</span>
          </div>
          <div class="time">{{realFormatSecond(currentTime)}} / {{maxTime}}</div>
        </div>

      </div>
      <div class="play_control">

        <div class="play_button" @click="$store.commit('changePlayState')">
          <i v-show="$store.state.playState === 0" class="iconfont icon-bofang"></i>
          <i v-show="$store.state.playState === 1" class="iconfont icon-zanting" style="margin: 0;"></i>
        </div>

      </div>
      <div class="right">


      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
// import MusicBar from './MusicBar.vue';

@Component({
  components: {
    // MusicBar
  }
})
export default class BottomBar extends Vue {

  maxTimeInt: number = 0;
  maxTime: string = '0:00';
  currentTime: number = 0;
  played: number = 0;

  mounted() {
    // this.audio = document.getElementById('audio');
  }
  // 获取音乐url和播放状态
  get checkPlayUrl() {
    return this.$store.state.playUrl;
  }
  get checkPlay() {
    return this.$store.state.playState;
  }

  // 播放状态改变
  @Watch('checkPlay')
  watchPlay(newVal: number, oldVal: number) {
    if (this.$store.state.isCanPlay === 1 && newVal === 1) {
      (this.$refs.audio as any).play();
    } else if (newVal === 0) {
      (this.$refs.audio as any).pause();
    }
  }

  // 音乐播放结束事件
  onEnded() {
    this.$store.commit('endedPlay');
    this.currentTime = 0;
    this.played = 0;
  }

  // 音乐资源准备好能够播放事件
  audioCanPlay() {
    this.$store.commit('canPlay');
    if (this.checkPlay === 1) {
      (this.$refs.audio as any).play();
    }
  }
  // 资源准备好了事件（可以获取播放总长度）
  onLoadedmetadata(res: any) {
    this.maxTimeInt = parseInt(res.target.duration);
    this.maxTime = this.realFormatSecond(parseInt(res.target.duration));
  }
  // 更新音频流的当前播放时间事件
  onTimeupdate(res: any) {
    this.played = parseInt(res.target.currentTime) / this.maxTimeInt * 100;
    this.currentTime = parseInt(res.target.currentTime);
  }
  
  // 拖动进度条，改变当前时间，index是进度条改变时的回调函数的参数0-100之间，需要换算成实际时间
  changeCurrentTime(index: number) {
    (this.$refs.audio as any).currentTime = index / 100 * this.maxTimeInt;
  }

  // 音乐时间整理
  realFormatSecond(second: any) {
    var secondType = typeof second;
    if (secondType === 'number' || secondType === 'string') {
      second = parseInt(second);
      var hours = Math.floor(second / 3600);
      second = second - hours * 3600;
      var mimute = Math.floor(second / 60);
      second = second - mimute * 60;
      return hours == 0 ? 
        mimute + ':' + ('0' + second).slice(-2) :
        hours + ':' + mimute + ':' + ('0' + second).slice(-2);
    } else {
      return '0:00';
    }
  }


}
</script>

<style lang="scss" scoped>
.bottom_bar {
  position: relative;

  .slider {
    position: absolute;
    top: -16px;
    width: 100%;
    z-index: 99;
  }

  .bottom {

    .music_info {
      position: relative;
      top: 0;
      left: 0;
      height: 60px;

      img {
        position: absolute;
        left: 10px;
        top: 10px;
        border-radius: 5px;

      }

      .info {
        position: absolute;
        top: 0;
        left: 60px;
        display: flex;
        flex-direction: column;
        height: 60px;

        .name {
          position: absolute;
          top: -10px;
          width: 300px;

          span:last-child {
            font-size: 12px;
            color: #808080;
          }

        }
        .time {
          position: absolute;
          top: 10px;
          width: 300px;
          color: #808080;
        }
      }
    }
    .play_control {
      display: flex;
      margin-top: 10px;
      position: absolute;
      top: 0;
      left: 50%;

      transform: translateX(-50%);

      .play_button {
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 20px;
        background-color: #c3463a;
        text-align: center;
        cursor: pointer;

        i {
          margin-left: 4px;
          color: #fff;
        }
      }
    }
    .right {



    }
  }
}

</style>
<style lang="scss">
.el-slider__runway {
  height: 2px;
  z-index: 99;
}
.el-slider__bar {
  height: 2px;
  background-color: #c3463a;
  z-index: 99;
}
.el-slider__button {
  height: 10px;
  width: 10px;
  // opacity: 0;

  border: none;
  background-color: #c3463a;
  z-index: 99;

  &.hover {
  // opacity: 1;

  }
}
</style>