<template>
  <b-container class="rounded" id="mainDiv">
    <b-row>
      <button type="button" class="col-3 btn btn-success">
        Combattre
      </button>
      <button type="button" class="col-3 btn btn-success">
        Terminer la mission
      </button>
      <button type="button" class="col-3 btn btn-success">
        Terminer la mission et réparer le vaisseau
      </button>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#mainDiv {
  background-color: rgb(32, 35, 37);
  color: rgb(66, 185, 131);
  padding: 2%;
}
button {
  padding: 20px;
  margin: auto;
}
</style>
