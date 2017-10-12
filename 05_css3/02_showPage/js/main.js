/**
 * Created by live on 10/12/2017.
 */

let imgs = document.querySelectorAll('#wrap img');

let now = 3;
let target;
let onOff = true;
tab(now);

for (let i = 0; i < imgs.length; i++) {
    imgs[i].index = i;
    imgs[i].onclick = function () {
        if(!onOff){
            return
        }
        onOff = false;
        target = this.index;
        if (target > now) {
            if (target - now <= 3) {
                goNext()
            } else {
                goPrev()
            }
        } else {
            if (target + 7 - now <= 3) {
                goNext()
            } else {
                goPrev()
            }
        }
    }
}

function goNext() {
    now++;
    if (now > 6) {
        now = 0;
    }
    tab(now);
    if (now === target) {
        onOff = true;
        return;
    }
    setTimeout(function () {
        goNext()
    }, 700)
}
function goPrev() {
    now--;
    if (now < 0) {
        now = 6;
    }
    tab(now);
    if (now === target) {
        onOff = true;
        return;
    }
    setTimeout(function () {
        goPrev()
    }, 700)
}


function tab(n) {
    for (let i = 0; i < 3; i++) {
        let left = n - 1 - i;
        if (left < 0) {
            left = left + 7
        }
        let right = n + 1 + i;
        if (right > 6) {
            right = right - 7
        }

        imgs[left].style.transform = 'translateX(' + (-150 * (i + 1)) + 'px) ' +
            'translateZ(' + (200 - (i * 100)) + 'px) rotateY(30deg)';
        imgs[right].style.transform = 'translateX(' + (150 * (i + 1)) + 'px)' +
            'translateZ(' + (200 - (i * 100)) + 'px) rotateY(-30deg)';
    }
    imgs[n].style.transform = 'translateZ(300px)'
}