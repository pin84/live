let oA = document.querySelectorAll('.list ul li a')
let use = document.querySelectorAll('.list ul li a use')

use[1].href.baseVal = '#icon-triangle-white'
let index = 0
oA.forEach((item)=>{
  item.index = index
  index++
  item.addEventListener('click',(e)=>{
    //每个a标签的背景
    for(let  key of oA){
      key.className = ''
    }
    item.className = 'active'
    
    //小三角形
    for(let  key of use){
      key.href.baseVal = '#icon-triangle-red'
    }
    use[e.target.index].href.baseVal = '#icon-triangle-white'
  })
})


