package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.CDynamicEntity;
import com.tunpu.tunmall.mall.service.CDynamicService;
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
@RequestMapping("mall/cdynamic")
public class CDynamicController {
    @Autowired
    private CDynamicService cDynamicService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = cDynamicService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Integer id){
		CDynamicEntity cDynamic = cDynamicService.getById(id);

        return R.ok().put("cDynamic", cDynamic);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody CDynamicEntity cDynamic){
		cDynamicService.save(cDynamic);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody CDynamicEntity cDynamic){
		cDynamicService.updateById(cDynamic);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Integer[] ids){
		cDynamicService.removeByIds(Arrays.asList(ids));

        return R.ok();
    }

}
