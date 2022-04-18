<template>
  <div id="mainDiv" class="container rounded box">
    <div class="row">
      <div id="name" class="rounded box-label">
        <p style="color:#fff">
          {{ this.enemy.name }}
        </p>
      </div>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-6">{{ this.rank }}</p>
      <p style="color:#42b983" class="col-6">{{ this.enemy.credit }} CG</p>
    </div>
    <div class="row">
      <p style="color:#42b983" class="col-12">{{ this.enemy.ship.name }}</p>
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
    currentEnemy: {
      type: Object
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
  watch: {
    doAttack: function () {
      if (this.doAttack === true) {
        this.attack()
      }
    },
    damage: function () {
      if (this.damage !== -1) {
        this.was_attacked(this.damage)
      }
    },
    currentEnemy: function () {
      this.changeEnemy()
    }
  },
  methods: {
    was_attacked: function (damage) {
      if (damage > this.currentHealth) {
        this.currentHealth = 0
        this.$emit('died', false, this.enemy.credit)
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
    },
    changeEnemy: function () {
      this.enemy = this.currentEnemy
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
