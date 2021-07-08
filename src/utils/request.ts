import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import qs from 'qs'

const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 20000
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.method === 'post') {
      config.data = qs.stringify({
        ...config.data
      })
    } else {
      config.params = { ...config.params }
    }
    return config
  },
  (error:AxiosError) => {
    return Promise.reject(error)
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.resolve(error.response)
  }
);

export default service;

// request.ts文件import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';import qs from 'qs';// 创建axios实例const service: AxiosInstance = axios.create({  baseURL: process.env.VUE_APP_BASE_API,  timeout: 20000 // 请求超时时间});service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';// 请求拦截器service.interceptors.request.use((config: AxiosRequestConfig) => {  if (store.getters.token) {    // 让每个请求携带自定义token 请根据实际情况自行修改    config.headers.token = getToken();  }  // 如果请求方式为post，用qs转化为formData格式提交  config.method === 'post' ?    config.data = qs.stringify({      ...config.data    }) :    config.params = {      ...config.params    };  return config;}, (error: AxiosError) => {  return Promise.reject(error);});// 响应拦截器service.interceptors.response.use((response: AxiosResponse) => {  // 请求不成功，提示信息  if (response.data.code !== 200) {    message.warn(response.data.msg);  }  return response.data;}, (error: AxiosError) => {  return Promise.resolve(error.response);});export default service;// api文件夹，新建一个管理用户的接口文件user.ts// 引入文件import request from '@/utils/request';// 登录接口export const login = (data: any) => {  return request({    url: 'url',    method: 'post',  });};