

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

var arr = [obj1, obj2, obj3, obj4, obj5];

function shuffle(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
  }

  return arr;
}

shuffle(arr);

for (var i = 0; i < 5; i++) {
	var m = "";
	m = arr[i].src;
	var demo = "<div class='clgt'><div class='box'><img class='front intro1' src='"+m+"'><img class='back' src='Image/matsau.jpg'></div></div>";
	$("#main").append(demo);
}


$(".box").one('click',function() {
		$(this).children().toggleClass("intro1");
	})

	