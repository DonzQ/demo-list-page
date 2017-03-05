<template>
  <section class="right">
    <div class="right-header">
      <div class="right-header-bg">
        <div class="shape">
          <div class="space-right"></div>
          <div class="space-left"></div>
        </div>
      </div>
    </div>
    <div class="right-section">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import ajax from '../../public/ajax.js'
export default {
  name: 'section-header',
  components: {},
  mounted () {
    this.getBg()
  },
  methods: {
    getBg () {
      var self = this
      let Mock = require('mockjs')
      let template = require('../../../static/section.json')
      Mock.mock('http://test', template)
      ajax.getDataFromApi({
        url: 'http://test'
      }, (response) => {
        self.backGroundImg = response.data.list
      }, (error) => {
        console.log(error)
      })
    }
  },
  data () {
    return {
      backGroundImg: ''
    }
  }
}

require('../../assets/css/components/SectionHeader.scss')
</script>
