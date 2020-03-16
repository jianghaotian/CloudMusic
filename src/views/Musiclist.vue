<template>
  <div class="music_list">
    <div class="head">
      <img :src="playlist.coverImgUrl" width="196px" height="196px" class="cover_img">
      <div class="info">
        <div class="name">
          <div class="tag">歌单</div>
          <div class="list_name">{{playlist.name}}</div>
        </div>
        <div class="author">
          <!-- TODO -->
          <router-link to="">
            <img :src="playlist.creator.avatarUrl" width="24px" height="24px">
          </router-link>
          <router-link to="">{{playlist.creator.nickname}}</router-link>
          <span>{{createTime}}创建</span>
        </div>
      </div>

      <!-- TODO -->
    </div>
    <div class="bar">
      <ul>
        <li :class="{select: select === 1}" @click="select = 1">歌曲列表</li>
        <li :class="{select: select === 2}" @click="select = 2">评论 ({{playlist.commentCount}})</li>
        <li :class="{select: select === 3}" @click="select = 3">收藏者</li>
      </ul>
      <div v-if="select === 1" key="bar-1">
        <MusicListComp :musicList="playlist.tracks"/>
      </div>
      <div v-else-if="select === 2"  key="bar-2">22222222</div>
      <div v-else-if="select === 3"  key="bar-3">33333333</div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MusicListComp from '../components/musicList/MusicListComp.vue';

@Component({
  components: {
    MusicListComp
  }
})

export default class MusicList extends Vue {
  
  select: number = 1;

  playlist: object = {
    creator: {}
  };
  createTime: string = '';

  created() {
    this.axios.get('/playlist/detail?', {params: {id: this.$route.params.id}}).then(res => {
      this.playlist = res.data.playlist;
      var date = new Date(res.data.playlist.createTime);
      var YY = date.getFullYear();
      var MM = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      this.createTime = `${YY}-${MM}-${DD}`
    })
    
  }

}
</script>

<style lang="scss" scoped>
.music_list {
  
  margin-top: 14px;

  .head {
    display: flex;

    .cover_img {
      margin-left: 30px;
      margin-right: 28px;
      margin-bottom: 30px;
      border-radius: 8px;

    }
    .info {
      
      .name {
        display: flex;
        align-items: center;
        .tag {
          height: 20px;
          padding: 0 4px;
          margin-right: 8px;
          line-height: 20px;
          border: 1px #c9594e solid;
          border-radius: 4px;
          color: #c9594e;
          font-size: 12px;
        }
        .list_name {
          font-size: 24px;
          font-weight: bold;
        }
      }
      .author {
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 13px;
        img {
          border-radius: 12px;
          margin-right: 10px;
          margin-top: 2px;
        }
        a {
          color: #597dab;
          &:hover {
            color: #2359aa;
          }
        }
        span {
          margin-left: 10px;
          color: #4f4f4f;
        }
      }
      

    }
  }

  .bar {
    height: 28px;
    padding: 0 30px;


    ul {
      display: flex;
      font-size: 15px;
      border-bottom: #f3f3f3 solid 1px;

      li {
        margin-right: 30px;
        cursor: default;
        &:hover {
          color: #000;
        }
        &.select {
          padding-bottom: 5px;
          font-weight: bold;
          color: #c9594e;
          border-bottom: #c9594e solid 2px;
        }
        

      }

    }
  }

}


</style>