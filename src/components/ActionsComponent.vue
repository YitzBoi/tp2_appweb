<template>
  <div class="container rounded" id="mainDiv">
    <div class="row">
      <div id="name" class="rounded box-label">
        <p style="color:#fff">Actions</p>
      </div>
    </div>
    <div class="row">
      <button type="button" class="col-3 btn btn-success">
        Combattre
      </button>
      <button type="button" class="col-3 btn btn-success">
        Terminer la mission
      </button>
      <button type="button" class="col-3 btn btn-success">
        Terminer la mission et réparer le vaisseau
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
#mainDiv {
  background-color: rgb(32, 35, 37);
  color: rgb(66, 185, 131);
  padding-bottom: 20px;
}

#name {
  background-color: rgb(0, 171, 34);
  padding-top: 1%;
  margin-bottom: 2%;
}

button {
  padding: 20px;
  margin: auto;
}

p {
  font-size: 20px;
}

.box-label {
  width: 25%;
  margin-left: 2%;
  position: relative;
  top: -20px;
}
</style>
