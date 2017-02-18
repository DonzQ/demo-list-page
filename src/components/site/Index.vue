<template>
  <div>
    <h1 class="content-navigation">{{ msg }}</h1>
  </div>
</template>

<script>
import '../../public/public'
export default {
  compontents: {},
  mounted () {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

require('../../assets/css/common.scss')
</script>

<style scoped lang="scss">
  $blue: #3bbfce;
  $margin: 16px;

  .content-navigation {
    border-color: $blue;
    color: darken($blue, 9%);
  }
</style>

