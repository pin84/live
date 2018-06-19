let oUl = document.querySelector('ul')
let aLi = document.querySelectorAll('li')
let liWidth = aLi[0].offsetWidth
console.log(oUl)
oUl.style.width = aLi.length * 400 + 'px'
oUl.transform = {}

// drag(oUl)

// function drag(obj) {
let startX = 0, x1 = 0
oUl.onmousedown = (ev) => {

  x1 = ev.clientX
  startX = oUl.transform['translateX'] || 0
  console.log('mousedown', 'x1=', x1, 'start=', startX)

  oUl.onmousemove = (ev) => {

    console.log('onmousemove')
    let x2 = ev.clientX
    let nowX = startX + x2 - x1
    oUl.style.transform = `translateX(${nowX}px)`
    oUl.transform['translateX'] = nowX

  }
  oUl.onmouseup = function () {
    let left = oUl.transform['translateX']
    // left = Math.min(0, left)
    // left = Math.max(left, -(aLi.length) * liWidth)

    // let num = Math.round(-(left / liWidth))
    oUl.style.transform = `translateX(${left}px)`
    oUl.transform['translateX'] = `${left}`

    console.log('mouseup', left)

    // oUl.onmousedown = null
    // oUl.onmousemove = null

    // oUl.onmouseleave = function () {
    //   oUl.onmousedown = null
    //   oUl.onmousemove = null
    // }
  }
  // return false
}
// }
