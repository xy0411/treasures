import { defineStore } from "pinia"

export const useCommon = defineStore('useCommon', {
    // 数据
    state: () => {
        return {
            authName: 'xiaoyang',
            // 迎合未来项目发展，使用pinia全局获取个人信息
            userValues: {
                name: 'billie',
                age: 21,
                textareas: '美国加利福尼亚州洛杉矶，美国女歌手、词曲作者、模特'
            }
        }
    },
    // 计算
    getters: {

    },
    // 方法
    actions: {
        changePersonalUserValues(val) {
            this.userValues = val
        }
    },
    // 需修改pinia值，才能将state数据存入浏览器中
    persist: {
        enabled: true,
        storage: sessionStorage
    }
})