var control = $(".control");
// start = $(".start")

var currentLeft,
    currentTop,
    startClientX,
    startClientY,
    endClientX,
    endClientY,
    maxX,
    maxY,
    nowX,
    nowY;

// console.log(control);

// control[0].addEventListener("touchstart", touchstart);
// control[0].addEventListener("touchmove", touchmove);

// start.addEventListener("click", start);


// function start() {
control[0].addEventListener("touchstart", touchstart);
control[0].addEventListener("touchmove", touchmove);
// }

function touchstart(event) {
    // console.log(currentLeft);
    startClientX = event.touches[0].clientX;
    startClientY = event.touches[0].clientY;
    currentLeft = parseFloat(control.css("marginLeft"));
    currentTop = parseFloat(control.css("marginTop"))
}

function touchmove(event) {
    endClientX = event.touches[0].clientX;
    endClientY = event.touches[0].clientY;
    // console.log(endClientX);
    nowX = currentLeft + endClientX - startClientX;
    nowY = currentTop + endClientY - startClientY;
    maxX = innerWidth - parseInt(control.css("width"));
    maxY = innerHeight - parseInt(control.css("height"));

    if (nowX < 0) {
        nowX = 0;
    } else if (nowX > maxX) {
        nowX = maxX
    }
    if (nowY < 0) {
        nowY = 0;
    } else if (nowY > maxY) {
        nowY = maxY;
    }

    control.css("left", nowX);
    control.css("top", nowY);
}

function getRandom(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}


function showThief(num, dire) {
    var str = "<div class='thief'></div>";
    var basic = 0;
    var per = innerWidth / 10;
    for (var i = 0; i < num; i++) {
        $("body").append(str);
    }
    $(".thief").each(function(index) {
        var per = (innerWidth - 50) / 10;
        var randomIndex = getRandom(0, 10);
        $(this).css(dire, randomIndex * per);
        console.log(randomIndex);

    });

    // setInterval(function() {
    //     basic++;
    //     $(".thief").each(function() {
    //         $(this).css(dire, basic);
    //         var maxWidth = innerWidth - parseInt($(this).css("width"));
    //         console.log($(this).css("top"));
    //         console.log(maxWidth);
    //         console.log($(this).css("left"));
    //         if (parseInt($(this).css("left")) > maxWidth - 1) {
    //             $(this).remove();
    //         }
    //     })
    //     control.css("left", 1000);
    //     console.log(basic);
    // }, 10)

}



// showThief(1, "left");
showThief(3, "left");

// setInterval(showThief(5, "marginTop"), 5000);

// function showTime() {
//     var seconds = $(".seconds");
//     var second = 0;
//     setInterval(function() {
//         seconds[0].innerHTML = second;
//         second++;
//         console.log(seconds);
//     }, 1000);
// }



// showTime();
// 
// 

// if()