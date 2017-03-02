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
    <div class="right-section">第一部分:2</div>
  </section>
</template>

<script>
import ajax from '../../public/ajax.js'
export default {
  name: 'sections',
  mounted () {
    var self = this
    var Mock = require('mockjs')
    var template = require('../../../static/section.json')
    Mock.mock('http://test', template)
    ajax.getDataFromApi({
      url: 'http://test'
    }, (response) => {
      self.backGroundImg = response.data.list
      console.log(response.data.list)
    }, (error) => {
      console.log(error)
    })
  },
  data () {
    return {
      backGroundImg: ''
    }
  }
}

require('../../assets/css/components/Sections.scss')
</script>
