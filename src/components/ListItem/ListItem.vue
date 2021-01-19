<template>
  <li class="list__item">
    <span onClick={() => onToggleDone(id)} className="list__item-title">{title}</span><span className="close" onClick={() => onRemoveItem(id)}>x</span>
  </li>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
