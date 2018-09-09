let ul = document.querySelector('.pagination ul')
let oLi = document.querySelector('.pagination ul li')



ul.addEventListener('click', (e) => {
  if (e.target.tagName.toUpperCase() !== 'A' || e.target.innerHTML === '...') {
    return
  }
 
  for(li of siblings( e.target.parentNode)){
    li.classList.remove('current');
  }
  e.target.parentNode.classList.add('current')
})


//原生实现jq的 siblings 方法  返回 elem 元素的兄弟元素
function siblings(elem) {
  let nodes = []
  let previ = elem.previousSibling //返回当前节点的前一个兄弟节点,没有则返回null.
  while (previ) {
    if (previ.nodeType === 1) {
      nodes.push(previ)
    }
    previ = previ.previousSibling
  }
  nodes.reverse()//把顺序反转一下 这样元素的顺序就是按先后的了 

  let nexts = elem.nextSibling
  while (nexts) {
    if (nexts.nodeType === 1) {
      nodes.push(nexts)
    }
    nexts = nexts.nextSibling
  }
  return nodes
}