<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

import AuthLayout from '@/layout/AuthLayout'
import MainLayout from '@/layout/MainLayout'
export default {
  computed: {
    layout () {
      console.log(this.$route.meta)
      return (this.$route.meta.layout || 'auth') + '-layout'
    }
  },
  components: {
    AuthLayout, MainLayout
  }
}
</script>

<style lang="scss">
@import 'assets/css/index.css';
@import '~materialize-css/dist/css/materialize.min.css';
</style>
