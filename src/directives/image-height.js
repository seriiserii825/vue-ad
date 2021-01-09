export default {
  bind (el, bindings) {
    // arg v-color:color, v-color:background
    if (bindings.value) {
      el.style.height = bindings.value
    }
  },
  inserted () {},
  updated () {},
  componentUpdated () {},
  unbind () {}
}
