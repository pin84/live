/*
	1、每张图片旋转的角度不同，rotateY()
	2、离开中心点 translateZ(px)
*/

let sence = document.getElementsByClassName('sence')[0];
let aLi = sence.getElementsByTagName('li');

let aliLen = aLi.length
let deg = 360/aliLen

let startX,startY,nowX,nowY
let roX = -15, roY = 0 //原来的基础值 ，在css里设置的

window.onload = function(){
	for(let i = 0; i < aliLen; i++){
		aLi[i].style.transform = `rotateY(${deg*i}deg) translateZ(300px)`
		aLi[i].style.transition = `transform 1s linear  ${(aliLen - i -1)*0.1}s`

		document.onmousedown = function(ev){
			startX = ev.clientX
			startY = ev.clientY

			this.onmousemove = function(ev){
				nowX = ev.clientX
				nowY = ev.clientY

				tx = nowX - startX
				ty = nowY - startY

				//加上基础值 
				roX += tx
				roY += ty

				//把当前值赋给开始值，以便做累加
				startX = nowX
				startY = nowY

				sence.style.transform = `rotateX(${-roY/5}deg) rotateY(${roX/5}deg)`	
			}
			this.onmouseup = function(){
				this.onmousemove = null
			}

			return false
		}

	}
}

