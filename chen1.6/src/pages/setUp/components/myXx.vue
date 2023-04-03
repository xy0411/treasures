<template>
  <div class="child">
    <div class="text">{{ getParentData  }}</div>
    <el-input class="input" type="text" v-model="childData" />
    <el-button disabled>给父组件传值</el-button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps(["setChild"]);

let getParentData  = computed(() => props.setChild);
let childData = ref("🍊🍉🍒");
defineExpose({
  childData
});
</script>

<style lang='less' scoped>
.child {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .input {
    width: 200px;
  }
  .text {
    width: 200px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>