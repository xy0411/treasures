<template>
	<div class="encrypt">
        <div>
            <div class="title center">请输入需要加密的密码</div>
            <div>加密规则：将输入需要加密的密码中的所有为字母的字符按照字母表顺序往前推四个(区分大小写),其余字符不做处理。</div>
        </div>
        <el-input label="需要加密密码" class="put_ciphertext" v-model.trim="str" @input="convert(str)"></el-input>
        <span class="title">密码加密完成</span>
        <el-input label="完成加密密码" class="get_ciphertext" v-model.trim="encryptStr" readonly>{{ encryptStr }}</el-input>
	</div>
</template>

<script>
export default {
	data() {
		return {
			str: '',
            encryptStr: ''
		};
	},
	methods: {
        convert(str) {
            let arr = Array.from(str);
            let tmp = []
            arr.forEach(item => {
                if(/^[A-Za-z]*$/g.test(item)) {
                    let a = item.charCodeAt(0) - 4
                    if(a<65) {
                        a = 90 - (65 - a)
                    } else if(a<97&&a>90) {
                        a = 122 - (97 - a)
                    }
                    tmp.push(String.fromCharCode(a))
                } else {
                    tmp.push(item)
                }
            })
            let result = ''
            tmp.forEach(it=>{
                result+=it
            })
            // return result
            this.encryptStr = result
        }
	}
};
</script>

<style lang="less" scoped>
.encrypt {
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .put_ciphertext,
    .get_ciphertext {
        width: 300px;
    }
    .title {
        font-size: 1.8rem;
        font-weight: bold;
    }
    .center {
        text-align: center;
    }
}
</style>
