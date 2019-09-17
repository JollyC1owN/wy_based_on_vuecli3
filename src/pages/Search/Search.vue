<template>
  <div class="searchWrap">
    <div class="searchHeader">
      <div class="inputWrap">
        <i class="magnifier"></i>
        <input
          type="text"
          name="search"
          placeholder="输入要搜索的内容"
          v-model="searchText"
          class="searchInput"
        />
        <i class="close" v-if="searchText.length>0" @click="cancelSearch"></i>
      </div>
      <div class="cancel" @click="$router.back()">取消</div>
    </div>
    <div class="searchRecommend">
      <div class="recommendTitle">热门推荐</div>
      <div class="recommendList">
        <ul>
          <li>
            <a href="javascript:;">电动牙刷69元起</a>
          </li>
          <li>
            <a href="javascript:;">牛仔裤</a>
          </li>
          <li>
            <a href="javascript:;">鞋子</a>
          </li>
          <li>
            <a href="javascript:;">流苏小裙子</a>
          </li>
          <li>
            <a href="javascript:;">除醛除味</a>
          </li>
          <li>
            <a href="javascript:;">苹果11</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    cancelSearch() {
      this.searchText = ''
    }
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchWrap
  height 1334px
  background-color #eee

  .searchHeader
    height 88px
    padding 0 30px
    display flex
    align-items center
    background-color #fff

    .inputWrap
      display flex
      align-items center
      width 604px
      height 56px
      padding 0 20px
      box-sizing border-box
      background-color #F4F4F4
      border-radius 5px

      .magnifier
        display inline-block
        width 28px
        height 28px
        background-image url('../Home/images/search.png')
        background-size cover
        margin-right 16px

      .searchInput
        width 520px
        height 39px
        padding-left 2px
        background-color #F4F4F4
        font-size 28px

      .close
        display inline-block
        width 50px
        height 50px
        background-image url('./images/close.png')
        background-size cover

    .cancel
      width 56px
      height 42px
      line-height 42px
      text-align center
      color #333333
      margin-left 30px
      font-size 28px

  .searchRecommend
    width 100%
    height 436px
    box-sizing border-box
    margin-bottom 20px
    padding 0 30px 30px
    background-color #fff

    .recommendTitle
      height 90px
      line-height 90px
      color #999
      font-size 28px

    .recommendList
      ul
        >li
          height 47px
          line-height 47px
          box-sizing border-box
          color #333333
          font-size 24px
          margin 0 32px 32px 0
          padding 0 15px
          border 1px solid #000
          float left
          border-radius 10px

          .a
            color #333
</style>
