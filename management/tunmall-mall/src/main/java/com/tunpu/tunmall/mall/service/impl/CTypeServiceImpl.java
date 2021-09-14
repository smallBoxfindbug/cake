package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.CTypeDao;
import com.tunpu.tunmall.mall.entity.CTypeEntity;
import com.tunpu.tunmall.mall.service.CTypeService;


@Service("cTypeService")
public class CTypeServiceImpl extends ServiceImpl<CTypeDao, CTypeEntity> implements CTypeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<CTypeEntity> page = this.page(
                new Query<CTypeEntity>().getPage(params),
                new QueryWrapper<CTypeEntity>()
        );

        return new PageUtils(page);
    }

}