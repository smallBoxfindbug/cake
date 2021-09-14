package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.GoodSpecificationsDao;
import com.tunpu.tunmall.mall.entity.GoodSpecificationsEntity;
import com.tunpu.tunmall.mall.service.GoodSpecificationsService;


@Service("goodSpecificationsService")
public class GoodSpecificationsServiceImpl extends ServiceImpl<GoodSpecificationsDao, GoodSpecificationsEntity> implements GoodSpecificationsService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<GoodSpecificationsEntity> page = this.page(
                new Query<GoodSpecificationsEntity>().getPage(params),
                new QueryWrapper<GoodSpecificationsEntity>()
        );

        return new PageUtils(page);
    }

}