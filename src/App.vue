<template>
  <div id="app">
    <app-toolbar></app-toolbar>
    <div class="main">
      <div class="container">
        <router-view/>
      </div>
      <ErrorBlock v-if="error">{{ error }}</ErrorBlock>
    </div>
    <Sidebar :class="{'active': sidebar}"></Sidebar>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Sidebar from '@/components/Sidebar'
import sidebarMixin from '@/mixins/sidebar-mixin'
import ErrorBlock from '@/components/ui/ErrorBlock'

export default {
  components: {
    'app-toolbar': Toolbar,
    Sidebar,
    ErrorBlock
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error () {
      if (this.error) {
        setTimeout(() => {
          this.$store.commit('clearError')
        }, 5000)
      }
    }
  },
  mixins: [sidebarMixin]
}
</script>

<style lang="scss">
@import "src/assets/scss/variables";
#app {
  position: relative;
}
html {
  font-size: 62.5%;
  @media screen and (max-width: 1200px) {
    font-size: 50%;
  }
}
body {
  position: relative;
  margin: 0;
  font-family: 'Garamond', sans-serif;
  font-size: 1.8rem;
  color: $text-color;
  background: #fff;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    display: none;
    width: 1px;
    height: 100%;
    background-color: magenta;
    z-index: 10000;
  }
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
  height: auto;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
p {
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1200px) {
    font-size: 2.2rem;
  }
}
.hidden {
  display: none;
}
.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1750px;
}
input[type='submit']:disabled {
  cursor: not-allowed !important;
  opacity: 0.6 !important;
}
a {
  color: inherit;
  text-decoration: none;
}
.img-responsive {
  &.img--desktop {
    @media screen and (max-width: 400px) {
      display: none !important;
    }
  }
  &.img--mobile {
    display: none !important;
    @media screen and (max-width: 400px) {
      display: block !important;
    }
  }
}
.main {
  padding: 6rem 0;
}
</style>
