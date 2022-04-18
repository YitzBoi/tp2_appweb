<template>
  <div id="mainDiv" class="container rounded box">
    <div class="row">
      <div id="name" class="rounded box-label">
        <p style="color:#fff">
          Mission en cours
        </p>
      </div>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-12">
        {{ this.roundNb }}/{{ this.maxLevel }}
      </p>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-12">
        Objectif: Survivre à {{ this.maxLevel }} missions en obtenant le plus de
        CG.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roundNb: {
      type: Number
    }
  },
  data () {
    return {
      maxLevel: 5
    }
  }
}
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
