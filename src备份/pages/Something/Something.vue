<template>
  <div>
    <input type="text" v-model="text" />
    <span @click="clearText" v-show="!text==''">XXXX</span>
    <span @click="backRoute">取消</span>
    <div v-for="(city) in resultArr" :key="city.name" @click="showInfo(city)">{{city.name}}</div>
  </div>
</template>
4
<script>
export default {
  name: 'Something',
  data() {
    return {
      cityArr: [
        { name: '东北', temperature: '28°' },
        { name: '广安', temperature: '19°' },
        { name: '广西', temperature: '27°' },
        { name: '山西', temperature: '18°' },
        { name: '山东', temperature: '20°' },
        { name: '马安山', temperature: '25°' }
      ],
      // resultArr: [],
      text: ''
    }
  },
  methods: {
    showInfo(city) {
      console.log(`你选择的城市是${city.name}，现在的温度是${city.temperature}`)
    },
    clearText() {
      this.text = ''
    },
    backRoute() {
      this.$router.back()
    }
  },
  // watch: {
  //   text(newValue) {
  //     if (this.text == '') {
  //       this.resultArr = []
  //       return
  //     }
  //     console.log(newValue, this.text)
  //     let result = []
  //     this.resultArr = []
  //     for (let i = 0; i < this.cityArr.length; i++) {
  //       if (this.cityArr[i].name.indexOf(this.text) > -1) {
  //         this.resultArr.push(this.cityArr[i])
  //       }
  //     }
  //     // this.resultArr = result
  //     console.log('this.resultArr, ', this.resultArr)
  //     // for (let j = 0; j < this.resultArr.length; j++) {
  //     //   console.log(this.resultArr[j].name)
  //     // }
  //   }
  // },
  computed: {
    resultArr() {
      let result = []
      if (this.text === '') {
        return result
      }
      for (let i = 0; i < this.cityArr.length; i++) {
        if (this.cityArr[i].name.indexOf(this.text) !== -1) {
          result.push(this.cityArr[i])
        }
      }
      return result
    }
  },
  components: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
input
  width 400px
  height 40px
</style>
