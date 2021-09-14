package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.GoodGalleryDao;
import com.tunpu.tunmall.mall.entity.GoodGalleryEntity;
import com.tunpu.tunmall.mall.service.GoodGalleryService;


@Service("goodGalleryService")
public class GoodGalleryServiceImpl extends ServiceImpl<GoodGalleryDao, GoodGalleryEntity> implements GoodGalleryService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<GoodGalleryEntity> page = this.page(
                new Query<GoodGalleryEntity>().getPage(params),
                new QueryWrapper<GoodGalleryEntity>()
        );

        return new PageUtils(page);
    }

}