package com.tunpu.tunmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.tunmall.mall.entity.CQualEntity;

import java.util.Map;

/**
 * 
 *
 * @author longchaomin
 * @email 2900645253@qq.com
 * @date 2021-08-04 12:37:27
 */
public interface CQualService extends IService<CQualEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

