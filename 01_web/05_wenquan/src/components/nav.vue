<template>
  <div class="wrapper">
    <ul>
      <router-link tag="li" to='/a'>
        <a href="javascript:;">度周末</a>
      </router-link>
      <router-link tag="li" to='/b'>
        <a href="javascript:;">度长假</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.wrapper
  position relative
  margin-bottom 20px
  margin-top 10px
  ul
    display flex
    justify-content center
    li
      padding 0 60px
      a
        padding-bottom 10px
.router-link-active
  a
    color red
    border-bottom 2px solid red
</style>
