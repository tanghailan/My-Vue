import request from '../utils/request'

/**
 * 请求应该附带token
 * @returns {AxiosPromise}
 */
export const findUserList = (current,size) => {
return request({
  url:"/system/user",
  method:"get",
  params:{
    current,
    size
  }
});
};
