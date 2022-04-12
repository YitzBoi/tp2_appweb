<template>
  <b-container id="mainDiv" class="rounded">
    <b-row>
      <b-col id="name" class="col-12 rounded"
        ><p style="color:#fff">
          {{ this.playerName }}
        </p></b-col
      >
      <p style="color:#42b983" class="col-6">{{ this.playerRank }}</p>
      <p style="color:#42b983" class="col-6">{{ this.playerCredit }} CG</p>
      <p style="color:#42b983" class="col-12">{{ this.ship.name }}</p>
      <b-container
        id="progressbar"
        class="rounded progress-bar-warning progress-bar-striped progress-bar-animated"
      >
        <b-row>
          <b-progress-bar
            class="rounded bg-success progress-bar-striped progress-bar-animated"
            :max="maxHealth"
            :value="currentHealth"
            :label="`${((currentHealth / maxHealth) * 100).toFixed(2)}%`"
          ></b-progress-bar>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
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
</style>
