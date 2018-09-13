<template>
<div class="wrapper">
  <ul class="list one">
    <li>
      <img src="../assets/img/icon/nav1.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/nav2.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/nav3.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/nav4.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/nav5.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/nav6.png" alt="">
    </li>
  </ul>
  <ul class="list two">
    <li>
      <img src="../assets/img/icon/j1.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j2.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j3.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j4.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j5.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j6.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j7.png" alt="">
    </li>
    <li>
      <img src="../assets/img/icon/j8.png" alt="">
    </li>
  </ul>
  <div class="list three">
    <div class="left">
        <img src="../assets/img/res/t1.jpg" alt="">
    </div>
    <div class="right">
      <div>
          <img src="../assets/img/res/t2.jpg" alt="">
      </div>
      <div>
          <img src="../assets/img/res/t3.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="title">热门活动</div>
  <ul class="list hot">
    <li>
      <img src="../assets/img/res/r1.jpg" alt="">
    </li>
    <li>
      <img src="../assets/img/res/r2.jpg" alt="">
    </li>
    <li>
      <img src="../assets/img/res/r3.jpg" alt="">
    </li>
    <li>
      <img src="../assets/img/res/r4.jpg" alt="">
    </li>
  </ul>
</div>
</template>
<script>
export default {

  mounted(){

  },

  methods:{
    myHover(){

    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  width 100%
  position relative
  .list
    display flex
    flex-wrap wrap
    justify-content center
    img
      width 100%
      height 100%
    &.one
      li
        width 30%
        margin-right 4px
        margin-top 4px
        &:hover
          transform scale(1.1)
    &.two
      margin-top 10px
      li
        width 23%
        border 1px solid gray
        border-right none
        &:nth-child(1)
          border-left none
          border-bottom none
        &:nth-child(2)
          border-bottom none
        &:nth-child(3)
          border-bottom none
        &:nth-child(4)
          border-bottom none
        &:nth-child(5)
          border-left none
    &.three
      flex-wrap nowrap
      margin-top 10px 
      .left 
        border-right 1px solid gray 
        border-bottom 1px solid gray  
      .right>div
        border-bottom 1px solid gray 
    &.hot
      margin-top 45px
      li
        border-bottom 1px solid gray
        &:nth-child(1)
          border-top 1px solid gray
  .title
    position absolute
    left 10px
    margin-top 20px 
</style>
