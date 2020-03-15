<template>
  <div class="bottom_bar">
    <MusicBar/>
    BottomBar
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MusicBar from './MusicBar.vue';

@Component({
  components: {
    MusicBar
  }
})
export default class BottomBar extends Vue {


}
</script>

<style lang="scss" scoped>
.bottom_bar {


}

</style>