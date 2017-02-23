<template>
  <div class="bg">
    <h1 class="content-navigation">{{ msg }}</h1>
    <a href="">测试</a>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li @click="ceshi">6</li>
    </ul>
    <p>我要跳转到 <router-link to="/about">关于</router-link> 页面</p>
    <p>我要跳转到 <router-link to="/content">Content</router-link> 页面</p>

    <select v-model="sel" @change="change($event)">
      <option value="1">dffds</option>
      <option value="2">sdas</option>
    </select>
    <AutoCompleteQuery></AutoCompleteQuery>
  </div>
</template>

<script>
import AutoCompleteQuery from '../common/AutoCompleteQuery'
import '../../public/public'
export default {
  components: {
    AutoCompleteQuery
  },
  mounted () {
    console.log(this.sel)
  },
  methods: {
    ceshi: function () {
      window.location.href = '#/about'
    },
    change: function (event) {
      console.log(this.sel)
      console.log(event)
    }
  },
  data () {
    return {
      msg: '个人简历',
      sel: '',
      selValue: ''
    }
  }
}

require('../../assets/css/common.scss')
</script>
