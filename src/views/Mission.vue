<template>
  <div class="container-fluid">
    <b-row>
      <PlayerComponent class="col-6" />
      <EnnemyComponent class="col-6" />
    </b-row>
  </div>
</template>

<script>
import PlayerComponent from '../components/PlayerStatsComponent.vue'
import EnnemyComponent from '../components/EnemyStatsComponent.vue'
export default { components: { PlayerComponent, EnnemyComponent } }
</script>

<style lang="scss" scoped></style>
