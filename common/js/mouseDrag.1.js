// window.onload = function () {

let li = document.querySelectorAll('.box ul li')

for (let i = 0; i < li.length; i++) {
  drag(li[i])
}

let len = li.length
let arr = []
for (let i = 0; i < len; i++) {
  arr.push([[li[i].offsetLeft], [li[i].offsetTop]])
}

for (let i = 0; i < len; i++) {
  li[i].style.position = 'absolute'
  li[i].style.left = arr[i][0] + 'px'
  li[i].style.top = arr[i][1] + 'px'
}

// }

/**
 * 业务需求分析
 * 1、把浮动布局改为定位布局，以利用坐标点移动元素
 * 2、拖拽带伤
 * 3、碰撞检测
 * 4、打到碰撞成功的最近的元素
 * 5、交换位置
 */

function drag(obj) {
  let z = 1
  obj.onmousedown = (e) => {
    let mx = e.clientX
    let my = e.clientY

    let ox = obj.offsetLeft
    let oy = obj.offsetTop

    obj.style.zIndex = z++

    document.onmousemove = (e) => {
      let _left = e.clientX - mx + ox
      let _top = e.clientY - my + oy
      obj.style.left = _left + 'px'
      obj.style.top = _top + 'px'

      //调用检测碰撞的方法 impact()
      // for (let j = 0; j < len; j++) {
      //   if (impact(obj, li[j]) && obj !== li[j]) {
      //     li[j].style.border = '1px solid red'
      //   }
      // }
      //impact ========END======

      //打到最近的LI
      let oLi = nearLi(obj)
      if(oLi){
        oLi.style.border = '1px solid red'
      }


    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null

      //交换位置
      let oLi = nearLi(obj)
      if(oLi){
        oLi.style.border = '1px solid transparent'
      }
    }
    return false
  }
}

//检测是否碰撞
function impact(obj1, obj2) {
  let L1 = obj1.offsetLeft,
    R1 = L1 + obj1.offsetWidth,
    T1 = obj1.offsetTop,
    B1 = T1 + obj1.offsetHeight;

  let L2 = obj2.offsetLeft,
    R2 = L2 + obj2.offsetWidth,
    T2 = obj2.offsetTop,
    B2 = T2 + obj2.offsetHeight

  if (B1 < T2 || L1 > R2 || T1 > B2 || R1 < L2) {
    //没碰到
    // console.log('aaa')
    return false
  } else {
    //碰到了
    // console.log('bbb')
    return true
  }
}


//找到碰撞的最近的元素
//用勾股定理计算出最近的斜边
function distance(obj1, obj2) {
  let a = obj1.offsetLeft - obj2.offsetLeft
  let b = obj1.offsetTop = obj2.offsetTop

  return Math.sqrt(a * a + b * b)
}

function nearLi(obj) {
  var oLi = ''
  let n = 10000 //中间值 ，只要比页面内的元素距离 大就行
  //拖拽成功的和其他碰撞成功的元素比较
  for (let j = 0; j < len; j++) {
    if (impact(obj, li[j]) && obj !== li[j]) {
      // li[j].style.border = '1px solid red'
      let c = distance(obj, li[j])
      if (c < n) {
        n = c //拿的到最小的C
        oLi = li[j]
      }
    }
  }
  return oLi
}
