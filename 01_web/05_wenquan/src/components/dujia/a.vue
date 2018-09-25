<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li>
        <img src="../../assets/img/res/zm1.jpg" alt="">
        <a href="javascript:;">[热门活动]驴妈妈温泉季</a>
        <a href="javascript:;">听音乐，泡温泉，就找驴妈妈，泉新玩法，全心为你，5折整点秒杀，立减高达100元。</a>
      </li>
      <li>
        <img src="../../assets/img/res/zm2.jpg" alt="">
        <a href="javascript:;">[热门活动]驴妈妈温泉季</a>
        <a href="javascript:;">听音乐，泡温泉，就找驴妈妈，泉新玩法，全心为你，5折整点秒杀，立减高达100元。</a>
      </li>
      <li>
        <img src="../../assets/img/res/zm3.jpg" alt="">
        <a href="javascript:;">[热门活动]驴妈妈温泉季</a>
        <a href="javascript:;">听音乐，泡温泉，就找驴妈妈，泉新玩法，全心为你，5折整点秒杀，立减高达100元。</a>
      </li>
      <li>
        <img src="../../assets/img/res/zm4.jpg" alt="">
        <a href="javascript:;">[热门活动]驴妈妈温泉季</a>
        <a href="javascript:;">听音乐，泡温泉，就找驴妈妈，泉新玩法，全心为你，5折整点秒杀，立减高达100元。</a>
      </li>
      <li>
        <img src="../../assets/img/res/zm5.jpg" alt="">
        <a href="javascript:;">[热门活动]驴妈妈温泉季</a>
        <a href="javascript:;">听音乐，泡温泉，就找驴妈妈，泉新玩法，全心为你，5折整点秒杀，立减高达100元。</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

  mounted(){
    this. addUnderline()
  },


  methods:{
    addUnderline(){
      let  wrapper = this.$refs.wrapper
      let flag = true

      wrapper.addEventListener('click',(e)=>{
        if(flag){
          if(e.target.tagName === 'A'){
            e.target.style.textDecoration = 'underline'
            flag = false
          }
        } else {
          e.target.style.textDecoration = 'none'
          flag = true
        }

      })
    }
  }


}
</script>
<style lang="stylus" scoped>
.wrapper
  position relative
  ul
    display flex
    flex-direction column
    li
      display flex
      flex-direction column
      // justify-content flex-start
      align-items flex-start
      img
        width 100%
        height 100%
      a
        color black
        font-size 14px
</style>
