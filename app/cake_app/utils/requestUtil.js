const BASE_URL = "http://124.71.230.178:8080"
export const getDateRequest = options => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || "GET",
			data: options.data || {},
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			characterEncoding:"utf-8",
			success: (res) => {
				if (res.statusCode !== 200) {
					return uni.showToast({
						title: "获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: "请求接口失败!"
				})
				reject(err)
			}
		})
	})
}
