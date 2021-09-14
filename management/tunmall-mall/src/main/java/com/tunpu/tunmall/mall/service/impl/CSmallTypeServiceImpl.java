package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.CSmallTypeDao;
import com.tunpu.tunmall.mall.entity.CSmallTypeEntity;
import com.tunpu.tunmall.mall.service.CSmallTypeService;


@Service("cSmallTypeService")
public class CSmallTypeServiceImpl extends ServiceImpl<CSmallTypeDao, CSmallTypeEntity> implements CSmallTypeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<CSmallTypeEntity> page = this.page(
                new Query<CSmallTypeEntity>().getPage(params),
                new QueryWrapper<CSmallTypeEntity>()
        );

        return new PageUtils(page);
    }

}