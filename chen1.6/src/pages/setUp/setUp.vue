<template>
  <div class="parent">
    <div class="left">
      <div class="text" v-text="getChildData.value"></div>
      <el-input class="input" type="text" v-model="parentData" />
      <el-button disabled>给子组件传值</el-button>
    </div>
    <div class="right">
      <component ref="childComponent" :is="child" :setChild="parentData"></component>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import child from "./components/myXx.vue";

let parentData = ref("🍒🍉🍊");

const childComponent  = ref();
let getChildData = ref("");

onMounted(() => {
  // 之所以在上面的v-text加上.value,大概是defineExpose返回的是一个ref对象
  getChildData.value = computed(() => childComponent .value.childData);
});
</script>

<style lang='less' scoped>
.parent {
  height: 100%;
  background: #baccd9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left,
  .right {
    width: 40%;
    height: 50%;
    background: #2b73af;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10%;
    overflow: hidden;
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
}
</style>