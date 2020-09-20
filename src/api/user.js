import request from '../utils/request'

/**
 * 请求应该附带token
 * @returns {AxiosPromise}
 */
export const findUserList = (current,size,userVo) => {
return request({
  url:"/system/user/findUserPage",
  method:"post",
  params:{
    current,
    size
  },
  data:userVo
});
};

export const addUser = (user) => {
  return request({
    url:"/system/user/addUser",
    method:"post",
    data:user
  });
};
