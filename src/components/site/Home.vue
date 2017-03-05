<template>
  <div class="container">
    <!--左侧导航-->
    <navigation></navigation>
    <!--右侧内容-->
    <SectionHeader></SectionHeader>
  </div>
</template>

<script>
import Navigation from '../common/Nav'
import SectionHeader from '../common/SectionHeader'
export default {
  components: {
    Navigation,
    SectionHeader
  },
  mounted () {}
}

require('../../assets/css/site/Home.scss')
</script>
