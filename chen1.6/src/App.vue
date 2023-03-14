<template>
  <div class="main">
    <template v-if="isMenu">
      <layout></layout>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import layout from "@/layout/layout.vue";
export default {
  data() {
    return {
      isMenu: true
    }
  },
  components: {
    layout,
  },
  mounted() {

  },
  watch: {
    $route(to, from) {
      if(to.meta.menuShow===false) {
        this.isMenu = to.meta.menuShow
      } else {
        this.isMenu = true
      }
    }
  }
};
</script>

<style lang='less' scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
