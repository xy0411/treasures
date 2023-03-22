<template>
  <div class="animation">
    <div class="outer">
      <div class="box1 box"></div>
      <div class="box2 box"></div>
      <div class="box3 box"></div>
      <div class="box4 box"></div>
      <div class="box5 box"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.animation {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .outer {
    display: flex;
    justify-content: space-around;
    padding: 2rem 1rem 0 1rem;
    width: 100rem;
    height: 50rem;
    border-bottom: 1rem solid #000;
    overflow: hidden;
    .box {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      animation: ball 1s forwards linear infinite alternate;
    }
    .box1 {
        background: red;
        animation-delay: .1s;
    }
    .box2 {
        background: blue;
        animation-delay: .2s;
    }
    .box3 {
        background: yellow;
        animation-delay: .3s;
    }
    .box4 {
        background: green;
        animation-delay: .4s;
    }
    .box5 {
        background: pink;
        animation-delay: .5s;
    }
  }
}
@keyframes ball {
  from {
    margin-top: 0;
  }
  to {
    margin-top: calc(50rem - 10rem);
  }
}
</style>