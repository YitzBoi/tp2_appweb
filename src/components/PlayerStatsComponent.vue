<template>
  <div id="mainDiv" class="container rounded box">
    <div class="row" v-on:attack="attack">
      <div id="name" class="rounded box-label">
        <p id="nameText" style="color:#fff">{{ this.name }}</p>
      </div>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-6">{{ this.rank }}</p>
      <p style="color:#42b983" class="col-6">{{ this.credit }} CG</p>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-12">{{ this.ship.name }}</p>
    </div>
    <div
      id="progressbar"
      class="container rounded progress-bar-warning progress-bar-striped progress-bar-animated"
    >
      <div class="row">
        <b-progress-bar
          class="rounded bg-success progress-bar-striped progress-bar-animated"
          :max="maxHealth"
          :value="currentHealth"
          :label="`${((currentHealth / maxHealth) * 100).toFixed(2)}%`"
        ></b-progress-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    doAttack: {
      type: Boolean
    },
    damage: {
      type: Number
    },
    reward: {
      type: Number
    }
  },
  data () {
    return {
      name: this.$route.params.playerName,
      ship: this.$route.params.ship,
      experience: 4,
      rank: '',
      credit: 0,
      maxHealth: 100,
      currentHealth: 100,
      chance: 0
    }
  },
  created () {
    switch (this.experience) {
      case 1:
        this.rank = 'Beginner'
        this.chance = 20
        break
      case 2:
        this.rank = 'Novice'
        this.chance = 35
        break
      case 3:
        this.rank = 'Experienced'
        this.chance = 50
        break
      case 4:
        this.rank = 'Master'
        this.chance = 70
        break
    }
  },
  watch: {
    doAttack: function () {
      if (this.doAttack === true) {
        this.attack()
      }
    },
    damage: function () {
      if (this.damage !== -1) {
        this.was_attacked(this.damage)
        this.$emit('reset-vars', true)
      }
    },
    reward: function () {
      if (this.reward !== -1) {
        console.log('money')
        this.credit += this.reward
      }
    }
  },
  methods: {
    was_attacked: function (damage) {
      if (damage > this.currentHealth) {
        this.$emit('died', true)
        this.currentHealth = 0
      } else {
        this.currentHealth -= damage
      }
    },
    attack: function () {
      if (Math.floor(Math.random() * 101) < this.chance) {
        this.$emit('player-attack', 3 + Math.floor(Math.random() * 4))
      } else {
        this.$emit('player-attack', 0)
      }
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
