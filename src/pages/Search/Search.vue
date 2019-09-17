<template>
  <div>
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
      <div class="cancel" @click="cancelSearch">取消</div>
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
.searchHeader
  height 88px
  padding 0 30px
  display flex
  align-items center

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
</style>
