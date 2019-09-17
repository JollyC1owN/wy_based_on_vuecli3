<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o" @click="goToRouter('/home')">首页</van-tabbar-item>
    <van-tabbar-item icon="coupon-o" @click="goToRouter('/sort')">分类</van-tabbar-item>
    <van-tabbar-item icon="notes-o" @click="goToRouter('/something')">识物</van-tabbar-item>
    <van-tabbar-item icon="cart-o" @click="goToRouter('/shopcart')">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" @click="goToRouter('/profile')">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      active: 0
    }
  },
  methods: {
    goToRouter(path) {
      this.$router.replace(path)
    }
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
