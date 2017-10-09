/**
 * Created by live on 10/1/2017.
 */

window.onload = function () {
    activeMenu();
    toBanner();
    toRun();
};

/*菜单*/
function activeMenu() {
    let li = $('.menu li');
    let index = 0;
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('mouseover', function () {
            index = $(this).index();
            // menu.eq(index).addClass("active").siblings().removeClass("active");
            change(li);
        })
    }

    function change(el) {
        el.eq(index).addClass("active").siblings().removeClass("active");
    }
}

/*banner*/
function toBanner() {
    let banner = document.querySelector('.banner');
    let aLi = banner.querySelectorAll('li');

    let prev = banner.querySelector('.prev');
    let next = banner.querySelector('.next');

    let iNow = 4;//ul里前面左右两个箭头，不需要淡出淡入效果。所以下标要从2开始

    let timer = setInterval(change, 3000);

    function change() {

        for (let i = 2; i < aLi.length; i++) {
            fadeOut(aLi[i]);
        }

        if (iNow === aLi.length - 1) {
            iNow = 2;
        } else {
            iNow++;
        }
        fadeIn(aLi[iNow]);
    }

    /*鼠标移入，轮播停止*/
    banner.addEventListener('mouseover', function () {
        clearInterval(timer);
    });
    banner.addEventListener('mouseout', function () {
        timer = setInterval(change, 3000);
    });

    /*左右箭头点击*/
    prev.addEventListener('click', function () {
        for (let i = 2; i < aLi.length; i++) {
            fadeOut(aLi[i]);
        }
        if (iNow === 2) {
            iNow = aLi.length - 1;
        } else {
            iNow--;
        }
        fadeIn(aLi[iNow]);
    });
    next.addEventListener('click', function () {
        change();
    })
}

/*获取元素当前样式*/
function getStyle(obj, attr) {
    if (obj.currentSrc) {
        return obj.currentStyle[attr]
    } else {
        return window.getComputedStyle(obj, false)[attr];
    }
}

function fadeIn(obj) {
    let curStyle = getStyle(obj, 'opacity');
    if (curStyle === 1) {
        return false;
    }

    let value = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let iSpeed = 5;
        if (value === 100) {
            clearInterval(obj.timer);
        } else {
            value += iSpeed;
            obj.style.opacity = value / 100;//opacity的值为0到1，所以除100
        }
    }, 30)
}

function fadeOut(obj) {
    let curStyle = getStyle(obj, 'opacity');
    if (curStyle === 0) {
        return false;
    }
    let value = 100;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let iSpeed = -5;
        if (value === 0) {
            clearInterval(obj.timer);
        } else {
            value += iSpeed;
            obj.style.opacity = value / 100;
        }
    }, 30);
}

/*列表轮播*/
function toRun() {
    // let list_wrap = document.querySelector('.list_wrap');
    let ul = document.querySelector('.list_wrap ul');
    let li = ul.getElementsByTagName('li');

    let prev = document.querySelector('.featured .prev');
    let next = document.querySelector('.featured .next');

    ul.innerHTML += ul.innerHTML;
    ul.style.width = li.length * li[0].offsetWidth + 'px';

    let now = 0;
    prev.addEventListener('click', function () {
        if (now === 0) {
            now = li.length / 2;
            ul.style.left = ul.offsetWidth / 2;
        }
        moveLeft(ul, -now * li[0].offsetWidth, -(now - 1) * li[0].offsetWidth);
        now--;
    });
    next.addEventListener('click', function () {
        if (now === li.length / 2) {
            now = 0;
            ul.style.left = 0;
        }
        moveLeft(ul, -now * li[0].offsetWidth, -(now + 1) * li[0].offsetWidth);
        now++;
    });
}

function moveLeft(obj, old, now) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let speed = (now - old) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (now === old) {
            clearInterval(obj.timer);
        } else {
            old += speed;
            obj.style.left = old + 'px';
        }

    }, 30);

}