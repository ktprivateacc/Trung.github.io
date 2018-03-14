//bài1:
function giaithua(x) {
	if(x==0 || x==1) {
	return 1;
}
	result = x;
	while(x>1){
	x--;
	result*=x;
}
return result;
}

//Bài2:
function daochuoi(str1) {
var text = "";
var i = str1.length;
	while (i > 0) {
	i--;		
	text+=str1[i];
	}
	return text;
}

//Bài3:
function duplicate(str) {
	resultA = str;
	for (var i = 1; i < 10; i++) {
		resultA = resultA + "-" + str;

	}
	return resultA;
}

//Bài4:
function sortArr(arr){
	arr.sort();
	for (var i = 0; i < arr.length; i++) {
		var	a = i+1;
	document.write("<p> "+ a + '.' + arr[i]+ "<p>");
}
}

//Bài5:
function trung(arr) {
	for (var i = 0; i < arr.length; i++) {
	arr[i]*=2;
	}
	return arr;
}	

//Bài6:
function sodu(arr1) {
	for (var i = 0; i < arr1.length; i++) {
		arr1[i]=arr1[i]%2;
	}
	return arr1;
}


