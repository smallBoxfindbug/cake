package com.tunpu.tunmall.mall.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.Query;

import com.tunpu.tunmall.mall.dao.TokenDao;
import com.tunpu.tunmall.mall.entity.TokenEntity;
import com.tunpu.tunmall.mall.service.TokenService;


@Service("tokenService")
public class TokenServiceImpl extends ServiceImpl<TokenDao, TokenEntity> implements TokenService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        IPage<TokenEntity> page = this.page(
                new Query<TokenEntity>().getPage(params),
                new QueryWrapper<TokenEntity>()
        );

        return new PageUtils(page);
    }

}