<template>
  <div class="dataScreen">
    <div class="dataScreen-content" @click="backHome">
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        backHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang='less' scoped>
.dataScreen {
    height: 100vh;
    display: flex;
    flex-direction: column;
    .dataScreen-content {
        padding: 12px 40px 20px;
        flex-grow: 1;
        background-image: url('@/assets/images/billiebeneathtree.jpg');
        background-size: 100% 100%;
        cursor: pointer;
    }
}
</style>