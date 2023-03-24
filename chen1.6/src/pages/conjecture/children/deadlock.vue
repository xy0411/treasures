<template>
  <div class="deadlock">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
      <el-backtop target=".infinite-list" :right="100" :bottom="100" />
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    load() {
        this.count += 5;
    }
  },
};
</script>

<style lang='less' scoped>
.deadlock {
  height: 100%;
  .infinite-list {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    margin: 10px;
    color: var(--el-color-primary);
  }
  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
}
</style>