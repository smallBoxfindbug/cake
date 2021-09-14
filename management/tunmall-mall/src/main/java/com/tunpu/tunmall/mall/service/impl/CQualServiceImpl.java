package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.CQualDao;
import com.tunpu.tunmall.mall.entity.CQualEntity;
import com.tunpu.tunmall.mall.service.CQualService;


@Service("cQualService")
public class CQualServiceImpl extends ServiceImpl<CQualDao, CQualEntity> implements CQualService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<CQualEntity> page = this.page(
                new Query<CQualEntity>().getPage(params),
                new QueryWrapper<CQualEntity>()
        );

        return new PageUtils(page);
    }

}