<template>
  <div class="wrap">
    <header class="header">
      <div class="headerTop">
        <a href="javascript:;">
          <img src="./images/logo.png" alt="logo" />
        </a>
        <div class="headerSearch" @click="goTo()">
          <i></i>
          <span>搜索商品，共22717款好物</span>
        </div>
        <div class="headerLogin">登录</div>
      </div>
      <div class="headerBottom">
        <div class="changeList">
          <div class="changeListRight">
            <i></i>
          </div>
        </div>
        <ul class="headerBottomList">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
      </div>
    </header>
    <div class="content">
      <div>
        <!-- 轮播 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./images/swiper1.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper2.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper3.jpg" />
            </div>
            <div class="swiper-slide">
              <img src="./images/swiper4.jpg" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <!-- 30天无忧 -->
        <div class="indexServicePolicy">
          <ul>
            <li>
              <a href="JavaScript:;">
                <i>
                  <img src="./images/yiquan.png" alt />
                </i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li>
              <a href="JavaScript:;">
                <i>
                  <img src="./images/baozhang.png" alt />
                </i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li>
              <a href="JavaScript:;">
                <i>
                  <img src="./images/kuaisutuikuan.png" alt />
                </i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 分类列表 -->
        <div class="sortList">
          <a v-for="(item, index) in sortList" :key="index">
            <img :src="item.url" />
            <span>{{item.title}}</span>
          </a>
        </div>
        <!-- gif -->
        <div class="imgGif">
          <img src="./images/gif1.gif" />
        </div>
        <!-- 9.9超值区 -->
        <div class="sceneLightShoppingGuideModule">
          <a href="javascript:;">
            <div class="shopTitle">9.9超值专区</div>
            <div class="shopDesc">190款商品定价直降</div>
            <div class="photos">
              <img
                src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
          <a href="javascript:;">
            <div class="shopTitle">9.9超值专区</div>
            <div class="shopDesc">190款商品定价直降</div>
            <div class="photos">
              <img
                src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
          <a href="javascript:;">
            <div class="shopTitle">9.9超值专区</div>
            <div class="shopDesc">190款商品定价直降</div>
            <div class="photos">
              <img
                src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
          <a href="javascript:;">
            <div class="shopTitle">9.9超值专区</div>
            <div class="shopDesc">190款商品定价直降</div>
            <div class="photos">
              <img
                src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
              />
              <img
                src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data() {
    return {
      sortList: [
        {
          title: '新品首发',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '居家生活',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '服饰鞋包',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '美食酒水',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '个护清洁',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '母婴亲子',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '运动旅行',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '数码家电',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '全球特色',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        },
        {
          title: '好货抄底',
          url:
            'https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png'
        }
      ]
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    this._initBscroll()
  },
  methods: {
    changeList() {
      this.isListShow = !this.isListShow
    },
    _initBscroll() {
      this.bs = new BScroll('.content', {
        // 允许分发点击事件
        click: true,
        scrollY: true,
        probeType: 3
      })
      console.log(666)
    },
    goTo() {
      this.$router.push('/search')
    }
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  height 100%
  overflow hidden

  .header
    position relative
    z-index 999
    width 100%
    background-color #fff

    .headerTop
      z-index 999
      display flex
      align-items center
      width 750px
      height 88px
      padding 16px 30px 16px 30px
      box-sizing border-box
      background-color #fff

      >a
        z-index 1
        display flex
        align-items center
        margin-right 20px
        background-color #fff

      .headerSearch
        z-index 1
        width 442px
        height 56px
        line-height 56px
        background-color #ededed
        color #666666
        font-size 28px
        border-radius 10px
        text-align center

        >i
          z-index 1
          display inline-block
          width 28px
          height 28px
          background-image url('./images/search.png')
          background-size cover
          margin-right 10px
          margin-top 12px

      .headerLogin
        z-index 1
        width 74px
        height 40px
        line-height 40px
        text-align center
        border 1px solid #B4282D
        font-size 24px
        color #B4282D
        margin-left 16px
        border-radius 10px
        background-color #fff

    .headerBottom
      z-index 1
      position relative
      box-sizing border-box
      height 60px
      background-color #fff

      .changeList
        position absolute
        right 0
        z-index 1
        width 169px
        height 60px
        background-color #fff

        .changeListRight
          width 100px
          height 60px
          float right
          background-color #fff
          display flex

          >i
            margin auto
            display inline-block
            width 30px
            height 30px
            background-image url('./images/xialakaung.png')
            background-size cover

      .headerBottomList
        display flex
        position absolute
        white-space nowrap
        padding-left 30px

        >li
          box-sizing border-box
          height 60px
          line-height 60px
          font-size 28px
          color #333333
          padding 0 18px
          font-family PingFangSC-Light, helvetica, 'Heiti SC'

        .active
          color #b4282d
          border-bottom 3px solid #b4282d

  .content
    height 1200px
    z-index -1

    .indexServicePolicy
      height 72px
      padding 0 30px

      >ul
        display flex

        >li
          height 72px
          flex 1
          text-align center

          >a
            display flex
            align-items center
            justify-content center
            height 72px

            >i
              display inline-block
              width 32px
              height 32px

              >img
                width 100%

            span
              color #333333

    .sortList
      height 372px

      a
        display inline-block
        width 110px
        height 156px
        margin 10px 20px 9px
        text-align center

        >img
          width 110px
          height 110px
          margin-bottom 10px

        span
          color #333333
          font-size 24px

    .imgGif
      img
        width 100%

    .sceneLightShoppingGuideModule
      height 576px
      margin-bottom 20px
      padding 10px 30px 30px 26px

      >a
        display inline-block
        box-sizing border-box
        width 342px
        height 264px
        margin 4px 0 0 4px
        padding 20px 0 0 20px
        background-color #F5F5F5

        .shopTitle
          height 48px
          color #333333
          font-size 32px
          padding-left 10px

        .shopDesc
          height 36px
          color #7F7F7F
          font-size 24px
          padding-left 10px
</style>
