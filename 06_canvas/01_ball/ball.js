/*
* class
* */

// class Test {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//        // return this;
//     }
//
//     print() {
//         console.log(this.a + " " + this.b)
//     }
// }
//
// const t = new Test('hello', 'world');
// t.print();


/*
* class的继承
*
* extends static  super
* */

/*
* 在canvas上绘制一个带颜色的小球
* */
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const w = canvas.width = 600;
const h = canvas.height = 400;

class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = `rgb(
        ${~~Ball.rgbFn([55, 255])},
        ${~~Ball.rgbFn([55, 255])},
        ${~~Ball.rgbFn([55, 255])}
        )`;

        return this;
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
        return this;
    }

    static rgbFn(arr) {
        let max = Math.max(...arr),
            min = Math.min(...arr);
        return Math.random() * (max - min) + min;
    }
}

class SuperBall extends Ball {
    constructor(x, y, r) {
        super(x, y, r);


        this.vy = SuperBall.rgbFn([2, 4]);
        this.g = SuperBall.rgbFn([0.2, 0.4]);

        this.a = 0;


        return this;
    }

    move(ctx) {
        this.y += this.vy;
        this.vy += this.g;

        let current = this.vy * -0.75;

        if (this.y + this.r >= ctx.canvas.height) {
            this.y = ctx.canvas.height - this.r;

            if (Math.abs(current - this.a) < 0.01) return false;

            this.a = this.vy *= -0.75;
        }

        //清除重绘
        ctx.clearRect(0, 0, canvas.width, ctx.canvas.height);
        super.render(ctx);

        return true;
    }

}

// const ball1 = new SuperBall(50, 100, 30).render(ctx);

let ball, timer;

canvas.onclick = function (e) {


    let x = e.offsetX, y = e.offsetY;
    let r = ~~Ball.rgbFn([25, 55]);
    ctx.clearRect(0, 0, canvas.width, ctx.canvas.height);


    ball = new SuperBall(x, y, r).render(ctx);

    window.cancelAnimationFrame(timer);
    ballMove();
};

function ballMove() {

    timer = window.requestAnimationFrame(ballMove);


    if (!ball.move(ctx)) {
        window.cancelAnimationFrame(timer);
    }


}

