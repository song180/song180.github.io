window.onload = function(){	
	var REG_USN = /^\w{6,}$/;
	var REG_PWD = /^.{6,20}$/;
	var REG_EMAIL = /^\w+@\w+(\.\w+)+$/;
	var REG_PHONE = /^1\d{10}$/;
	var REG_PHONECODE = /\d/;
	var code = $('.code'); //获取验证码节点对象
	var code1 = $('.code1');
	var pass1 =$('#password') 
	var pass2 = $('#confirmPwd')
	var yanzhangma = $('.yanzhengma');//验证码盒子
	var text1 = $('.text1')
	var text2 = $('.text2')
	var text3 = $('.text3')
	var text4 = $('.text4')
	var text5 = $('.text5')
	var phone = $('.phonecod')
	var registerDiv = document.getElementById('register');
	// 获取十天免登陆的复选框
	var noLoginCheckbox = document.getElementById('noLogin');
	
	
	/*---------------------------------验证码--------------------------*/
	function createVerify(){
		var v = '';
		for(var i=0; i<5; i++){
			v += parseInt( Math.random()*10 )
		}
		return v;
	}
	function createVerifyMix(){
		var str = '';
		for(var i=0; i<26; i++){
			str += String.fromCharCode(97+i);
		}
		//console.log(str);
		var strUpper = str.toUpperCase();
		var verify = str + strUpper + '0123456789';
		//console.log(verify);
	
		var v = '';
		for(var i=0; i<5; i++){
			// 0 - 61
			var index = parseInt( Math.random()*62 );
			v += verify[index];
		}
		return v;
	}
	createVerifyMix();
	var v = createVerifyMix();
	yanzhangma.html(v)
	$('.yanzhentext').click(function(){
		yanzhangma.html('');
		createVerifyMix();
		var v = createVerifyMix();
		yanzhangma.html(v)
	})
	yanzhangma.click(function(){
		yanzhangma.html('');
		createVerifyMix();
		var v = createVerifyMix();
		yanzhangma.html(v)
	})
	
	// 手机号码输入框失去焦点
	phone.blur(function(){
		if(!REG_PHONE.test(this.value)){
			text1.html('请填写有效的11位手机号码');	
		} else {
			text1.html('');
		}
	})
	// 验证码失去焦点
	code.blur(function(){
		if(this.value !== yanzhangma.html()){
			text2.html('验证码不正确');	
		} else {
			text2.html('');
		}
	})
	// 手机验证码失去焦点
	code1.blur(function(){
		if(!REG_PHONECODE.test(this.value)){
			text3.html('请填写手机验证码');	
		} else {
			text3.html('');
		}
	})

	// 密码输入框失去焦点
	pass1.blur(function(){
		if(!REG_PWD.test(this.value)){
			text4.html('密码需6到20位');	
		} else {
			text4.html('');
		}
	})
	// 密码确认框失去焦点
	pass2.blur(function(){
		if(this.value !== pass1.val()){
			text5.html('两次填写密码不一致');	
		} else {
			text5.html('');
		}
	})
	// 检测十天免登陆复选框是否勾选
	if(noLoginCheckbox.checked){
		// 从cookie中取出原有的用户
		var oldUsers = getCookie("registerUsers");
		var newData = "";
		if(oldUsers){ // 如果已存在前面的用户，先拼一个冒号
			newData = oldUsers + ":";
		}
		// 将新用户信息，追加到后面
		newData += usnInp.value + "," + pwdInp.value;
		// 设置过期时间为10天
		setCookie("registerUsers", newData, 10);
	}
}	



