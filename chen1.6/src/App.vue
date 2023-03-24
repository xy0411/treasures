<template>
  <div class="main">
    <el-config-provider :locale="locale?zhCn:en" :size='size'>
      <template v-if="isMenu">
        <layout></layout>
      </template>
      <template v-else>
        <router-view></router-view>
      </template>
    </el-config-provider>
  </div>
</template>

<script>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import layout from "@/layout/layout.vue"
import { useCommon } from '@store/index'
export default {
  data() {
    let locale = computed(()=>useCommon().configs.locale)
    let size = computed(()=>useCommon().configs.size)
    return {
      isMenu: false,
      locale: locale,
      size: size,
      zhCn: zhCn,
      en: en
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
