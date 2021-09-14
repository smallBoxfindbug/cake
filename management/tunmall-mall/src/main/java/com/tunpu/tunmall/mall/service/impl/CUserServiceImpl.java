package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.CUserDao;
import com.tunpu.tunmall.mall.entity.CUserEntity;
import com.tunpu.tunmall.mall.service.CUserService;


@Service("cUserService")
public class CUserServiceImpl extends ServiceImpl<CUserDao, CUserEntity> implements CUserService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<CUserEntity> page = this.page(
                new Query<CUserEntity>().getPage(params),
                new QueryWrapper<CUserEntity>()
        );

        return new PageUtils(page);
    }

}