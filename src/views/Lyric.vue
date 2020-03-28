<template>
  <div class="lyric">
    <!-- {{lyricStr}} -->
    <!-- {{checkPlayUrl}} -->
    <div class="show_music">
      <div class="left">


      </div>
      <div class="right">
        <!-- {{lrcTxt}} -->
        <ul>
          <li v-for="(item, key) in lines" :key="key" :style="key == lineNum ? {color: '#000', fontSize: '18px'} : {}">{{item.txt}}</li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import LyricParser from 'lyric-parser';

@Component({
  components: {
    // MusicBar
  }
})
export default class Lyric extends Vue {
  lyricStr: string = '';
  lyric: LyricParser;
  lrcTxt: string = '';
  lineNum: number = -1;
  lines: {} = {};


  mounted() {

  }

  get checkPlayUrl() {
    return this.$store ? this.$store.state.playUrl : '';
  }

  get checkPlayTime() {
    return this.$store ? this.$store.state.playTime : '';
  }

  get checkPlay() {
    return this.$store.state.playState;
  }

  // 播放状态改变
  // @Watch('checkPlay')
  // watchPlay(newVal: number, oldVal: number) {
  //   if (newVal === 0) {
  //     (this.lyric as any).stop();
  //   } else {
  //     (this.lyric as any).play();
  //   }
  // }


  handler({lineNum, txt}: any) {
    // console.log(lineNum);
    // console.log(txt);
    this.lrcTxt = txt;
    this.lineNum = lineNum;
    // console.log(lineNum);
  }


  // 播放状态改变
  @Watch('checkPlay')
  watchPlay(newVal: number, oldVal: number) {
    if (newVal === 0) {
      (this.lyric as any).stop();
    } else {
      if (this.lyric) {
        (this.lyric as any).seek(this.checkPlayTime);
      }
    }
  }


  // 播放歌曲改变
  @Watch('checkPlayUrl')
  watchPlayUrl(newVal: string, oldVal: string) {
    if (this.lyric) {
      this.lyric.stop();
      this.lyric = null;
      this.lineNum = -1;
    }
    this.axios.get('/lyric', {params: {id: this.$store.state.playList[this.$store.state.playIndex].id}}).then(res => {
      // console.log(res.data.lrc.lyric);
      if (res.data.lrc) {
        this.lyricStr = res.data.lrc.lyric;
        this.lyric = new LyricParser(res.data.lrc.lyric, this.handler);
        this.lines = this.lyric.lines;
        (this.lyric as any).play();
      } else {
        this.lyricStr = '';
        this.lyric = null;
      }

      // (lyric as any).play();
      // (lyric as any).seek('02:13');

    })
  }

  @Watch('checkPlayTime')
  wahchPlayTime(newVal: string, oldVal: string) {
    // console.log(newVal);
    if (this.lyric && Math.abs(parseInt(newVal) - parseInt(oldVal)) > 1000) {
      // console.log(newVal);
      (this.lyric as any).seek(newVal);
      // (this.lyric as any).stop();
    }

    // console.log(this.lyric);
  }



}
</script>

<style lang="scss" scoped>
.lyric {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;

  .show_music {
    width: 900px;
    height: 500px;
    margin: 0 auto;

    .left {
      float: left;
      width: 450px;
      height: 500px;


    }
    .right {
      float: right;
      width: 450px;
      height: 500px;


      ul {
        height: 500px;
        overflow-y:scroll;

        li {
          // line-height: 46px;
          color: #616060;
          margin: 20px 0;

        }
      }

    }

  }

}


</style>