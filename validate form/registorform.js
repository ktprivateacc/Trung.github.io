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

var a = true;
$("#registorform").on('submit', function () {
	if ($("#id").val().trim()=="") {
		$("#id").next('span').text('ID không được để trống');
		a=false;
	} else {
		$("#id").next('span').text('');
	};

	if ($("#password").val().trim()=="") {
		$("#password").next('span').text('Mật Khẩu không được để trống');
		a=false;
	} else {
		$("#password").next('span').text('');
	};

	if ($("#name").val().trim()=="") {
		$("#name").next('span').text('Họ Tên không được để trống');
		a=false;
	} else {
		$("#name").next('span').text('');
	};

	if ($("#address").val().trim()=="") {
		$("#address").next('span').text('Địa Chỉ không được để trống');
		a=false;
	} else {
		$("#address").next('span').text('');
	};

	if ($("#phone").val().trim()=="") {
		$("#phone").next('span').text('SĐT không được để trống');
		a=false;
	} else {
		$("#phone").next('span').text('');
	};

	if ($("#email").val().trim()=="" || $("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)==null) {
		$("#email").next('span').text('Email không hợp lệ');
		a=false;
	} else {
		$("#email").next('span').text('');
	};

	if ($("#facebook").val().trim()=="") {
		$("#facebook").next('span').text('Facebook không được để trống');
		a=false;
	} else {
		$("#facebook").next('span').text('');
	};

	if (parseInt($("#date").val().trim()) == 0 || parseInt($("#month").val().trim()) == 0 || parseInt($("#year").val().trim()) == 0) {
		$("#year").next('span').text('Ngày Tháng Năm Sinh không được để trống');
		a=false;
	} else {
		$("#year").next('span').text('');
	};

	if ($("#gender").val().trim()== 0) {
		$("#gender").next('span').text('Giới Tính không được để trống');
		a=false;
	} else {
		$("#gender").next('span').text('');
	};

	return a;

})