// 方法二

/**
 * 1、指定事件监听
 * 2、找到指定元素的父级
 * 3、找到指定元素的下标
 * 4、自定义属性
 */
let aTabs = document.querySelector('.tabs')
let slider = document.querySelector('div.slider')
let aContents = document.querySelector('ul.contents')
let aContentsWidth = aContents.children[0].offsetWidth

let index = 0

let str = 'sdfdsfwe4fsghasdgh dfhgdfsdgffsdfsdfsdfsdf'
let cont = str.split('').reduce((total, num) => (total[num]++ || (total[num] = 1), total), {})



//事件监听 false：阻止冒泡
aTabs.addEventListener('click', (e) => {
  if (findParent('li', e.target)) {
    let ele = findParent('li', e.target)

    //找到指定元素的下标
    let siblings = ele.parentNode.children//打到所有兄弟元素
    let listArr = [].slice.call(siblings)//转为数组
    index = listArr.indexOf(ele)

    console.log(index)



  }
}, false)

//递归寻找指定次级元素
function findParent(tag, ele) {
  if (ele === undefined) return false
  return ele.parentNode.tagName.toLowerCase() === tag ? ele.parentNode : findParent(ele.parentNode)
}

/*
  function switching(idx) {
    let _width = aLi[idx].offsetWidth
    let _left = calculateWidth([...aLi], idx)

    // slider.style.left = _left + 'px'
    // slider.style.width = _width + 'px'

    slider.style.cssText = `width:${_width}px;left:${_left}px`
    aContents.style.transform = `translateX(${-idx * aContentsWidth}px)`
  }
  //累加长度
  function calculateWidth(arr, idx) {
    let list = arr.slice(0, idx)
    let cont = list.reduce(function (x, y) {
      return x + y.offsetWidth
    }, 0)
    return cont
  }

*/
