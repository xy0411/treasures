<template>
  <div class="wapper">
    <div class="wapper-foot">
        <div class="main">
            <div class="main-bottom">
                <div class="main-top"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang='less' scoped>
.wapper {
    width: 100%;
    background: #eef2fe url('https://res.17roco.qq.com/images/bg.jpg') no-repeat center top;
    overflow: hidden;
    .wapper-foot {
        background: url('https://ossweb-img.qq.com/images/roco/web2014/content.jpg') no-repeat center bottom;
        .main {
            width: 1000px;
            margin: 0 auto;
            background: #eef2fe url('https://ossweb-img.qq.com/images/roco/web2014/bg-foot.jpg') no-repeat center top;
            .main-bottom {
                width: 1000px;
                height: 4950px;
                background: url('https://ossweb-img.qq.com/images/roco/web2014/content-bottom.jpg') no-repeat center bottom;
                .main-top {
                    height: 80px;
                    padding-top: 115px;
                }
            }
        }
    }
}
</style>