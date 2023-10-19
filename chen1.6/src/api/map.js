import axios from 'axios'

export function getChinaMap() {
    return axios.get("https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json")
}

export function getHuNanMap() {
    return axios.get("https://geo.datav.aliyun.com/areas_v3/bound/430000_full.json")
}

export function getChenZhouMap() {
    return axios.get("https://geo.datav.aliyun.com/areas_v3/bound/431000_full.json")
}

export function getZingXingMap() {
    return axios.get("https://geo.datav.aliyun.com/areas_v3/bound/431081.json")
}
