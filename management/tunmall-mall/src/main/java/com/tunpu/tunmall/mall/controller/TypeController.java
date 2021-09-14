package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.TypeEntity;
import com.tunpu.tunmall.mall.service.TypeService;
import com.tunpu.common.utils.PageUtils;
import com.tunpu.common.utils.R;



/**
 * 
 *
 * @author longchaomin
 * @email 2900645253@qq.com
 * @date 2021-05-18 11:24:49
 */
@RefreshScope
@RestController
@RequestMapping("mall/type")
public class TypeController {
    @Autowired
    private TypeService typeService;

    @Value("${mall.user.name}")
    private String name;
    @Value("${mall.user.age}")
    private Integer age;

    @RequestMapping("test")
    public R test(){
        return R.ok().put("name",name).put("age",age);
    }

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = typeService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Integer id){
		TypeEntity type = typeService.getById(id);

        return R.ok().put("type", type);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody TypeEntity type){
		typeService.save(type);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody TypeEntity type){
		typeService.updateById(type);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Integer[] ids){
		typeService.removeByIds(Arrays.asList(ids));
        return R.ok();
    }

}
