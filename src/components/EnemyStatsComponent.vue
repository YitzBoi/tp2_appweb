<template>
  <b-container id="mainDiv" class="rounded">
    <b-row>
      <b-col id="name" class="col-12 rounded"
        ><p style="color:#fff">
          {{ this.enemy.name }}
        </p></b-col
      >
      <p style="color:#42b983" class="col-6">{{ this.rank }}</p>
      <p style="color:#42b983" class="col-6">{{ this.enemy.credit }} CG</p>
      <p style="color:#42b983" class="col-12">{{ this.enemy.ship.name }}</p>
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
import { enemyService } from '../services/enemyService.js'
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
      enemy: {
        id: 5188,
        name: 'Ratts Tyerel',
        credit: 95,
        experience: 1,
        ship: { id: 5380, name: 'Solar Sailer', vitality: 85 }
      },
      chance: 0,
      rank: '1',
      maxHealth: 100,
      currentHealth: 100
    }
  },
  async created () {
    this.enemy = await enemyService.getRandomCharacter()
    switch (this.enemy.experience) {
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
    this.currentHealth = this.enemy.ship.vitality
    this.maxHealth = this.enemy.ship.vitality
  },
  watch: {
    doAttack: function () {
      if (this.doAttack === true) {
        this.attack()
      }
    },
    damage: function () {
      if (this.damage !== -1) {
        console.log('en: ' + this.damage)
        this.was_attacked(this.damage)
      }
    }
  },
  methods: {
    was_attacked: function (damage) {
      if (damage > this.currentHealth) {
        this.$emit('died', false)
        this.currentHealth = 0
      } else {
        this.currentHealth -= damage
      }
      this.$emit('reset-vars', false)
    },
    attack: function () {
      if (Math.floor(Math.random() * 101) < this.chance) {
        this.$emit('enemy-attack', 3 + Math.floor(Math.random() * 4))
      } else {
        this.$emit('enemy-attack', 0)
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
</style>
