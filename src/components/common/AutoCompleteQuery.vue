<template>
  <div class="autoCompleteQuery">
    <input type="text" @focus="focus">
    <transition
      name="fade"
      mode="out-in"
      appear>
      <ul v-if="showFlag">
        <li v-for="item in data" :key="item.name">{{item.name}}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
module.exports = {
  name: 'AutoCompleteQuery',
  created: function () {},
  mounted: function () {
    var self = this
    addEventListener('document', 'click', function () {
      self.showFlag = false
    })
  },
  methods: {
    focus: function () {
      var self = this
      self.showFlag = true
    },
    b: function () {
      var self = this
      self.showFlag = false
    },
    select: function (name, event) {
      console.log(name)
      var self = this
      self.showFlag = false
    },
    beforeEnter: function () {
      console.log('a')
    },
    enter: function () {
      console.log('c')
    },
    leave: function () {
      console.log('ff')
    }
  },
  data () {
    return {
      showFlag: false,
      data: [
        {name: 1},
        {name: 2},
        {name: 3}
      ]
    }
  }
}

require('../../assets/css/AutoCompleteQuery.scss')
</script>
