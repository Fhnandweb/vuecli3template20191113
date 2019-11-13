import axios from '../request/request.js'
// 请求
// 示例
export function test (data) {
  return axios({
    url: '/users',
    method: 'post',
    data: data
  })
}
