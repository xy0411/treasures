import { defineStore } from "pinia"

export const useOther = defineStore('useOther', {
    // 数据
    state: () => {
        return {
            value: 'local'
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
        key: 'wcms',
        storage: localStorage
    }
})