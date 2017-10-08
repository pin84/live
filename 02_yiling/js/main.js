/**
 * Created by live on 9/17/2017.
 */

$(function () {
    let index = 0;//全局变量，用于控制 menu部分的 a 标签的背景色
    let menu = $('.menu ul li');
    let left = $('.left');
    let right = $('.right');

    let imgList = $('.imgList li');
    let indicator = $('.indicator li');


    // right.click(function () {
    //     index++;
    //     if (index === active.length) {
    //         index = 0
    //     }
    //     change();
    // });
    //
    // left.click(function () {
    //     index--;
    //     if (index === -1) {
    //         index = active.length - 1;
    //     }
    //     change();
    // });
    //

    /*公共方法*/
    function change(el) {
        el.eq(index).addClass("current").siblings().removeClass("current");
    }

    // change();

    /*菜单 menu*/
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('mouseover', function () {
            index = $(this).index();
            // menu.eq(index).addClass("active").siblings().removeClass("active");
            change(menu);
        })
    }

    /*小圆点 indicator*/
    for (let i = 0; i < indicator.length; i++) {
        indicator[i].addEventListener('click',function () {
            index = $(this).index();
            // indicator.eq(index).addClass("current").siblings().removeClass("current");
            change(indicator);
            change(imgList);
        })
    }

    /*自动轮播*/
    /*
    * setTimeout: 只执行一次
    * setInterval: 根据设定的时间重复执行
    * */
    setInterval(function () {
        index++;
        if (index === imgList.length) {
            index = 0
        }
        change(imgList);
        change(indicator);
    }, 10000);
});


