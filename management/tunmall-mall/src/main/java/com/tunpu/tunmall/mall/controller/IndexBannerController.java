package com.tunpu.tunmall.mall.controller;

import java.util.Arrays;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tunpu.tunmall.mall.entity.IndexBannerEntity;
import com.tunpu.tunmall.mall.service.IndexBannerService;
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
@RequestMapping("mall/indexbanner")
public class IndexBannerController {
    @Autowired
    private IndexBannerService indexBannerService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = indexBannerService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{goodId}")
    public R info(@PathVariable("goodId") Integer goodId){
		IndexBannerEntity indexBanner = indexBannerService.getById(goodId);

        return R.ok().put("indexBanner", indexBanner);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody IndexBannerEntity indexBanner){
		indexBannerService.save(indexBanner);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody IndexBannerEntity indexBanner){
		indexBannerService.updateById(indexBanner);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Integer[] goodIds){
		indexBannerService.removeByIds(Arrays.asList(goodIds));

        return R.ok();
    }

}
