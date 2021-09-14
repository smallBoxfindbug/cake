package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.GoodSpecificationsEntity;
import com.tunpu.tunmall.mall.service.GoodSpecificationsService;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.R;



/**
 * 
 *
 * @author longchaomin
 * @email 2900645253@qq.com
 * @date 2021-08-04 12:37:27
 */
@RestController
@RequestMapping("mall/goodspecifications")
public class GoodSpecificationsController {
    @Autowired
    private GoodSpecificationsService goodSpecificationsService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = goodSpecificationsService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{goodSId}")
    public R info(@PathVariable("goodSId") Integer goodSId){
		GoodSpecificationsEntity goodSpecifications = goodSpecificationsService.getById(goodSId);

        return R.ok().put("goodSpecifications", goodSpecifications);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody GoodSpecificationsEntity goodSpecifications){
		goodSpecificationsService.save(goodSpecifications);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody GoodSpecificationsEntity goodSpecifications){
		goodSpecificationsService.updateById(goodSpecifications);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Integer[] goodSIds){
		goodSpecificationsService.removeByIds(Arrays.asList(goodSIds));

        return R.ok();
    }

}
