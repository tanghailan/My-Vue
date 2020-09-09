import request from '../utils/request'

/**
 * 请求应该附带token
 * @returns {AxiosPromise}
 */
export const findRoleList = () => {
  return request({
    url:"/system/role",
    method:"get",
  });
};
