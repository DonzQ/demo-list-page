<template>
  <div class="autoCompleteQuery">
    <input @click="readyInput($event)" @keydown="keySelect($event)" v-model="inputSome" type="text">
    <div ref="selectBox" v-show="flag" class="select-box">
      <ul v-if="computedData == ''">
        <li>未查询到数据!</li>
      </ul>
      <ul v-else>
        <li ref="options" v-for="(item, index) in computedData" :class="{'active':index === nowSelect}" @click="selectOne(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      require: true
    }
  },
  mounted () {},
  computed: {
    computedData () {
      var self = this
      self.nowSelect = 0
      this.$emit('getSome', self.inputSome)
      return this.data.filter(function (item) {
        return item.name.indexOf(self.inputSome) !== -1
      })
    }
  },
  methods: {
//    选择输入
    readyInput (e) {
      e.stopPropagation()
      var self = this
      self.flag = true
      var bindEvent = function () {
        self.flag = false
        document.removeEventListener('click', bindEvent, false)
      }
      document.addEventListener('click', bindEvent, false)
    },
//    鼠标点击选择
    selectOne (item) {
      this.inputSome = item.name
    },
//    键盘按下事件
    keySelect (event) {
      var self = this
      if (self.computedData.length > 1) {
        switch (event.keyCode) {
          case 38:  // 上
            if (self.nowSelect < 1) {
              self.nowSelect = self.computedData.length - 1
            } else {
              self.nowSelect--
            }
            break
          case 40:  // 下
            if (self.nowSelect > self.computedData.length - 2) {
              self.nowSelect = 0
            } else {
              self.nowSelect++
            }
            break
          case 13:  // 回车
            self.selectOne(self.computedData[self.nowSelect])
            self.nowSelect = 0
            self.flag = false
            event.target.blur()
            break
          case 8:// 删除
            self.flag = true
            break
        }
        self.resetScroll()
      }
    },
//    滚动条跟随滚动
    resetScroll () {
      var self = this
      var bottomOverflowDistance = self.$refs.options[self.nowSelect].getBoundingClientRect().bottom - self.$refs.selectBox.getBoundingClientRect().bottom
      var topOverflowDistance = self.$refs.options[self.nowSelect].getBoundingClientRect().top - self.$refs.selectBox.getBoundingClientRect().top
      if (topOverflowDistance < 0) {
        self.$refs.selectBox.scrollTop += topOverflowDistance
      }
      if (bottomOverflowDistance > 0) {
        self.$refs.selectBox.scrollTop += bottomOverflowDistance
      }
    }
  },
  data () {
    return {
      flag: false,
      inputSome: '',
      nowSelect: 0
    }
  }
}

require('../../assets/css/components/AutoCompleteQuery.scss')
</script>
