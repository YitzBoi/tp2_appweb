<template>
  <div class="container-fluid">
    <b-row>
      <ActionsComponent @launch_fight="launch_fight" class="col-9" />
      <MissionInfosComponent v-bind:roundNb="roundNb" class="col-3" />
      <PlayerStatsComponent
        v-bind:doAttack="playerShouldAttack"
        v-bind:damage="damageToPlayer"
        v-bind:reward="enemyCredit"
        @player-attack="attack_enemy"
        @died="aCharacterWasKilled"
        @reset-vars="reset_vars"
        class="col-6"
      />
      <EnemyStatsComponent
        v-bind:currentEnemy="enemy[this.roundNb - 1]"
        v-bind:doAttack="enemyShouldAttack"
        v-bind:damage="damageToEnemy"
        @enemy-attack="attack_player"
        @died="aCharacterWasKilled"
        @reset-vars="reset_vars"
        class="col-6"
      />
    </b-row>
  </div>
</template>

<script>
import PlayerStatsComponent from '../components/PlayerStatsComponent.vue'
import EnemyStatsComponent from '../components/EnemyStatsComponent.vue'
import MissionInfosComponent from '../components/MissionInfosComponent.vue'
import ActionsComponent from '../components/ActionsComponent.vue'
import { enemyService } from '../services/enemyService.js'
export default {
  components: {
    PlayerStatsComponent,
    EnemyStatsComponent,
    MissionInfosComponent,
    ActionsComponent
  },
  data () {
    return {
      enemy: [],
      playerShouldAttack: false,
      enemyShouldAttack: false,
      damageToEnemy: -1,
      damageToPlayer: -1,
      resetP: false,
      resetE: false,
      enemyCredit: -1,
      roundNb: 1
    }
  },
  async created () {
    this.enemy = await enemyService.getRandomCharactersList(5)
  },
  methods: {
    launch_fight () {
      this.enemyShouldAttack = true
      this.playerShouldAttack = true
    },
    attack_enemy (nb) {
      this.damageToEnemy = nb
    },
    attack_player (nb) {
      this.damageToPlayer = nb
    },
    reset_vars (isPlayer) {
      if (isPlayer) {
        this.resetP = true
      } else {
        this.resetE = true
      }
      if (this.resetP && this.resetE) {
        this.enemyShouldAttack = false
        this.playerShouldAttack = false
        this.damageToPlayer = -1
        this.damageToEnemy = -1
        this.resetP = false
        this.resetE = false
      }
    },
    aCharacterWasKilled (isPlayer, money) {
      if (isPlayer) {
        // rest in peperonni mr player
        console.log('enemy wins!')
      } else {
        // pog
        console.log('player wins! MONEY: ' + money)
        this.enemyCredit = money
        this.roundNb++
      }
    }
  }
}
</script>

<style lang="css" scoped>
.component {
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;
}
</style>
