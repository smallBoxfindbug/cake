package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.CityEntity;
import com.tunpu.tunmall.mall.service.CityService;
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
@RequestMapping("mall/city")
public class CityController {
    @Autowired
    private CityService cityService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = cityService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{city}")
    public R info(@PathVariable("city") String city){
		CityEntity city1 = cityService.getById(city);

        return R.ok().put("city", city1);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody CityEntity city){
		cityService.save(city);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody CityEntity city){
		cityService.updateById(city);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody String[] citys){
		cityService.removeByIds(Arrays.asList(citys));

        return R.ok();
    }

}
