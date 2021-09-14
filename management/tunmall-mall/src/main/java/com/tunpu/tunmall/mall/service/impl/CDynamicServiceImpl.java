package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.CDynamicDao;
import com.tunpu.tunmall.mall.entity.CDynamicEntity;
import com.tunpu.tunmall.mall.service.CDynamicService;


@Service("cDynamicService")
public class CDynamicServiceImpl extends ServiceImpl<CDynamicDao, CDynamicEntity> implements CDynamicService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<CDynamicEntity> page = this.page(
                new Query<CDynamicEntity>().getPage(params),
                new QueryWrapper<CDynamicEntity>()
        );

        return new PageUtils(page);
    }

}