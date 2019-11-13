import router from '@/router'
import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// axios配置
const service = axios.create({
  baseURL: process.env.VUE_APP_API, // axios 基础地址
  withCredentials: true
  // timeout: 3000 // 请求超时时间
})

// request 拦截器-------------------------------------------------------------
service.interceptors.request.use(
  config => {
    // 这里写所有请求之前都要执行的操作
    config.headers.token = '123456789'
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// response 拦截器------------------------------------------------------------
service.interceptors.response.use(
  response => {
    // 这里写所有请求完成后都要执行的操作

    return response
  },
  error => {
    return Promise.reject(error)
  }
)
// ---------------------------------------------------------------------------
export default service
