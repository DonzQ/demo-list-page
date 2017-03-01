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
    var Mock = require('mockjs')
    var template = require('../../../static/index.json')
    Mock.mock('http://test', template)
    let url = 'http://test'
    ajax.getDataFromApi({
      url: url,
      data: {}
    }, (response) => {
      console.log(response.data.list)
    }, (error) => {
      console.log(error)
    })
  }
}

require('../../assets/css/components/Sections.scss')
</script>
