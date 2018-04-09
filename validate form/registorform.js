for (var i = 1; i <= 31 ; i++) {
	var date = "<option value='"+i+"'>" + i + "</option>";
	$("#date").append(date);
}

for (var i = 1; i <= 12 ; i++) {
	var month = "<option value='"+i+"'>" + i + "</option>";
	$("#month").append(month);
}

for (var i = 1900; i <= 2018 ; i++) {
	var year = "<option value='"+i+"'>" + i + "</option>";
	$("#year").append(year);
}

$("#registorform").on('submit', function () {
	var id = $("#id").val();
	var password = $("#password").val();
	var name = $("#name").val().trim();
	var address = $("#address").val().trim();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var facebook = $("#facebook").val().trim();

	if (id.match(/^[a-zA-Z0-9]\w{6,15}$/)==null) {
		$("#id").next('span').text('ID không hợp lệ');
	} else {
		$("#id").next('span').text('');
	};

	if (password.match(/^[a-zA-Z0-9]\w{6,15}$/)==null) {
		$("#password").next('span').text('Mật Khẩu không hợp lệ');
	} else {
		$("#password").next('span').text('');
	};

	if (name=="") {
		$("#name").next('span').text('Họ Tên không được để trống');
	
	} else {
		$("#name").next('span').text('');
	};

	if (address=="") {
		$("#address").next('span').text('Địa Chỉ không được để trống');
		
	} else {
		$("#address").next('span').text('');
	};

	if (phone.match(/^[0-9]+$/)==null) {
		$("#phone").next('span').text('SĐT không hợp lệ');
	
	} else {
		$("#phone").next('span').text('');
	};

	if (email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null) {
		$("#email").next('span').text('Email không hợp lệ');
	
	} else {
		$("#email").next('span').text('');
	};

	if (facebook.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null) {
		$("#facebook").next('span').text('Facebook không hợp lệ');
	
	} else {
		$("#facebook").next('span').text('');
	};

	if (parseInt($("#date").val().trim()) == 0 || parseInt($("#month").val().trim()) == 0 || parseInt($("#year").val().trim()) == 0) {
		$("#year").next('span').text('Ngày Tháng Năm Sinh không được để trống');
	
	} else {
		$("#year").next('span').text('');
	};

	if ($("#gender").val().trim()== 0) {
		$("#gender").next('span').text('Giới Tính không được để trống');
		
	} else {
		$("#gender").next('span').text('');
	};

	if (id.match(/^[a-zA-Z0-9]\w{6,15}$/)==null || 
		password.match(/^[a-zA-Z0-9]\w{6,15}$/)==null ||
		name == "" || 
		address == "" ||
		phone.match(/^[0-9]+$/)==null ||
		email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null ||
		facebook.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null || 
		parseInt($("#date").val().trim()) == 0 || parseInt($("#month").val().trim()) == 0 || parseInt($("#year").val().trim()) == 0 || 
		$("#gender").val().trim()== 0) {
		return false;
	}else{
		return true;
	}

})