let oUl = document.querySelector('ul')
let aLi = document.querySelectorAll('li')
let liWidth = aLi[0].offsetWidth
console.log(liWidth)
oUl.style.width = aLi.length * 400 + 'px'
oUl.transform = {}

oUl.addEventListener('mousedown', slider)
// oUl.addEventListener('mousemove', slider)
// oUl.addEventListener('mouseup', slider)
let startX = 0, x1 = 0

function slider(ev) {
  // console.log(ev)
  switch (ev.type) {
    case 'mousedown':
      console.log('mousedown')
      x1 = ev.clientX
      console.log(x1)
      startX = oUl.transform['translateX'] || 0
      break
    case 'mousemove':
      let x2 = ev.clientX
      let nowX = startX + x2 - x1
      oUl.style.transform = `translateX(${nowX}px)`
      oUl.transform['translateX'] = nowX
      // console.log('mousemove', x2)
      break
    case 'mouseup':
      let left = oUl.transform['translateX']
      left = Math.min(0,left)
      left = Math.max(left,-(aLi.length)*liWidth)

      let num = Math.round(-(left/liWidth))
      oUl.style.transform = `translateX(${-num*liWidth}px)`
      oUl.transform['translateX'] = `${-num*liWidth}`

      console.log('mouseup', num)

      break
  }
}
