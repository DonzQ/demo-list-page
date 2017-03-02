<template>
  <div class="autoCompleteQuery">
    <input type="text" v-model="inputSome" @click="readyInput($event)">
    <ul v-show="flag">
      <li v-for="item in computedData">{{item.name}}</li>
    </ul>
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
      this.$emit('getSome', self.inputSome)
      return this.data.filter(function (item) {
        return item.name.indexOf(self.inputSome) !== -1
      })
    }
  },
  methods: {
    readyInput (e) {
      e.stopPropagation()
      var self = this
      self.flag = true
      var bindEvent = function () {
        self.flag = false
        document.removeEventListener('click', bindEvent, false)
      }
      document.addEventListener('click', bindEvent, false)
    }
  },
  data () {
    return {
      flag: false,
      inputSome: ''
    }
  }
}

require('../../assets/css/components/AutoCompleteQuery.scss')
</script>
