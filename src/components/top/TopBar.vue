<template>
  <div class="top_bar">
    <div class="left"></div>

    <ul class="nav">
      <li v-for="(item, index) in navObj[$route.name]" :key="index">
        <router-link :class="{select: $route.path === item.path}" :to="item.path">{{item.text}}</router-link>
      </li>
    </ul>

    <div class="right">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索" v-model="searchText">
        <div :class="{hide: searchText === ''}" @click="searchText = ''">x</div>
      </div>
      <div class="setting">
        <router-link :class="{select: $route.name === 'setting'}" to="/setting">
          <i class="iconfont icon-setting"></i>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue {
  searchText: string = '';
  navObj: object = {
    find: [
      {
        text: '个性推荐',
        path: '/find'
      },
      {
        text: '歌单',
        path: '/find/list'
      },
      {
        text: '主播电台',
        path: '/find/radio'
      },
      {
        text: '排行榜',
        path: '/find/rank'
      },
      {
        text: '歌手',
        path: '/find/singer'
      },
      {
        text: '最新音乐',
        path: '/find/new'
      }
    ],
    fm: [],
    video: [
      {
        text: '视频',
        path: '/video'
      },
      {
        text: 'MV',
        path: '/video/mv'
      }
    ],
    friend: [
      {
        text: '动态',
        path: '/friend'
      }
    ],
    setting: [
      {
        text: '设置',
        path: '/setting'
      }
    ]
  };



}
</script>

<style lang="scss" scoped>
.top_bar {

  height: 50px;
  background-color: #c9594e;

  .left {
    float: left;
    height: 50px;
    width: 200px;
  }
  .nav {
    display: flex;
    float: left;

    li {
      margin-left: 30px;
      a {
        color: #ecc5c1;
        &:hover {
          color: #f7e6e4;
        }
      } 
    }
  }
  .right {
    float: right;
    display: inline-flex;
    align-items: center;
    height: 50px;
    width: 350px;

    .search {
      position: relative;
      width: 156px;

      i {
        position: absolute;
        left: 8px;
        top: 2px;
        font-size: 13px;
        color: #efcdca;
      }
      input {
        width: 100px;
        height: 24px;
        padding: 0 28px;
        border: 0;
        border-radius: 30px;
        background-color: #d17168;
        color: #fff;

        &::placeholder {
          color: #df9b95;
        }
      }
      div {
        height: 24px;
        width: 20px;
        position: absolute;
        right: 4px;
        top: 13px;
        line-height: 24px;
        text-align: center;
        color: #efcdca;
        user-select: none;
      }
    }
    .setting {
      height: 24px;
      width: 24px;
      border-radius: 12px;
      margin-left: 20px;
      line-height: 24px;
      text-align: center;
      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
      i {
        color: #ecc5c1;
      }
    }
  }
}
.select {
  color: #fff !important;
  font-weight: bold;
}
.hide {
  display: none;
}

</style>