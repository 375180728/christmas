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


//获取手指点击起始位置
function touchstart(event) {
    // console.log(currentLeft);
    startClientX = event.touches[0].clientX;
    startClientY = event.touches[0].clientY;
    currentLeft = parseFloat(control.css("left"));
    currentTop = parseFloat(control.css("top"))
}

//按住手指拖动目标
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

//生成随机数
function getRandom(n, m) {
    var c = m - n + 1;
    return Math.floor(Math.random() * c + n);
}

//显示小偷
function showThief(num, dire) {
    var str = "<div class='thief"+ dire +"' ></div>";
    var basic = 0;
    var per = innerWidth / 10;
    var randomIndex;
    var maxHeight,
        maxWidth;

    for (var i = 0; i < num; i++) {
        $("body").append(str);
    }

    $(".thief" + dire).each(function(index) {
        maxWidth = innerWidth - 50;
        maxHeight = innerHeight - 50;
        console.log(maxWidth);
        console.log(maxHeight);
        per = (innerWidth - 50) / 10;
        randomIndex = getRandom(0, 10);
        switch (dire) {
            case "top":
                $(this).css("left", randomIndex * per);
                break;
            case "left":
                $(this).css("top", randomIndex * per);
                break;
            case "right":
                $(this).css("top", randomIndex * per);
                break;
        }
    });

    setInterval(function() {
        basic++;
        $(".thief" + dire).each(function() {
            $(this).css(dire, basic);
            switch (dire) {
                case "top":
                    if (parseInt($(this).css(dire)) > maxHeight) {
                        $(this).remove();
                    }
                    break;
                case "left":
                    if (parseInt($(this).css(dire)) > maxWidth) {
                        $(this).remove();
                    }

                case "right":
                    if (parseInt($(this).css("left")) < 0) {
                        $(this).remove();
                    }
            }

        })
    }, 10)

}



showThief(3, "left");


showThief(3, "top");

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