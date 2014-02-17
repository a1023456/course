/*
	柠檬大学内容页样式表
	BY:xiaocong
	Email:xiepinxi@gmail.com
*/
/*广告加载程序*/
var amazone_ad = function (data,adid){
	var content;
	if(document.getElementById("content")){
		content = document.getElementById("content").innerHTML;
	}else{
		content = "";
	}
	this.data = data || content;
	this.adid = adid || "amazone";
}

amazone_ad.prototype = {
	findbook: function (){
		var part = /《(.*?)》/g;
		if((redata = this.data.match(part) ) != null){
			return redata;
		}else{
			return false;	
		}	
	},
	ad_keywords:function (key,type){
		var type = type || "am_book";
		switch(type){
			case "am_book":
				var ht = "<div class=\"amazone_book\"><h2>"+key+"  相关教材</h2><iframe src=\"http:\/\/rcm-cn.amazon.cn/e/cm?t=xiepinxi-23&o=28&p=12&l=st1&mode=books-cn&search="+key+"&fc1=000000&lt1=_blank&lc1=3366FF&bg1=FFFFFF&f=ifr\" marginwidth=\"0\" marginheight=\"0\" width=\"300\" height=\"250\" border=\"0\" frameborder=\"0\" style=\"border:none;\" scrolling=\"no\"></iframe></div>";
				
			default:
				var ht = "<div class=\"amazone_book\"><h2>"+key+"  相关教材</h2><iframe src=\"http:\/\/rcm-cn.amazon.cn/e/cm?t=xiepinxi-23&o=28&p=12&l=st1&mode=books-cn&search="+key+"&fc1=000000&lt1=_blank&lc1=3366FF&bg1=FFFFFF&f=ifr\" marginwidth=\"0\" marginheight=\"0\" width=\"300\" height=\"250\" border=\"0\" frameborder=\"0\" style=\"border:none;\" scrolling=\"no\"></iframe></div>";
			;		
		}
		if(document.getElementById(this.adid)){
			document.getElementById(this.adid).innerHTML += ht;	
		}
	},
	replc_a:function(da){
		var _temp_data = new Array();
		for(var i_da in da){
			//alert(escape(da[i_da]));
			_temp_data[escape(da[i_da])] = da[i_da];
			//alert(da[i_da]);
		}
		return _temp_data;
	},
	stat:function(){
		//alert(1);
		var ad_echo = this.findbook(this.data);
		//alert(this.data);
		if( !ad_echo){
		
		}else{
			ad_echo = this.replc_a(ad_echo);	
			for(var d in ad_echo){
				ad_echo[d] = ad_echo[d].replace(/[\b《|》\b]/g,""); //清除书名号
				if(ad_echo[d].length <25){
					this.ad_keywords(ad_echo[d]);	
				}
				
			}
		}	
	}
}
//var new_amazone_ad = new amazone_ad();