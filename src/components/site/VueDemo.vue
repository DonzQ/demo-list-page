<template>
  <div class="container">
    <!--左侧导航-->
    <navigation></navigation>

    <!--右侧内容-->
    <SectionHeader>
      <div class="title">
        <h1>Components 组件</h1>
        <div><span>&</span></div>
      </div>
      <div class="article">
        <div class="components components-right">
          <h2 class="components-title">QuerySelect 模糊查询选择器</h2>
          <div id="示例" class="example-header">
            <span>示例 <a href="javascript:;" @click="goAnchor('#示例')">#</a></span>
          </div>
          <div class="components-example">
            <auto-complete-query v-on:getSome="getSome1" :data="selectData"></auto-complete-query>
            <span>: {{search1}}</span>
          </div>
        </div>
        <div class="components components-left">
          <div v-html="compiledMarkdown"></div>
        </div>
      </div>
      <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </SectionHeader>
  </div>
</template>

<script>
import marked from 'marked'
import Navigation from '../common/Nav'
import SectionHeader from '../common/SectionHeader'
import AutoCompleteQuery from '../common/AutoCompleteQuery'
import ajax from '../../public/ajax'
import publicFunction from '../../public/public'
export default {
  components: {
    Navigation,
    SectionHeader,
    AutoCompleteQuery
  },
  computed: {
    compiledMarkdown () {
      return marked(this.exampleArticle, { sanitize: true })
    }
  },
  mounted () {
    this.getSelectData()
  },
  methods: {
    goAnchor (selector) {
      publicFunction.goAnchor(selector)
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
    getSome1 (value) {
      this.search1 = value
    },
    getSome2 (value) {
      this.search2 = value
    }
  },
  data () {
    return {
      search1: '',
      search2: '',
      selectData: [],
      exampleArticle: ''
    }
  }
}

require('../../assets/css/site/VueDemo.scss')
</script>
