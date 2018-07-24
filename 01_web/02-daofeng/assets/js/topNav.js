
let navUl = document.querySelector('.nav-link ul')
let navLi = navUl.querySelectorAll('.nav-link ul li')

for(let i = 0; i < navLi.length; i++){
  navLi[i].addEventListener('click',(e)=>{
    tabChange(navLi,i)
  })
}

function tabChange(arr,index){
  for(let item of arr){
    item.className = ''
  }
  arr[index].className = 'active'
}