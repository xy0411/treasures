import axios from "axios";

// build http header
// function buildHeader(option) {
//   let token = storage.get('token') ? storage.get('token') : null
//   if (!token) return {}
//   let headers = {
//       Authorization: token
//   }
//   if (option) {
//       headers = { ...headers, ...option }
//   }
//   let headerUserId = storage.get('userInfo') ? JSON.parse(storage.get("userInfo")).user_id : null

//   if (headerUserId) {
//       headerUserId = Encrypt(headerUserId)
//       headers['HeaderUserId'] = headerUserId
//   }
//   return headers
// }

const httpUtil = axios.create({
  headers: {
    retry: 1,
    retryInterval: 1000,
    CHANNEL_ID: "Yang.Xiao1"
  },
  withCredentials: false
});

// wcms是否走本地
const wcms = window.localStorage.getItem("wcms");

// 请求前拦截
httpUtil.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 请求后返回数据拦截
httpUtil.interceptors.response.use(
  res => {
    return (res && res.data) || Object.create(null);
  }
);

// 新增方法ajax 支持本地mock 数据访问
httpUtil.ajax = options => {
  return new Promise((resolve, reject) => {
    // 请求方式
    options.method = options.method || "GET";
    // url
    // 静态json资源
    if (options.state && wcms == "local") {
      options.url = options.api
        ? `../../mockDev/${options.state}/${options.url}.json`
        : "../../mockDev/" + options.state + "/" + options.key + ".json";
    }

    if (options.method == "GET" && options.data) {
      options.url = options.url + "?" + parseParam(options.data);
    }
    httpUtil({
      // baseURL: options.baseUrl,
      url: options.url,
      method: options.method,
      data: options.data ? options.data : null,
      params: options.params ? options.params : null,
      // headers: buildHeader(options),
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err.data);
      });
  });
};

export default httpUtil;
