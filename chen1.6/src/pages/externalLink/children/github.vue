<template>
  <div class="github">
    <div class="a-content">Github 仓库：
        <a href="https://github.com/xy0411/treasures" target="_blank">https://github.com/xy0411/treasures</a>
        🍒🍉🍊
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        gotoGitHub() {
            window.open('https://github.com/xy0411/treasures') // 新打开一个页面打开另一网址
            // window.location.href = 'https://github.com/xy0411/treasures' // 当前页面打开另一网址 - 属性
            // window.location = 'https://github.com/xy0411/treasures' // 当前页面打开另一网址 - 对象
        }
    },
    mounted() {
        this.gotoGitHub()
    }
}
</script>

<style lang='less' scoped>
.github {
    height: 100%;
    font-size: 1.4rem;
    .a-content {
        width: max-content;
        margin: 4% auto;
        font-weight: bold;
    }
}
</style>