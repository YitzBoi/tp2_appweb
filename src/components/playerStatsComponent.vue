<template>
  <div id="mainDiv" class="container-fluid row">
    <p style="color:#42b983" class="col-12">{{ this.playerName }}</p>
    <p style="color:#42b983" class="col-6">{{ this.playerRank }}</p>
    <p style="color:#42b983" class="col-6">{{ this.playerCredit }} CG</p>
    <p style="color:#42b983" class="col-12">{{ this.ship.name }}</p>
    <b-container id="progressbar" class="rounded">
      <b-row>
        <b-progress-bar
          class="rounded bg-success"
          :max="maxHealth"
          :value="currentHealth"
          :label="`${((currentHealth / maxHealth) * 100).toFixed(2)}%`"
        ></b-progress-bar>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerName: this.$route.params.playerName,
      ship: this.$route.params.ship,
      playerRank: 0,
      playerCredit: 0,
      maxHealth: 100,
      currentHealth: 100
    }
  },
  created () {
    this.was_attacked(20)
  },
  methods: {
    was_attacked: function (damage) {
      this.currentHealth -= damage
    }
  }
}
</script>

<style lang="css" scoped>
#mainDiv {
  background-color: rgb(32, 35, 37);
  color: rgb(66, 185, 131);
  border-radius: 20px;
  padding-bottom: 10px;
}
#progressbar {
  background-color: white;
}
</style>
