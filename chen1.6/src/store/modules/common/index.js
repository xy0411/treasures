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
            },
            // 全局配置
            configs: {
                size: 'default',
                locale: true,
                showFooter: true
            }
        }
    },
    // 计算
    getters: {

    },
    // 方法
    actions: {
        // 修改全局用户名
        changePersonalUserValues(val) {
            this.userValues = val
        },
        // 修改全局组件语言
        changeConfigsLanguage() {
            this.configs.locale = !this.configs.locale
        },
        // 修改全局组件大小
        changeConfigsSize(val) {
            this.configs.size = val
        },
        // 显示隐藏底部栏
        changeConfigsShowFooter(val) {
            this.configs.showFooter = val
        }
    },
    // 需修改pinia值，才能将state数据存入浏览器中
    persist: {
        enabled: true,
        storage: sessionStorage, // 不支持跨标签页共享数据
        // storage: localStorage // 支持跨标签页共享数据
    }
})