<template>
  <b-container id="mainDiv" class="rounded box">
    <b-row v-on:attack="attack">
      <div id="name" class="rounded box-label">
        <p style="color:#fff">{{ this.name }}</p>
      </div>
    </b-row>
    <b-row>
      <p style="color:#42b983" class="col-6">{{ this.rank }}</p>
      <p style="color:#42b983" class="col-6">{{ this.credit }} CG</p>
    </b-row>
    <b-row>
      <p style="color:#42b983" class="col-12">{{ this.ship.name }}</p>
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
export default {
  props: {
    doAttack: {
      type: Boolean
    },
    damage: {
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
        console.log('pl: ' + this.damage)
        this.was_attacked(this.damage)
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
      this.$emit('reset-vars', true)
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
