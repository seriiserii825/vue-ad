export default {
  bind (el, bindings) {
    // arg v-color:color, v-color:background
    const arg = bindings.value
    el.classList.add(`grid--${arg}`)

    // возвращает true / false
    const fontModifier = bindings.modifiers.font
    if (fontModifier) {
      el.style.fontSize = '40px'
    }
  },
  inserted () {},
  updated () {},
  componentUpdated () {},
  unbind () {}
}
