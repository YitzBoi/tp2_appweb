<template>
  <div class="container-fluid">
    <b-row>
      <PlayerComponent class="col-6" />
      <EnemyComponent class="col-6" />
    </b-row>
  </div>
</template>

<script>
import PlayerComponent from '../components/PlayerStatsComponent.vue'
import EnemyComponent from '../components/EnemyStatsComponent.vue'
export default { components: { PlayerComponent, EnemyComponent } }
</script>

<style lang="scss" scoped></style>
