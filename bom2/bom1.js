var obj1 = {
		Q: "Tên thật của Lý Thái Tổ là gì?",
		A: "Lý Chiêu Hoàng",
		B: "Lý Công Uẩn",
		C: "Lý Đức Chính",
		D: "Lý Phật Mã",
		answer: "Lý Công Uẩn",
	}

var obj2 = {
		Q: "Bối cảnh trên tờ tiền mệnh giá 2.000 đồng là ở đâu?",
		A: "Bình Định",
		B: "Hải Phòng",
		C: "Nam Định",
		D: "Huế",
		answer: "Nam Định",
	}

var obj3 = {
		Q: "Tại sao loài nhện không bị dính vào lưới của chính chúng?",
		A: "Chân nhện có lông để giảm diện tích bề mặt mà lưới dính vào",
		B: "Do nhện di chuyển khéo léo để lưới mắc vào chân bị trượt ra dễ dàng",
		C: "Lông ở chân nhện có chất chống dính",
		D: "Cả 3 ý trên",
		answer: "Cả 3 ý trên",
	}

var obj4 = {
		Q: "Nguyên nhân dẫn đến bệnh đau dạ dày?",
		A: "Do vi khuẩn HP",
		B: "Do ăn xong hay nằm luôn",
		C: "Do ăn xong vận động ngay",
		D: "Do cơ địa",
		answer: "Do vi khuẩn HP",
	}

var obj5 = {
		Q: "Trái đất là hành tinh thứ mấy (tính từ mặt trời) trong hệ mặt trời?",
		A: "Hành tinh thứ 3",
		B: "Hành tinh thứ 5",
		C: "Hành tinh thứ 7",
		D: "Hành tinh thứ 9",
		answer: "Hành tinh thứ 3",
	}

var arr = [obj1,obj2,obj3,obj4,obj5];
var i = 1;
var a = 0;
var z = false;
var t = 0;
var l = document.getElementById("result2");
var Ans5 = document.getElementById("socau");
var Que = document.getElementById("cauhoi");
var Ans1 = document.getElementById("dapana");
var Ans2 = document.getElementById("dapanb");
var Ans3 = document.getElementById("dapanc");
var Ans4 = document.getElementById("dapand");
var Ans6 = document.getElementById("demso");
var boxE = document.getElementById("boxE");
var n = "Kết Quả";

Ans5.innerHTML ='Câu số' + ' ' + i + " " + ':';

Que.innerHTML = arr[a].Q; 
Ans1.innerHTML = arr[a].A;
Ans2.innerHTML = arr[a].B;
Ans3.innerHTML = arr[a].C;
Ans4.innerHTML = arr[a].D;
Ans6.innerHTML =   i +"/"+arr.length ; 

function num1(button) {
	
	if (button.innerHTML == "Kết Quả") {
		document.getElementById("an1").style.display = "none";
		document.getElementById("an2").style.display = "block";
		l.innerHTML = t + " " + "Câu";
		if (t == 5) {
			document.getElementById("boxF").innerHTML = "Phần thưởng";
		}else{
			document.getElementById("boxF").innerHTML = "Chơi Lại!!!!!";
		}
		
	}

	if (i == arr.length) {return;}
	a++;
	i++;

if (i  == 5) {
		button.innerHTML = "Kết Quả";
	}

	Ans5.innerHTML ='Câu số' + ' ' + i + " " + ':';
	Que.innerHTML = arr[a].Q; 
	Ans1.innerHTML = arr[a].A;
	Ans2.innerHTML = arr[a].B;
	Ans3.innerHTML = arr[a].C;
	Ans4.innerHTML = arr[a].D;
	Ans6.innerHTML =   i +"/"+arr.length ; 
	z = false;
	document.getElementById("dapana").style.backgroundColor = "white";
	document.getElementById("dapanb").style.backgroundColor = "white";
	document.getElementById("dapanc").style.backgroundColor = "white";
	document.getElementById("dapand").style.backgroundColor = "white";
}


function num2(button) {
	if (z) {
		return;
	}
	var str = button.innerHTML;
	if (str == arr[a].answer) {
		button.style.backgroundColor = "green";
		t++;
	} else {button.style.backgroundColor = "red";}
	z = true;
}

function num3(button) {
	if (button.innerHTML == "Chơi Lại!!!!!") {
	i = 1;
	a = 0;
	z = false;
	t = 0;
	document.getElementById("an1").style.display = "block";
	document.getElementById("an2").style.display = "none";
	Ans5.innerHTML ='Câu số' + ' ' + i + " " + ':';
	Que.innerHTML = arr[a].Q; 
	Ans1.innerHTML = arr[a].A;
	Ans2.innerHTML = arr[a].B;
	Ans3.innerHTML = arr[a].C;
	Ans4.innerHTML = arr[a].D;
	Ans6.innerHTML =   i +"/"+arr.length ; 
	document.getElementById("dapana").style.backgroundColor = "white";
	document.getElementById("dapanb").style.backgroundColor = "white";
	document.getElementById("dapanc").style.backgroundColor = "white";
	document.getElementById("dapand").style.backgroundColor = "white";
	boxE.innerHTML = "Câu hỏi tiếp theo";
}
else {
	window.location.href = "qua.html";
}
}

	var g = 0;
function num4(button) {

	if (g % 2 != 0) {
		$("body").css("backgroundImage","url('anh6.jpg')");
	}
	else {$("body").css("backgroundImage","url('bg.jpg')")};
	g++;
}
















