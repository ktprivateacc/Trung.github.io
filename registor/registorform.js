for (var i = 1; i <= 31 ; i++) {
	var date = "<option>" + i + "</option>";
	$("#date").append(date);
}

for (var i = 1; i <= 12 ; i++) {
	var month = "<option>" + i + "</option>";
	$("#month").append(month);
}

for (var i = 1900; i <= 2018 ; i++) {
	var year = "<option>" + i + "</option>";
	$("#year").append(year);
}
