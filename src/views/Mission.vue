<template>
  <div class="container-fluid">
    <b-row>
      <ActionsComponent class="col-9" />
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
import ActionsComponent from '../components/ActionsComponent.vue'
export default {
  components: {
    PlayerStatsComponent,
    EnemyStatsComponent,
    MissionInfosComponent,
    ActionsComponent
  }
}
</script>

<style lang="css" scoped></style>
