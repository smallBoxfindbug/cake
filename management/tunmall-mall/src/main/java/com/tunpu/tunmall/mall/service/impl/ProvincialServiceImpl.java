package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.ProvincialDao;
import com.tunpu.tunmall.mall.entity.ProvincialEntity;
import com.tunpu.tunmall.mall.service.ProvincialService;


@Service("provincialService")
public class ProvincialServiceImpl extends ServiceImpl<ProvincialDao, ProvincialEntity> implements ProvincialService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<ProvincialEntity> page = this.page(
                new Query<ProvincialEntity>().getPage(params),
                new QueryWrapper<ProvincialEntity>()
        );

        return new PageUtils(page);
    }

}