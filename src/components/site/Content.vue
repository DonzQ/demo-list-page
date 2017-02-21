<template>
  <div>
    <Home></Home>
    <ul>
      <li v-for="item in data">
        <a @click="detail(item.id)">user</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Home from '../common/Home'
export default {
  components: {
    Home
  },
  methods: {
    detail: function (id) {
      window.location.href = '/#/detail/' + id
    }
  },
  data () {
    return {
      data: [
        {id: 1},
        {id: 2},
        {id: 3}
      ]
    }
  }
}
</script>

<style scoped></style>
