// 方法一
let aLi = document.querySelectorAll('.tabs li')
let slider = document.querySelector('div.slider')
let aContents = document.querySelector('ul.contents')
let aContentsWidth = aContents.children[0].offsetWidth


for (let i = 0; i < aLi.length; i++) {
  aLi[i].addEventListener('click', () => {
    switching(i)
  })


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
}
