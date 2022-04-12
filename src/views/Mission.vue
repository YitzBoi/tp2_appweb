<template>
  <div class="container-fluid">
    <b-row>
      <MissionInfosComponent class="col-3" />
      <PlayerStatsComponent class="col-6" />
      <EnemyStatsComponent class="col-6" />
    </b-row>
  </div>
</template>

<script>
import PlayerStatsComponent from '../components/PlayerStatsComponent.vue'
import EnemyStatsComponent from '../components/EnemyStatsComponent.vue'
import MissionInfosComponent from '../components/MissionInfosComponent.vue'
export default {
  components: {
    PlayerStatsComponent,
    EnemyStatsComponent,
    MissionInfosComponent
  }
}
</script>

<style lang="scss" scoped></style>
