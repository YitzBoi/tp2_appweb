<template>
  <div
    class="container mx-auto border rounded-lg border-warning p-5 m-5 bg-info text-white"
  >
    <label for="playerName" class="row">Votre nom:</label>
    <input id="playerName" type="text" class="row form-control" />

    <label for="ships" class="row">Votre vaisseau:</label>
    <MenuComponentList />

    <button class="btn btn-success m-3">Débuter la partie</button>
  </div>
</template>

<script>
import MenuComponentList from './menuComponentList.vue'
export default { components: { MenuComponentList } }
</script>

<style lang="scss" scoped></style>
