/**
 * 1、小图大图相互对应
 * 2、鼠标放在图片上是应该显示一个观察区域
 * 3、右边显示放大后的观察区
 */
let ulList = document.querySelector('ul.list'),
  img = document.querySelector('.pic img'),
  liImgs = document.querySelectorAll('.list li img'),
  pic = document.querySelector('.itemarea .pic'),
  cover = document.querySelector('.pic .cover'),
  detail = document.querySelector('.detail')
let index = 0

pic.addEventListener('mouseout', () => {
  cover.style.opacity = 0
})

pic.addEventListener('mouseover', () => {
  cover.style.opacity = 1
  pic.addEventListener('mousemove', (e) => {
    let mx = e.clientX,
      my = e.clientY,
      ex = pic.getBoundingClientRect().left,
      ey = pic.getBoundingClientRect().top,
      tx = mx - ex - cover.offsetWidth / 2,
      ty = my - ey - cover.offsetHeight / 2

    if (tx < 0) {
      tx = 0
    }
    if (ty < 0) {
      ty = 0
    }
    if (tx > pic.offsetWidth - cover.offsetWidth) {
      tx = pic.offsetWidth - cover.offsetWidth
    }
    if (ty > pic.offsetHeight - cover.offsetHeight) {
      ty = pic.offsetHeight - cover.offsetHeight
    }

    //移动
    detail.style.backgroundPosition = tx / (pic.offsetWidth - cover.offsetWidth) * 100 + '%' + ty / (pic.offsetHeight - cover.offsetHeight) * 100 + '%'

    cover.style.left = tx + 'px'
    cover.style.top = ty + 'px'
  })
})

ulList.addEventListener('mousemove', (e) => {
  if (e.target.tagName === 'IMG') {
    img.src = e.target.src
    detail.style.backgroundImage = `url(${e.target.src})`
    liImgs.forEach((item) => {
      item.className = ''
    })
    e.target.className = 'current'
  }
}, false)
