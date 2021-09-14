package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.CCartDao;
import com.tunpu.tunmall.mall.entity.CCartEntity;
import com.tunpu.tunmall.mall.service.CCartService;


@Service("cCartService")
public class CCartServiceImpl extends ServiceImpl<CCartDao, CCartEntity> implements CCartService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<CCartEntity> page = this.page(
                new Query<CCartEntity>().getPage(params),
                new QueryWrapper<CCartEntity>()
        );

        return new PageUtils(page);
    }

}