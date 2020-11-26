<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click="$emit('toggle-menu')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
                <span class="black-text">{{ dateFilter('datetime') }}</span>
            </div>
            <ul class="right hide-on-small-and-down">
                <li>
                    <a
                        class="dropdown-trigger black-text"
                        href="#"
                        data-target="dropdown"
                        ref="dropdown"
                    >
                    USER NAME
                    <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link :to="{name: 'profile'}" class="black-text">
                              <i class="material-icons">account_circle</i>Профиль
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a @click="logout" class="black-text">
                              <i class="material-icons">assignment_return</i>Выйти
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

import M from 'materialize-css'

export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  mounted () {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown)

    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  methods: {
    logout () {
      this.$router.push('/login?message=Logout')
      console.log('Logout')
    },
    dateFilter (format = 'date') {
      var option = {}

      if (format.includes('date')) {
        option.day = '2-digit'
        option.month = 'long'
        option.year = 'numeric'
      }

      if (format.includes('time')) {
        option.hour = '2-digit'
        option.minut = '2-digit'
        option.second = '2-digit'
      }

      return new Intl.DateTimeFormat('ru-RU', option).format(this.date)
    }
  },
  // computed: {
  //   dateFilter (date, format = 'date') {
  //     return date
  //   }
  // },
  beforeUpdate () {
    console.log('before update...')
  },
  beforeUnmount () {
    console.log('before unmount...')
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.distroy) {
      this.dropdown.distroy()
    }
  }
}
</script>
