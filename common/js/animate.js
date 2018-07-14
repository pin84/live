function animate(element,target,callback) {
	
	//判断之前是否开启了定时器
	if(element.timerId){
		clearInterval(element.timerId)
	}

	//记每一个执行动画的元素记录自己的定时器
	element.timerId = setInterval(function () {
		//当前坐标
		let current = element.offsetLeft
		//步进 
		let step = 20
		//当当前位置 > 目标位置 step 应该是负数
		if(current > target){
			step = -Math.abs(step)
		}

		//如果当前位置和目标位置的差小于step,就认为到达目标位置
		if(Math.abs(current - target) <= Math.abs(step)){
			element.style.left = target + 'px'
			clearInterval(element.timerId)

			//回调函数
			if(callback){
				callback()
			}
			return
		}

		current += step
		element.style.left = current + 'px'
	},15)
}