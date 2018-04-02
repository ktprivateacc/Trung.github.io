var a = null;
var count = 0;
var remainingTime = 30000;
$("#prog").attr('max',remainingTime);
$("#prog").attr('value',remainingTime);

function num(button) {
	$("#boxStart1").css('display','none');
	$("#main").css('display','block');
	var run = setInterval(function() {
		remainingTime--;
		$("#prog").attr('value',remainingTime);

		if (remainingTime == 0) {
			clearInterval(run);
			window.location.href = "replay.html";
		}
	}, 1);
}

var obj1 = {
	src: "Image/anh1.jpg",
}

var obj2 = {
	src: "Image/anh2.jpg",
}

var obj3 = {
	src: "Image/anh3.png",
}

var obj4 = {
	src: "Image/anh4.png",
}

var obj5 = {
	src: "Image/anh5.png",
}

var obj6 = {
	src: "Image/anh6.png",
}

var obj7 = {
	src: "Image/anh7.jpg",
}

var obj8 = {
	src: "Image/anh8.jpg",
}

var obj9 = {
	src: "Image/anh9.jpg",
}

var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];




function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
};

$(function(abc) {
	//Nối mảng
	arr = arr.concat(arr);
	//Trộn mảng
	arr = shuffle(arr);
	//In ra html
	for (var i = 0; i < arr.length; i++) {
	var m = "";
	m = arr[i].src;
	var demo = "<div class='clgt'>" + 
	"<div class='box' id='"+[i]+"' data-name='"+ arr[i].src + "'>" +
	"<img class='front intro1' src='"+m+"'>" + 
	"<img class='back' src='Image/matsau.jpg'>" + 
	"</div></div>";
	$("#main").append(demo);	
	}
	

	$(".box").click(function() {
	
	var b = $(this);
	//Đặt đk để ko clik đc vào cùng 1 lá bài đã lật
	if ( a != null && a.attr('id') == b.attr('id')) { return;}
	
		b.children().toggleClass("intro1");
	

		if(!a) {
			a = b;
		} else {
			if(a.attr('data-name') != b.attr('data-name')) {
				$('.box').css('pointer-events', 'none');
				document.getElementById('fail').play();
				setTimeout(function(){
					b.children().toggleClass("intro1");
					a.children().toggleClass("intro1");
					a = null;
					document.getElementById('fail').pause();
					document.getElementById('fail').currentTime = 0;
					$('.box').css('pointer-events', 'auto');
				}, 1000);	
				

			} else {
				$('.box').css('pointer-events', 'none');
				document.getElementById('win').play();
				count++;
				if(count == 9)(window.location.href = "win.html");
				setTimeout(function(){
				a.hide();
				b.hide();
				document.getElementById('win').pause();
				document.getElementById('win').currentTime = 0;
				a = null;
				$('.box').css('pointer-events', 'auto');
			},1000);


			}
		}
	})
});



















	