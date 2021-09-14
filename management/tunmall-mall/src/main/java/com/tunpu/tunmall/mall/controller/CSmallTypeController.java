package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.CSmallTypeEntity;
import com.tunpu.tunmall.mall.service.CSmallTypeService;
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
@RequestMapping("mall/csmalltype")
public class CSmallTypeController {
    @Autowired
    private CSmallTypeService cSmallTypeService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = cSmallTypeService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Integer id){
		CSmallTypeEntity cSmallType = cSmallTypeService.getById(id);

        return R.ok().put("cSmallType", cSmallType);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody CSmallTypeEntity cSmallType){
		cSmallTypeService.save(cSmallType);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody CSmallTypeEntity cSmallType){
		cSmallTypeService.updateById(cSmallType);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Integer[] ids){
		cSmallTypeService.removeByIds(Arrays.asList(ids));

        return R.ok();
    }

}
