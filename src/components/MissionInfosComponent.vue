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

<style lang="css" scoped></style>
