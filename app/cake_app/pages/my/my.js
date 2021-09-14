//本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm
import app from "../../App.vue"


	// 定义全局参数,控制数据加载
	var _self, page = 1,timer = null;

	export default {
		data() {
			return {
				loadingText: '',
				animation: '',
				animationData: {},
 
				page:0,//当前分页页码
				apiUrl:'https://www.ymznkf.com/wx_server',//后端接口地址
				id:'',//传值使用,方便存在本地的locakStorage  
				del_id:''//方便存在本地的locakStorage  
			}
		},
		components:{

		},
		onLoad(options) {
			_self = this;
			
			//检查是否登录参考代码,需要用的时候，可以把注释取掉
			//if(this.checkLogin()==false){
			//	return;
			//}
			
			//this.getLaction();//得到gps

			this.page=0;

			//检测有没有传入id参数
			if (options.id != null && options.id !=""){
				this.id=options.id;
			}  
			
			// 初始化一个动画
			var animation = uni.createAnimation({
				transformOrigin: "50% 0 50%",
				duration: 1000, //动画持续1秒
				timingFunction: 'linear', //linear 全程匀速运动
				delay: 200 //延迟两秒执行动画
			})
			this.animation = animation;
			this.scaleAndScale();

			//执行初始化,需要用的时候，可以把注释取掉
			//this.Refresh("init");

		},
		onShow() {
			console.log("on show");
			//if(this.checkLogin()==false){
			//	return;
			//}

			//执行初始化,需要用的时候，可以把注释取掉
			//this.Refresh("init");
		},
		onPullDownRefresh: function() {
			//下拉刷新的时候请求一次数据
			this.Refresh();
		},
		methods: {
			// 定义动画内容
			scaleAndScale() {
				// 定义动画内容
				this.animation.opacity(0, 1).step() //先放大1,2倍
				this.animation.opacity(1, 0).step() //缩小至原来的大小
				// 导出动画数据传递给data层
				this.animationData = this.animation.export(); //每次执行导出动画时 会覆盖之前的动画
			},
			noscaleAndScale() {
				this.animation.scale(1, 1).step()
				this.animationData = this.animation.export()
			},
			/**
			* my_4_4处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_4_4_click:function(event){
			
			},
			
			/**
			* my_6_6处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_6_6_click:function(event){
			
			},
			
			/**
			* my_16_16处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_16_16_click:function(event){
			
			},
			
			/**
			* my_17_17处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_17_17_click:function(event){
			
			},
			
			/**
			* my_21_21处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_21_21_click:function(event){
			
			},
			
			/**
			* my_22_22处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_22_22_click:function(event){
			
			},
			
			/**
			* my_25_25处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_25_25_click:function(event){
			
			},
			
			/**
			* my_28_28处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_28_28_click:function(event){
			
			},
			
			/**
			* my_31_31处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_31_31_click:function(event){
			
			},
			
			/**
			* my_34_34处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_34_34_click:function(event){
			
			},
			
			/**
			* my_38_38处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_38_38_click:function(event){
			
			},
			
			/**
			* my_40_40处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_40_40_click:function(event){
			
			},
			
			/**
			* my_42_42处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_42_42_click:function(event){
			
			},
			
			/**
			* my_44_44处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_44_44_click:function(event){
			
			},
			
			/**
			* my_46_46处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_46_46_click:function(event){
			
			},
			
			/**
			* my_48_48处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_48_48_click:function(event){
			
			},
			
			/**
			* my_51_51处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_51_51_click:function(event){
			
			},
			
			/**
			* my_53_53处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_53_53_click:function(event){
			
			},
			
			/**
			* my_55_55处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_55_55_click:function(event){
			
			},
			
			/**
			* my_57_57处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_57_57_click:function(event){
			
			},
			
			/**
			* my_59_59处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_59_59_click:function(event){
			
			},
			
			/**
			* my_61_61处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_61_61_click:function(event){
			
			},
			
			/**
			* my_63_63处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_63_63_click:function(event){
			
			},
			
			/**
			* my_65_65处理函数
			* 数据绑定  data-index="{{index}}" 
			* 数据取值  var index = e.currentTarget.dataset.index; var cata = this.list_cata_list[index];
			*/
			my_65_65_click:function(event){
			
			},
			
			

			//刷新数据
			Refresh:function(_action) {
			
				uni.showLoading();
				
				//提交到服务器
				var that = this
				var url=that.apiUrl+'{server_code_file_path}';
				console.log(url);
				uni.request({
				url: url,//后端接口地址，需要改成自己的接口地址
				data: {
					action: _action,//上传动作，如按钮点击会产生click动作，分页也会产生，在后端根据具体的动作来判断事件
					uid: that.getUid(),//上传用户id,在登录中获得
					//上传页面中的变量
					//定义变量---start
					
					//定义变量---end
					id: that.id,//上传id值，后端可以根据此值来操作当前id
					del_id: that.del_id,//在列表中删除按钮选中时，上传到有后端，进行删除操作
					page:that.page
				},
				method: 'GET',
				success: function (res) {//后端返回数据

					// 隐藏导航栏加载框  
					uni.hideNavigationBarLoading();
					// 停止下拉动作  
					uni.stopPullDownRefresh();  

					// 隐藏加载框  
					uni.hideLoading();  

					var tmp = res.data;

					//初始化，对页面上的控件进行赋值操作
					if(_action=="init"){

					}





					//如果后端有返回消息，则弹出消息提示
					if (tmp.message != null && tmp.message != "") {
						uni.showToast({
						title: tmp.message,
						icon: 'none',
						duration: 2000
						})
					}



					//如果后端有返回页码，则更改当前页码
					if(tmp.page!=null && tmp.page!=""){
						page=tmp.page;
					}					

				},
				fail: function (res) {
					uni.showToast({
						title: "服务器访问失败",
						icon: 'none',
						duration: 2000
					})
					console.log(res.data);
					console.log('is failed')
				}
				})
			},
		}
	}
