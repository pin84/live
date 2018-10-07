/**
 * 1、用来获取元素
 * 2、用来判断某个元素是否某个class
 * 3、如果没有就添加
 * 4、如果有就删除
 */


//  获取元素
function getEle(sele) { // #id .cls  #id .cls .aaa
  let first = sele.substr(0, 1),
    isArr = sele.split(' ')
  if (first === '#' && isArr.length === 1) {
    return document.getElementById(sele.substr(1))
  } else {
    console.log(sele)
    let arr = Array.from(document.querySelectorAll(sele))
    return arr.length === 1 ? arr[0] : arr
  }
}

// 用来判断某个元素是否有某个 class
function hasClass(ele, cls) {
  let re = new RegExp(`\\b${cls}\\b`)
  if (re.test(ele.className)) {
    return true
  } else {
    return false
  }
}

// 添加class
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ` ${cls}`
  }
  ele.className = ele.className.trim()
}

// 删除class
function rmClass(ele, cls) {
  let re = new RegExp(`\\b${cls}\\b`)
  if (hasClass(ele, cls)) {
    ele.className = ele.className.replace(re, '').replace(/\s{2}/, ' ').trim()
  }
}


