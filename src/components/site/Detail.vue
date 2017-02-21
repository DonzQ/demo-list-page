<template>
  <div>
    <Home></Home>

    <div>
      <p>
        我是内容 {{ $route.params.id }}
      </p>
    </div>
  </div>
</template>

<script>
import Home from '../common/Home'
export default {
  components: {
    Home
  }
}
</script>

<style scoped></style>
