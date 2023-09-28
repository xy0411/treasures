<template>
	<div class="decrypt">
        <div class="top">
            <div class="style">3.0数据库用户加密密码</div>
            <el-input v-model.trim="cin" @input="qwer"></el-input>
            <div class="style">=自=动=解=密=></div>
            <div class="style">登录密码</div>
            <el-input v-model="cout" readonly></el-input>
        </div>
        <div class="bottom">
            <el-link class="style" type="primary" href="https://szkzyun.com/" target="_blank">去登陆吧</el-link>
        </div>
	</div>
</template>

<script setup>
import { Encrypt, Decrypt } from '@/utils/crypto'

let cin = ref('')
let cout = ref('')

function qwer() {
    // cout.value = Encrypt(cin.value)
    cout.value = Decrypt(cin.value)
}

</script>

<style lang="less" scoped>
.decrypt {
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .top {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &>.el-input {
            width: 280px;
        }
        &>div {
            width: max-content;
        }
        .style {
            font-style: italic;
            font-size: 23px;
            font-weight: bold;
        }
    }
    .bottom {
        .style {
            font-style: italic;
            font-size: 23px;
            font-weight: bold;
        }
    }
}
</style>
