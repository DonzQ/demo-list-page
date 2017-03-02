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
      <h2>Demo</h2>
      <div>
        <auto-complete-query v-on:getSome="getSome" :data="selectData"></auto-complete-query>
      </div>
    </div>
  </section>
</template>

<script>
import ajax from '../../public/ajax.js'
import AutoCompleteQuery from '../common/AutoCompleteQuery'
export default {
  name: 'sections',
  components: {
    AutoCompleteQuery
  },
  mounted () {
    this.getBg()
    this.getSelectData()
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
    },
    getSelectData () {
      var self = this
      let Mock = require('mockjs')
      let template = require('../../../static/select.json')
      Mock.mock('http://select', template)
      ajax.getDataFromApi({
        url: 'http://select'
      }, (response) => {
        self.selectData = response.data.list
      }, (error) => {
        console.log(error)
      })
    },
    getSome (value) {
      this.search = value
    }
  },
  data () {
    return {
      backGroundImg: '',
      search: '',
      selectData: []
    }
  }
}

require('../../assets/css/components/Sections.scss')
</script>
