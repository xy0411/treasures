import { defineStore } from "pinia"

export const useCommon = defineStore('useCommon', {
    // 数据
    state: () => {
        return {
            authName: 'xiaoyang'
        }
    },
    // 计算
    getters: {

    },
    // 方法
    actions: {

    },
    persist: {
        enabled: true,
        storage: sessionStorage
    }
})