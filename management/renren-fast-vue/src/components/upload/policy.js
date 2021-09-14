/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 龙朝敏
 * @Date: 2021-05-19 13:49:16
 * @LastEditors: 龙朝敏
 * @LastEditTime: 2021-05-19 13:49:39
 */
import http from '@/utils/httpRequest.js'
export function policy() {
   return  new Promise((resolve,reject)=>{
        http({
            url: http.adornUrl("/thirdparty/oss/policy"),
            method: "get",
            params: http.adornParams({})
        }).then(({ data }) => {
            resolve(data);
        })
    });
}