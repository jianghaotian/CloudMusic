<template>
  <div class="music_list_comp">
    <table width="100%" border rules=none cellspacing=0 align=center frame=void>
      <tr>
        <th align="left"></th>
        <th align="left">音乐标题</th>
        <th align="left">歌手</th>
        <th align="left">专辑</th>
        <th align="left">时长</th>
      </tr>
      <tr v-for="(item, index) in musicList" :key="item.id" :class="{even: index % 2 === 0, select: selectId === item.id}" @click="clickMusic(item.id)">
        <td class="hh">
          <span>{{index + 1 < 10 ? '0' + (index + 1) : index + 1}}</span>
          <!-- TODO -->
        </td>
        <td>{{item.name}}</td>
        <td class="ar"><router-link to="">{{item.ar.map(i => i.name).join(' / ')}}</router-link></td>
        <td class="al"><router-link to="">{{item.al.name}}</router-link></td>
        <td></td>
      </tr>

    </table>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MusicListComp extends Vue {
  @Prop() private musicList!: Object[];

  selectId = 0;

  clickMusic (id: number) {
    this.selectId = id;


  }


}
</script>

<style lang="scss" scoped>
.music_list_comp {
  width: 100%;

  table {


    tr {
      height: 34px;
      width: 100%;
      line-height: 34px;
      th {
        padding-left: 10px;
        color: #888888;
        &:last-child {
          min-width: 100px;
        }
        &:nth-child(n+2):hover {
          background-color: #f2f2f3;
        }

      }
      td {
        padding-left: 10px;

        &.hh {
          width: 80px;
          color: #b5b5b5;
        }
        &.ar, &.al {
          color: #646464;
          a:hover {
            color: #000;
          }
        }
        

      }
      &.even {
        background-color: #fafafa;
      }
      &.select {
        background-color: #f0f0f0;
      }
      &:nth-child(n+2):hover {
        background-color: #f2f2f3;
      }
      

    }
  }
}

</style>