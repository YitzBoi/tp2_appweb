<template>
  <div id="mainDiv" class="container rounded box pb-4">
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
          id="prog-bar"
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
    was_attacked (damage) {
      if (damage > this.currentHealth) {
        this.$emit('died', true)
        this.currentHealth = 0
      } else {
        this.currentHealth -= (this.maxHealth * damage) / 100
      }
    },
    attack () {
      if (Math.floor(Math.random() * 101) < this.chance) {
        this.$emit('player-attack', 3 + Math.floor(Math.random() * 4))
      } else {
        this.$emit('player-attack', 0)
      }
    },
    async repair () {
      const calculatedCost = (this.maxHealth - this.currentHealth) * 5
      if (this.currentHealth > 0 && this.currentHealth < this.maxHealth) {
        if (this.credit >= calculatedCost) {
          this.credit -= calculatedCost
          this.currentHealth = this.maxHealth
          this.$emit('end_mission')
        } else {
          this.$bvModal.msgBoxOk(
            "Vous n'avez pas assez de CG pour réparer votre vaisseau.",
            {
              okTitle: 'Ok',
              bodyBgVariant: 'dark',
              bodyTextVariant: 'success',
              footerBgVariant: 'dark',
              okVariant: 'success'
            }
          )
        }
      } else {
        this.$bvModal.msgBoxOk("Votre vaisseau n'est pas endommagé!", {
          okTitle: 'Ok',
          bodyBgVariant: 'dark',
          bodyTextVariant: 'success',
          footerBgVariant: 'dark',
          okVariant: 'success'
        })
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
