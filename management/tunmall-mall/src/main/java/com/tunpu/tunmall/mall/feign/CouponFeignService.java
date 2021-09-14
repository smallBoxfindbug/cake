package com.tunpu.tunmall.mall.feign;

import com.tunpu.common.utils.R;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author 龙朝敏
 * @describe
 * @create 2021-05-18
 */
@FeignClient("tunmall-coupon")
public interface CouponFeignService {
    @RequestMapping("/coupon/coupon/member/list")
    R membercoupon();
}
