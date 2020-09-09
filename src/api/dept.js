import request from '../utils/request'

/**
 * 请求应该附带token
 * @returns {AxiosPromise}
 */
export const findDeptAndCount = () => {
  return request({
    url: '/department/findDeptAndCount',
    method: 'get',
  })
}



