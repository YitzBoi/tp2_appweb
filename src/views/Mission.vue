<template>
  <div>
    <b-row>
      <ActionsComponent />
    </b-row>
    <b-row>
      <PlayerStatsComponent />
    </b-row>
  </div>
</template>

<script>
import PlayerStatsComponent from '../components/playerStatsComponent.vue'
import ActionsComponent from '../components/ActionsComponent.vue'

export default { components: { PlayerStatsComponent, ActionsComponent } }
</script>

<style lang="css" scoped></style>
