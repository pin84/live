/*
1、获取元素
2、当拖动滚动条的距离超过10时，显示返回顶部
	2.1、注册页面滚动事件
3、点击回到顶部按钮，以动画的方式让滚动条滚动的距离为0
*/
// @inpoet './move.js';

let toTop = document.getElementsByClassName('totop')[0]

window.onscroll =  function(){
	let scrollTop =document.documentElement.scrollTop || document.body.scrollTop 

	if(scrollTop > 30 ) {
		toTop.style.opacity = '1'
	} else {
		toTop.style.opacity = '0'
	}
}

let timerId = null
toTop.addEventListener('click',function(){
	if(timerId){
		clearInterval(timerId)
	}

	timerId = setInterval(function() {
		let target = 0, step = 10,
		current = document.documentElement.scrollTop || document.body.scrollTop 

		if(current > target){
			step = -Math.abs(step)
		}

		//如果当前位置减去目标位置小于或等于步进值 ，就清除计时器
		if(Math.abs(current - target) <= Math.abs(step)){
			clearInterval(timerId)
			//设置目标位置
			document.documentElement.scrollTop = target
			return
		}
		current += step
		document.documentElement.scrollTop = current

	},10)



})