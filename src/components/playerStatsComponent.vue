<template>
  <div id="mainDiv" class="container-fluid row">
    <p style="color:#42b983" class="col-12">{{ this.playerName }}</p>
    <p style="color:#42b983" class="col-6">{{ this.playerRank }}</p>
    <p style="color:#42b983" class="col-6">{{ this.playerCredit }} CG</p>
    <p style="color:#42b983" class="col-12">{{ this.ship.name }}</p>
    <div class="progress col-12">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        :style="{ width: (currentHealth * 100) / maxHealth + '%' }"
        :aria-valuenow="(currentHealth * 100) / maxHealth"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ (currentHealth * 100) / maxHealth }}%
      </div>
    </div>
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
.healthBar {
}
</style>
