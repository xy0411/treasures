import { createI18n } from "vue-i18n";

import cn from "./config/cn";
import en from "./config/en";
import enLocale from "element-plus/lib/locale/lang/en";
import zhLocale from "element-plus/lib/locale/lang/zh-CN";

//使用的是sessionStroage中存储的的lang，默认是中文简体cn
let language = window.sessionStorage.getItem("lang") || "cn";
const i18n = createI18n({
	locale: language, //将i18n的locale设置为你需要的语言
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
