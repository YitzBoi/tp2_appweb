<template>
  <div id="mainDiv" class="container rounded box pb-4">
    <div class="row">
      <div id="name" class="rounded box-label">
        <h3 style="color:#fff">
          {{ this.enemy.name }}
        </h3>
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
import uiTextPlugin from '../externalization/uiTextPlugin'
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
        name: uiTextPlugin.Ship.DEFAULT_NAME,
        credit: 95,
        experience: 1,
        ship: { id: 5380, name: uiTextPlugin.Ship.DEFAULT_NAME, vitality: 100 }
      },
      chance: uiTextPlugin.Ship.DEFAULT_CHANCE,
      rank: uiTextPlugin.Ship.DEFAULT_RANK,
      maxHealth: uiTextPlugin.Ship.DEFAULT_HEALTH,
      currentHealth: uiTextPlugin.Ship.DEFAULT_HEALTH
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
        this.currentHealth -= (this.maxHealth * damage) / 100
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
          this.rank = uiTextPlugin.Rank.RANK_1_NAME
          this.chance = uiTextPlugin.Rank.RANK_1_CHANCE
          break
        case 2:
          this.rank = uiTextPlugin.Rank.RANK_2_NAME
          this.chance = uiTextPlugin.Rank.RANK_2_CHANCE
          break
        case 3:
          this.rank = uiTextPlugin.Rank.RANK_3_NAME
          this.chance = uiTextPlugin.Rank.RANK_3_CHANCE
          break
        case 4:
          this.rank = uiTextPlugin.Rank.RANK_4_NAME
          this.chance = uiTextPlugin.Rank.RANK_4_CHANCE
          break
      }
      this.currentHealth = this.enemy.ship.vitality
      this.maxHealth = this.enemy.ship.vitality
    }
  }
}
</script>

<style lang="css" scoped></style>
