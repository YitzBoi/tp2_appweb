<template>
  <div id="mainDiv" class="container rounded box">
    <div class="row">
      <div id="name" class="rounded box-label">
        <h2 style="color:#fff">
          Mission en cours
        </h2>
      </div>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-12">
        {{ this.roundNb }}/{{ this.maxRounds }}
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
import uiTextPlugin from '../externalization/uiTextPlugin'
export default {
  props: {
    roundNb: {
      type: Number,
      default: uiTextPlugin.MissionInfos.DEFAULT_ROUND
    }
  },
  data () {
    return {
      maxRounds: uiTextPlugin.MissionInfos.MAX_ROUNDS
    }
  }
}
</script>

<style lang="css" scoped></style>
