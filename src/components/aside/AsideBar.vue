<template>
  <div class="aside_bar">
    AsideBar
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AsideBar extends Vue {


}
</script>

<style lang="scss" scoped>
.aside_bar {
  height: 100%;
  background-color: #ededed;

}

</style>