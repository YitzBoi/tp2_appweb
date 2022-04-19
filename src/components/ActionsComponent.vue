<template>
  <div class="container rounded box" id="mainDiv">
    <div class="row">
      <div id="name" class="rounded box-label">
        <p style="color:#fff">Actions</p>
      </div>
    </div>
    <div class="row align-self-stretch pb-5">
      <div class="col-4">
        <button
          type="button"
          v-on:click="launch_fight()"
          class="btn btn-success w-100 h-100"
          id="launch_fight"
        >
          Combattre
        </button>
      </div>
      <div class="col-4">
        <button
          type="button"
          v-on:click="end_mission()"
          class="btn btn-success w-100 h-100"
          id="end_mission"
        >
          Terminer la mission
        </button>
      </div>
      <div class="col-4">
        <button
          type="button"
          v-on:click="repair_ship()"
          class="btn btn-success w-100 h-100"
          id="repair_ship"
        >
          Terminer la mission et réparer le vaisseau
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    launch_fight: function () {
      this.$emit('launch_fight')
    },
    end_mission: function () {
      this.$emit('end_mission')
    },
    repair_ship: function () {
      this.$emit('repair_ship')
    }
  }
}
</script>

<style lang="css" scoped></style>
