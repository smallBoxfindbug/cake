/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 龙朝敏
 * @Date: 2021-05-14 12:21:01
 * @LastEditors: 龙朝敏
 * @LastEditTime: 2021-05-18 17:04:27
 */
/**
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {};

  // api接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:88/api';

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();
