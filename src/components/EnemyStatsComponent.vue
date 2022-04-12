<template>
  <b-container id="mainDiv" class="rounded box">
    <b-row>
      <div id="name" class="rounded box-label">
        <p style="color:#fff">
          {{ this.enemy.name }}
        </p>
      </div>
    </b-row>
    <b-row>
      <p style="color:#42b983" class="col-6">{{ this.rank }}</p>
      <p style="color:#42b983" class="col-6">{{ this.enemy.credit }} CG</p>
    </b-row>
    <b-row>
      <p style="color:#42b983" class="col-12">{{ this.enemy.ship.name }}</p>
    </b-row>
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
  </b-container>
</template>

<script>
import { enemyService } from '../services/enemyService.js'
export default {
  data () {
    return {
      enemy: {},
      rank: '',
      maxHealth: 100,
      currentHealth: 100
    }
  },
  async created () {
    this.enemy = await enemyService.getRandomCharacter()
    switch (this.enemy.experience) {
      case 1:
        this.rank = 'Beginner'
        break
      case 2:
        this.rank = 'Novice'
        break
      case 3:
        this.rank = 'Experienced'
        break
      case 4:
        this.rank = 'Master'
        break
    }
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

.box-label {
  width: 25%;
  margin-left: 2%;
  position: relative;
  top: -20px;
}
</style>
