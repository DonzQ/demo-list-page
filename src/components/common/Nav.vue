<template>
  <nav class="left">
    <div class="left-one">
      <a href="javascript:;">
        <img :src="img.url" title="头像">
      </a>
    </div>
    <ul class="left-two">
      <li v-for="item in navs">
        <a href="">{{item.name}}</a>
      </li>
    </ul>
    <div class="left-three">
      <p>ALL RIGHTS RESERVED © 2016</p>
    </div>
  </nav>
</template>

<script>
import ajax from '../../public/ajax'
export default {
  name: 'navigation',
  mounted () {
    this.getNavs()
  },
  methods: {
    getNavs () {
      var self = this
      var Mock = require('mockjs')
      var template = require('../../../static/navs.json')
      Mock.mock('http://navs', template)
      var data = {
        url: 'http://navs'
      }
      ajax.getDataFromApi(data, (response) => {
        self.navs = response.data.list
        self.img = response.data.img
      }, (error) => {
        console.log(error)
      })
    }
  },
  data () {
    return {
      navs: '',
      img: ''
    }
  }
}

require('../../assets/css/components/Nav.scss')
</script>
