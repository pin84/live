<template>
<div class="wrapper">
  <div class="more">查看更多 v</div>
  <div class="bot">
    <div class="left">
      <div>免费注册</div>
      <div>登录</div>
    </div>
    <div class="right">TOP</div>
  </div>
</div>
</template>


<script>
 export default{

}
</script>


<style lang='stylus' scoped>
.wrapper
  width 100%
  margin-top 20px
  .more
    border-bottom 1px solid gray
  .bot
    display flex
    padding 5px 10px
    justify-content space-between
    background #d3079e
    color #fff
    font-weight 600
    margin-top 10px
    .left
      display flex
      div
        margin-right 10px
</style>
