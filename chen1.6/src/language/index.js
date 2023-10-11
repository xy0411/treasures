import { createI18n } from "vue-i18n";

import cn from "./config/cn";
import en from "./config/en";
import enLocale from "element-plus/lib/locale/lang/en";
import zhLocale from "element-plus/lib/locale/lang/zh-CN";

let language
//使用的是sessionStroage中存储的的pinia(需转化js对象)，默认是中文简体cn
if(JSON.parse(window.sessionStorage.getItem("useCommon"))) {
	language = JSON.parse(window.sessionStorage.getItem("useCommon")).configs.locale
} else {
	language = 'cn'
}
const i18n = createI18n({
	locale: language ? 'cn' : 'en', //将i18n的locale设置为你需要的语言
	messages: {
		cn: {
			//中文简体
			...cn,
			...zhLocale
		},
		en: {
			//英文
			...en,
			...enLocale
		}
	}
});
export default i18n;
