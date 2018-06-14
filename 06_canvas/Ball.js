/**
 * Created by live on 9/23/2017.
 */
/*
 * 小球类*/

class Ball {
    constructor(props) {
        this.x = 0;
        this.y = 0;
        this.r = 20;
        this.scaleX = 1;
        this.scaleY = 1;
        this.strokeStyle = 'rgba(0,0,0,0)';
        this.fillStyle = 'rgb(57,119,224)';
        this.alpha = 1;//透明度
        Object.assign(this, props);//初始化props参数
        return this;
    }

    render(ctx) {
        let{x,y,r,scaleX,scaleY,fillStyle,strokeStyle,alpha} = this;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scaleX, scaleY);
        ctx.strokeStyle = strokeStyle;
        ctx.fillStyle = fillStyle;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        return this;
    }
}
