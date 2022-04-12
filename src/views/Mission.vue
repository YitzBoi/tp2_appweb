<template>
  <div class="container-fluid">
    <b-row>
      <MissionInfoComponent class="col-3" />
      <PlayerComponent class="col-6" />
      <EnemyComponent class="col-6" />
    </b-row>
  </div>
</template>

<script>
import PlayerComponent from '../components/PlayerStatsComponent.vue'
import EnemyComponent from '../components/EnemyStatsComponent.vue'
import MissionInfoComponent from '../components/MissionInfosComponent.vue'
export default {
  components: { PlayerComponent, EnemyComponent, MissionInfoComponent }
}
</script>

<style lang="scss" scoped></style>
