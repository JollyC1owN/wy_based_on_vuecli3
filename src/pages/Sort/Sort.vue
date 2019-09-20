<template>
  <div class="listWrap">
    <!-- 头部 -->
    <div class="listHeader">
      <div class="listSearch" @click="$router.push('/search')">
        <i></i>
        <span>搜索商品，共22717款好物</span>
      </div>
    </div>
    <div class="listMain">
      <div class="listLeft">
        <!-- 左边列表 -->
        <ul>
          <li v-for="(category, index) in categoryL1List" :key="index">{{category.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Sort',
  data() {
    return {}
  },
  mounted() {
    this.$store.dispatch('getCategoryL1List')
    new BScroll('.listLeft', {})
  },
  computed: {
    ...mapState(['categoryL1List'])
    
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.listWrap
  height 100%
  padding-bottom 100px

  .listHeader
    position absolute
    z-index 1
    width 100%
    height 88px
    padding 16px 30px
    border-bottom 1px solid #333
    box-sizing border-box
    background-color #fff

    .listSearch
      z-index 1
      display flex
      align-items center
      justify-content center
      background-color #EDEDED
      width 690px
      height 56px
      border-radius 10px

      i
        width 28px
        height 28px
        background-image url('./images/search.png')
        background-size cover
        margin-right 5px

      span
        font-size 28px
        color #666

  .listMain
    height 1000px
    position relative

    .listLeft
      position absolute
      top 105px
      left 0
      height 100%
      padding 40px 0

      ul
        width 162px
        display flex
        flex-direction column

        li
          width 160px
          height 50px
          line-height 50px
          text-align center
          font-size 28px
          margin 15px 0
          border-left 6px solid #fff

          &.active
            border-left 6px solid red
            color red
</style>
