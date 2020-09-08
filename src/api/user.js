import request from '../utils/request'

/**
 * 请求应该附带token
 * @returns {AxiosPromise}
 */
export const findUserList = () => {
return request({
  url:"/system/user",
  method:"get"
});
}
