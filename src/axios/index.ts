import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs';

Vue.use(VueAxios, axios);

axios.defaults.withCredentials = true;
axios.defaults.timeout = 1000 * 10;  // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  // 配置请求头
axios.defaults.baseURL = 'http://www.zhuoran.fun:3000/';  //配置接口地址 

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) =>{
  console.log('错误的传参')
  return Promise.reject(error);
});

export default axios;

// 返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) =>{
//   // 对响应数据做些事
//   if(!res.data.success){
//     return Promise.resolve(res);
//   }
//   return res;
// }, (error) => {
//   console.log('网络异常')
//   return Promise.reject(error);
// });
