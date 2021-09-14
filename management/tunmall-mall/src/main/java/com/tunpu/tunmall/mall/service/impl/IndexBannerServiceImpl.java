package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.IndexBannerDao;
import com.tunpu.tunmall.mall.entity.IndexBannerEntity;
import com.tunpu.tunmall.mall.service.IndexBannerService;


@Service("indexBannerService")
public class IndexBannerServiceImpl extends ServiceImpl<IndexBannerDao, IndexBannerEntity> implements IndexBannerService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<IndexBannerEntity> page = this.page(
                new Query<IndexBannerEntity>().getPage(params),
                new QueryWrapper<IndexBannerEntity>()
        );

        return new PageUtils(page);
    }

}