window.onload = function(){
	var imgWrap = $1('.img-wrapper');
	var imgs = $1('.img-item');
	var banner = $1('.banner');
	var arrowR = $1('.arrow-right',banner);
	var arrowL = $1('.arrow-left',banner);
	var circleWrap = $1('.circle-wrapper');
	var index = 0;
	var timer;
	var imgWidth = imgs[0].offsetWidth;
		
	init();
	//初始化生成小圆圈
	function init(){
		var circleStr = '';
		var num = 0;
		for(var i=0; i<imgs.length-1; i++){			
			num++;
			circleStr += '<span class="circle-item">'+ num + '</span>';
		}
		circleWrap.innerHTML = circleStr;
		addClass1(circleWrap.children[0],'active');
	}
	
	var circles = $('.circle-item');
	/*遍历所有的小圆圈，添加点击事件*/
	for(var j=0; j<circles.length; j++){
		circles[j].index = j;
		circles[j].onclick = function(){
			index = this.index;
			imgSwitch();
		}
	}
	
	/*
	 	动态给最后一个位置添加第一张图片
	*/
	/*var firstImg = imgs[0].cloneNode(true);
	imgWrap.appendChild(firstImg);
	imgs = $('.img-item');*/
	
	autoPlay();
	/*自动轮播*/
	function autoPlay(){
		timer = setInterval(function(){
			index++;
			imgSwitch();
		},1500);
	}
	
	/*鼠标悬停*/
	banner.onmouseenter = function(){
		clearInterval(timer);
	}
	
	/*鼠标离开继续自动*/
	banner.onmouseleave = function(){
		autoPlay();
	}
	
	/*左边按钮点击*/
	arrowL.onclick = function(){
		index--;
		imgSwitch();
	}
	
	/*右边按钮点击*/
	arrowR.onclick = function(){
		index++;
		imgSwitch();
	}
	
	//图片切换
	function imgSwitch(){
		//判断是否到达右边界   (如果是右边界，还往右的话，瞬间将图片替换到第一张)
		if(index >= imgs.length){
			imgWrap.style.marginLeft = 0;
			index = 1;
		}
		//左边界处理 (如果是左边界，还往左的话，瞬间将图片替换到最后一张)
		if(index <= -1){
			imgWrap.style.marginLeft = -imgWidth * (imgs.length-1) + 'px';
			index = imgs.length - 2;
		}
		for(var k=0; k<circles.length; k++){
			removeClass1(circles[k],'active');
		}
		//小圆圈的下标  0-8  (当图片显示到最后一张时，看到的是伪第一张，小圆圈第一个高亮)
		if(index == imgs.length-1){
			addClass1(circles[0],'active');
		}else {
			addClass1(circles[index],'active');
		}
		animate1(imgWrap,{
			marginLeft: -imgWidth * index
		},500);
	}
	
	/*小图片移动*/
	$('.lunbo-top-lus').on('mouseenter','.small-picture1',function(event){
		$('.small-picture1').animate({
			marginLeft:55
		},300)
	})	
	$('.lunbo-top-lus').on('mouseleave','.small-picture1',function(event){
		$('.small-picture1').animate({
			marginLeft:60
		},300)
	})	
	$('.lunbo-top-lus').on('mouseenter','.small-picture2',function(event){
		$('.small-picture2').animate({
			marginLeft:55
		},300)
	})	
	$('.lunbo-top-lus').on('mouseleave','.small-picture2',function(event){
		$('.small-picture2').animate({
			marginLeft:60
		},300)
	})	
	$('.lunbo-top-lus').on('mouseenter','.small-picture3',function(event){
		$('.small-picture3').animate({
			marginLeft:55
		},300)
	})	
	$('.lunbo-top-lus').on('mouseleave','.small-picture3',function(event){
		$('.small-picture3').animate({
			marginLeft:60
		},300)
	})	
	$('.lunbo-top-lus').on('mouseenter','.small-picture4',function(event){
		$('.small-picture4').animate({
			marginLeft:55
		},300)
	})	
	$('.lunbo-top-lus').on('mouseleave','.small-picture4',function(event){
		$('.small-picture4').animate({
			marginLeft:60
		},300)
	});	
	
	
	
	
	/*
	思路：
		第一步：当页面加载完后，获取所要操作的节点对象
		第二步：为每个主题菜单项添加一个鼠标浮动事件onmouesenter
				该变当前的主题菜单项的样式  添加一个active类。
				其他的主题菜单项的样式恢复。（去掉active类）

				对应的内容项显示出来   添加一个active类
				其他的内容样样式恢复（隐藏）（去掉active类）
		
		第三步：为sideBox添加要给鼠标离开事件onmouseleave 
				当前被选中的主题菜单项和内容样式恢复（去掉active类）
	*/
	var sideBox = document.getElementById("sideBox");
	var menus = document.querySelectorAll(".menus .item"); //一组主题菜单项
	var contents = document.querySelectorAll(".contents .item"); //一组内容项
	var currentIndex;  //当前被选中项的索引
	
	for(var i = 0;i<menus.length;i++){
		menus[i].index = i;
		menus[i].onmouseenter = function(){
			for(var j = 0;j<menus.length;j++){
				menus[j].className = "item";
				contents[j].className = "item";
			}
			//this
			this.className = "item active";
			contents[this.index].className = "item active";
			currentIndex = this.index;
	
		}
	}
	
	
	sideBox.onmouseleave = function(){
			menus[currentIndex].className = "item";
			contents[currentIndex].className = "item";
	}
	
	
	
	/*倒计时*/
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	var box3 = document.getElementById("box3");
	var box4 = document.getElementById("box4");
	function count(time){
		var date1 = Date.now();
		var date2 = Date.parse(time)
		var temp = date2-date1;
		//1s = 1000ms    
		var ms = temp%1000; //剩余的毫秒数
		var totalSeconds = parseInt(temp/1000); //转换后的总秒数
		var ss = totalSeconds%60; //剩余的秒
		var totalMinutes = parseInt(totalSeconds/60) //剩余的总分钟
		var mm = totalMinutes%60;  //剩余的分钟
		var totalHours = parseInt(totalMinutes/60); //表示剩余的总小时	
		var h = totalHours%24; //剩余的小时
		var day = parseInt(totalHours/24);
	
		var result = "剩余"+day+"天"+h+"小时"+mm+"分钟"+ss+"秒";
		box1.innerHTML = result;
		box2.innerHTML = result;
		box3.innerHTML = result;
		box4.innerHTML = result;
	}
	setInterval(function(){
		count("2016/12/26 24:00:00");
	},1);
	
	
	var lis = document.getElementsByClassName("ulsing");
	var contentList = document.getElementsByClassName("contentlist");
	for( var i = 0; i<lis.length;i++){
		lis[i].index= i;
		lis[i].onmouseenter = function(){
			for( var i = 0; i<lis.length;i++){
				lis[i].className = " ";
			}
			var index = this.index;
			this.className = "active1";
			for (var i = 0; i < contentList.length; i++) {
			contentList[i].style.display = "none";
			}
			contentList[index].style.display = "block";

		}
	}
	
	
	var lis2 = document.getElementsByClassName("ulsing2");
	var contentList2 = document.getElementsByClassName("contentlist2");
	for( var i = 0; i<lis2.length;i++){
		lis2[i].index= i;
		lis2[i].onmouseenter = function(){
			for( var i = 0; i<lis2.length;i++){
				lis2[i].className = " ";
			}
			var index = this.index;
			this.className = "active2";
			for (var i = 0; i < contentList2.length; i++) {
			contentList2[i].style.display = "none";
			}
			contentList2[index].style.display = "block";

		}
	}
	
	var lis3 = document.getElementsByClassName("ulsing3");
	var contentList3 = document.getElementsByClassName("contentlist3");
	for( var i = 0; i<lis3.length;i++){
		lis3[i].index= i;
		lis3[i].onmouseenter = function(){
			for( var i = 0; i<lis3.length;i++){
				lis3[i].className = " ";
			}
			var index = this.index;
			this.className = "active3";
			for (var i = 0; i < contentList3.length; i++) {
			contentList3[i].style.display = "none";
			}
			contentList3[index].style.display = "block";

		}
	}
	
	$(function(){
		/*轮播*/
		var imgWrap1 = $1('.img-wrapper1');
		var imgs1 = $1('.img-item1');
		var banner1 = $1('.banner1');
		var arrowR1 = $1('.arrow-right1',banner1);
		var arrowL1 = $1('.arrow-left1',banner1);
		var circleWrap1 = $1('.circle-wrapper1');
		var index = 0;
		var timer1;
		var imgWidth1 = imgs1[0].offsetWidth;
			
		init1();
		//初始化生成小圆圈
		function init1(){
			var circleStr1 = '';
			for(var i=0; i<imgs1.length-1; i++){			
				circleStr1 += '<span class="circle-item1"></span>';
			}
			circleWrap1.innerHTML = circleStr1;
			addClass1(circleWrap1.children[0],'active1');
		}
		
		var circles1 = $('.circle-item1');
		/*遍历所有的小圆圈，添加点击事件*/
		for(var j=0; j<circles1.length; j++){
			circles1[j].index = j;
			circles1[j].onclick = function(){
				index = this.index;
				imgSwitch1();
			}
		}
		
		/*
		 	动态给最后一个位置添加第一张图片
		*/
		/*var firstImg = imgs[0].cloneNode(true);
		imgWrap.appendChild(firstImg);
		imgs = $('.img-item');*/
		
		autoPlay1();
		/*自动轮播*/
		function autoPlay1(){
			timer1 = setInterval(function(){
				index++;
				imgSwitch1();
			},1500);
		}
		
		/*鼠标悬停*/
		banner1.onmouseenter = function(){
			clearInterval(timer1);
		}
		
		/*鼠标离开继续自动*/
		banner1.onmouseleave = function(){
			autoPlay1();
		}
		
		/*左边按钮点击*/
		arrowL1.onclick = function(){
			index--;
			imgSwitch1();
		}
		
		/*右边按钮点击*/
		arrowR1.onclick = function(){
			index++;
			imgSwitch1();
		}
		
		//图片切换
		function imgSwitch1(){
			//判断是否到达右边界   (如果是右边界，还往右的话，瞬间将图片替换到第一张)
			if(index >= imgs1.length){
				imgWrap1.style.marginLeft = 0;
				index = 1;
			}
			//左边界处理 (如果是左边界，还往左的话，瞬间将图片替换到最后一张)
			if(index <= -1){
				imgWrap1.style.marginLeft = -imgWidth * (imgs1.length-1) + 'px';
				index = imgs1.length - 2;
			}
			for(var k=0; k<circles1.length; k++){
				removeClass1(circles1[k],'active1');
			}
			//小圆圈的下标  0-8  (当图片显示到最后一张时，看到的是伪第一张，小圆圈第一个高亮)
			if(index == imgs1.length-1){
				addClass1(circles1[0],'active1');
			}else {
				addClass1(circles1[index],'active1');
			}
			animate1(imgWrap1,{
				marginLeft: -860 * index
			},500);
		}
	})
	//2	
	$(function(){
		/*轮播*/
		var imgWrap2 = $1('.img-wrapper2');
		var imgs2 = $1('.img-item2');
		var banner2 = $1('.banner2');
		var arrowR2 = $1('.arrow-right2',banner2);
		var arrowL2 = $1('.arrow-left2',banner2);
		var circleWrap2 = $1('.circle-wrapper2');
		var index = 0;
		var timer2;
		var imgWidth2 = imgs2[0].offsetWidth;
			
		init2();
		//初始化生成小圆圈
		function init2(){
			var circleStr2 = '';
			for(var i=0; i<imgs2.length-1; i++){			
				circleStr2 += '<span class="circle-item2"></span>';
			}
			circleWrap2.innerHTML = circleStr2;
			addClass1(circleWrap2.children[0],'active2');
		}
		
		var circles2 = $('.circle-item2');
		/*遍历所有的小圆圈，添加点击事件*/
		for(var j=0; j<circles2.length; j++){
			circles2[j].index = j;
			circles2[j].onclick = function(){
				index = this.index;
				imgSwitch2();
			}
		}
		
		/*
		 	动态给最后一个位置添加第一张图片
		*/
		/*var firstImg = imgs[0].cloneNode(true);
		imgWrap.appendChild(firstImg);
		imgs = $('.img-item');*/
		
		autoPlay2();
		/*自动轮播*/
		function autoPlay2(){
			timer2 = setInterval(function(){
				index++;
				imgSwitch2();
			},1500);
		}
		
		/*鼠标悬停*/
		banner2.onmouseenter = function(){
			clearInterval(timer2);
		}
		
		/*鼠标离开继续自动*/
		banner2.onmouseleave = function(){
			autoPlay2();
		}
		
		/*左边按钮点击*/
		arrowL2.onclick = function(){
			index--;
			imgSwitch2();
		}
		
		/*右边按钮点击*/
		arrowR2.onclick = function(){
			index++;
			imgSwitch2();
		}
		
		//图片切换
		function imgSwitch2(){
			//判断是否到达右边界   (如果是右边界，还往右的话，瞬间将图片替换到第一张)
			if(index >= imgs2.length){
				imgWrap2.style.marginLeft = 0;
				index = 1;
			}
			//左边界处理 (如果是左边界，还往左的话，瞬间将图片替换到最后一张)
			if(index <= -1){
				imgWrap2.style.marginLeft = -imgWidth * (imgs2.length-1) + 'px';
				index = imgs2.length - 2;
			}
			for(var k=0; k<circles2.length; k++){
				removeClass1(circles2[k],'active2');
			}
			//小圆圈的下标  0-8  (当图片显示到最后一张时，看到的是伪第一张，小圆圈第一个高亮)
			if(index == imgs2.length-1){
				addClass1(circles2[0],'active2');
			}else {
				addClass1(circles2[index],'active2');
			}
			animate1(imgWrap2,{
				marginLeft: -860 * index
			},500);
		}
	})
	
	//3
	$(function(){
		/*轮播*/
		var imgWrap3 = $1('.img-wrapper3');
		var imgs3 = $1('.img-item3');
		var banner3 = $1('.banner3');
		var arrowR3 = $1('.arrow-right3',banner3);
		var arrowL3 = $1('.arrow-left3',banner3);
		var circleWrap3 = $1('.circle-wrapper3');
		var index = 0;
		var timer3;
		var imgWidth3 = imgs3[0].offsetWidth;
			
		init3();
		//初始化生成小圆圈
		function init3(){
			var circleStr3 = '';
			for(var i=0; i<imgs3.length-1; i++){			
				circleStr3 += '<span class="circle-item3"></span>';
			}
			circleWrap3.innerHTML = circleStr3;
			addClass1(circleWrap3.children[0],'active3');
		}
		
		var circles3 = $('.circle-item3');
		/*遍历所有的小圆圈，添加点击事件*/
		for(var j=0; j<circles3.length; j++){
			circles3[j].index = j;
			circles3[j].onclick = function(){
				index = this.index;
				imgSwitch3();
			}
		}
		
		/*
		 	动态给最后一个位置添加第一张图片
		*/
		/*var firstImg = imgs[0].cloneNode(true);
		imgWrap.appendChild(firstImg);
		imgs = $('.img-item');*/
		
		autoPlay3();
		/*自动轮播*/
		function autoPlay3(){
			timer3 = setInterval(function(){
				index++;
				imgSwitch3();
			},1500);
		}
		
		/*鼠标悬停*/
		banner3.onmouseenter = function(){
			clearInterval(timer3);
		}
		
		/*鼠标离开继续自动*/
		banner3.onmouseleave = function(){
			autoPlay3();
		}
		
		/*左边按钮点击*/
		arrowL3.onclick = function(){
			index--;
			imgSwitch3();
		}
		
		/*右边按钮点击*/
		arrowR3.onclick = function(){
			index++;
			imgSwitch3();
		}
		
		//图片切换
		function imgSwitch3(){
			//判断是否到达右边界   (如果是右边界，还往右的话，瞬间将图片替换到第一张)
			if(index >= imgs3.length){
				imgWrap3.style.marginLeft = 0;
				index = 1;
			}
			//左边界处理 (如果是左边界，还往左的话，瞬间将图片替换到最后一张)
			if(index <= -1){
				imgWrap3.style.marginLeft = -imgWidth * (imgs3.length-1) + 'px';
				index = imgs3.length - 2;
			}
			for(var k=0; k<circles3.length; k++){
				removeClass1(circles3[k],'active3');
			}
			//小圆圈的下标  0-8  (当图片显示到最后一张时，看到的是伪第一张，小圆圈第一个高亮)
			if(index == imgs3.length-1){
				addClass1(circles3[0],'active3');
			}else {
				addClass1(circles3[index],'active3');
			}
			animate1(imgWrap3,{
				marginLeft: -860 * index
			},500);
		}
	})
	
	
}




