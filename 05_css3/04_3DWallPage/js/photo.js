(function () {

  //生明变量和初始数据
  let data = dataList, len = data.length
  createPhotos(data)
  let n = 0
  sortImg(n)

  let a =  document.querySelectorAll('.photo_i')
   console.log(a)

  //需求函数化
  function createPhotos(data) {
    let photo_html = getEle('.photo').innerHTML.split('{{split}}')[0].trim()
    nav_html = getEle('.nav').innerHTML.trim()

    let photos = [], navs = []

    data.forEach((item, i) => {

      let tempPhoto = photo_html.replace(/{{id}}/, i).replace(/{{src}}/, 'src').replace(/{{img}}/, item.img).replace(/{{caption}}/, item.caption).replace(/{{desc}}/, item.desc)
      let tempNav = nav_html.replace(/{{id}}/, i)

      photos.push(tempPhoto)
      navs.push(tempNav)
    });
    photos.push(`<div class="nav">${navs.join('')}</div>`)
    getEle('.photo').innerHTML = photos.join('')
  }

  //需求2 对所有的照片进行排序 并实现点击翻转，并联小圆点
  function sortImg(n) {
    let photos = getEle('.photo_i')
    let center = photos.splice(0, 1)[0]
    addClass(center, 'center')
    addClass(getEle(`#nav_${n}`), 'active')

    center.addEventListener('click', function () {
      turnImg(this)
    })

    photos.sort(() => {
      return 0.5 - Math.random()
    })

    let left = photos.splice(0, Math.ceil((len - 1) / 2)),
      right = photos

    let range = scope()

    left.forEach((item, i) => {
      item.style.left = rn(range.L.x) + 'px',
        item.style.top = rn(range.L.y) + 'px',
        item.style.transform = `translate(0,0) scale(.8) rotate(${rn([-2160, 2160])}deg)`
    })

    right.forEach((item, i) => {
      item.style.left = rn(range.R.x) + 'px',
        item.style.top = rn(range.R.y) + 'px',
        item.style.transform = `translate(0,0) scale(.8) rotate(${rn([-2160, 2160])}deg)`
    })
  }

  //需求3 返回两个数之间的随机整数
  function rn(arr) {  //[1,10]   [10,1] 长度为2的数组为参数
    let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr)
    return Math.round(Math.random() * (max - min) + min)
  }

  //需求4 设定左右两侧照片的范围
  function scope() {
    let outter = getEle('.photo_wall'),
      oneImg = getEle('#' + rn([0, len - 1]))

    let W = outter.clientWidth,
      H = outter.clientHeight,
      w = oneImg.offsetWidth,
      h = oneImg.offsetHeight

    let data = {
      L: {
        x: [-w / 3, W / 2 - w / 2 - w],
        y: [-h / 3, H - h * 2 / 3]
      },
      R: {
        x: [(W + w) / 2, W - w * 2 / 3],
        y: [-h / 3, H - h * 2 / 3]
      },
    }
    return data
  }

  //需求5 点击照片 使之翻转 并关联导航栏
  function turnImg(ele) {

    let cur = ele.id
    let nav = getEle(`#nav_${cur}`)

    console.log(cur)

    if (!hasClass(ele, 'center')) {
      return sortImg(cur)
    }

    if (hasClass(ele, 'front')) {
      rmClass(ele, 'front')
      addClass(ele, 'back')
      addClass(nav, 'back')
    } else {
      addClass(ele, 'front')
      rmClass(ele, 'back')
      rmClass(nav, 'back')
    }
  }

  //需求6 点击导航栏实现图片重排
  function navClick() {
    let nav = document.querySelector('.nav')
    nav.addEventListener('click', function (e) {
      let tag = e.target.tagName
      if (tag === 'SPAN') {
        turnImg(getEle(`#${e.target.id.split('_')[1]}`))

        // console.log(getEle(`#${e.target.id.split('_')[1]}`))
      }
    })
  }

  navClick()


})()
