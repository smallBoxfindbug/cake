package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.ProvincialEntity;
import com.tunpu.tunmall.mall.service.ProvincialService;
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
@RequestMapping("mall/provincial")
public class ProvincialController {
    @Autowired
    private ProvincialService provincialService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = provincialService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{pid}")
    public R info(@PathVariable("pid") Integer pid){
		ProvincialEntity provincial = provincialService.getById(pid);

        return R.ok().put("provincial", provincial);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ProvincialEntity provincial){
		provincialService.save(provincial);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody ProvincialEntity provincial){
		provincialService.updateById(provincial);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Integer[] pids){
		provincialService.removeByIds(Arrays.asList(pids));

        return R.ok();
    }

}
