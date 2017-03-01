<template>
  <div class="container">
    <!--左侧导航-->
    <navigation></navigation>

    <!--右侧内容-->
    <sections></sections>
  </div>
</template>

<script>
import Navigation from '../common/Nav'
import Sections from '../common/Sections'
export default {
  components: {
    Navigation,
    Sections
  },
  mounted () {}
}

require('../../assets/css/site/index.scss')
</script>
