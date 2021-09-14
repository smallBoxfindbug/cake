package com.tunpu.tunmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.tunmall.mall.entity.TypeEntity;

import java.util.Map;

/**
 * 
 *
 * @author longchaomin
 * @email 2900645253@qq.com
 * @date 2021-05-18 11:24:49
 */
public interface TypeService extends IService<TypeEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

