<template>
  <div class="wrapper">
    <ul class="list">
      <li class="loc">上海 <span></span></li>
      <li>驴妈妈旅游网</li>
      <li class="man"></li>
    </ul>
  </div>
</template>


<script>
 export default{

}
</script>


<style lang='stylus' scoped>
.wrapper
  width 100%
  .list
    padding 10px 10px
    display flex
    justify-content space-between
    font-size 16px
    font-weight 600
    .loc
      color pink
      span
        display inline-block
        width 16px
        height 16px
        background url('../assets/img/shan.png') no-repeat center
    .man
      display block
      width 16px
      height 16px
      background url('../assets/img/man.png') no-repeat center
</style>
