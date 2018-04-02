
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

var arr = [obj1, obj2, obj3, obj4, obj5 ];

var a = null;

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
}

$(function(abc) {
	
	arr = arr.concat(arr);

	arr = shuffle(arr);

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
				}, 2000);

			} else {
				$('.box').css('pointer-events', 'none');
				document.getElementById('win').play();
				setTimeout(function(){
				a.hide();
				b.hide();
				document.getElementById('win').pause();
				document.getElementById('win').currentTime = 0;
				a = null;
				$('.box').css('pointer-events', 'auto');
			},2000);
			}
		}
	})
})




















	