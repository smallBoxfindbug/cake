package com.tunpu.tunmall.mall.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 
 * 
 * @author longchaomin
 * @email 2900645253@qq.com
 * @date 2021-08-04 12:37:27
 */
@Data
@TableName("goods")
public class GoodsEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@TableId
	private Integer id;
	/**
	 * 
	 */
	private String goodName;
	/**
	 * 
	 */
	private Integer smallType;
	/**
	 * 
	 */
	private Integer type;
	/**
	 * 
	 */
	private Integer price;
	/**
	 * 
	 */
	private String introduc;
	/**
	 * 
	 */
	private String indexImg;
	/**
	 * 
	 */
	private String introducImg;

}
