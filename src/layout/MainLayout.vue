<template>
  <div class="app-main-layout">
    <Navbar @toggle-menu="toggleMenu" />
    <Sidebar :value="isOpen"/>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  },
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
