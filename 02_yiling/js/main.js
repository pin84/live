/**
 * Created by live on 9/17/2017.
 */

$(function () {
    let index = 0;//全局变量，用于控制 menu部分的 a 标签的背景色
    const menu = $('.menu ul li');
    const left = $('.left');
    const right = $('.right');

    const bg = $('.bg ul li');


    right.click(function () {
        index++;
        if (index === bg.length) {
            index = 0
        }
        change();
    });

    left.click(function () {
        index--;
        if (index === -1) {
            index = bg.length - 1;
        }
        change();
    });

    setInterval(function () {
        index++;
        if (index === bg.length) {
            index = 0
        }
        change();
    }, 1000);

    function change() {
        //menu.eq(index).addClass("li_bg").siblings().removeClass("li_bg");
        bg.eq(index).addClass("current").siblings().removeClass("current");
    }

    // change();

    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('mouseover', function () {
            index = $(this).index();
            //index = i;
            menu.eq(index).addClass("li_bg").siblings().removeClass("li_bg");
        })
    }


});


