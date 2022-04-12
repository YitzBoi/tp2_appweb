<template>
  <div class="container-fluid">
    <b-row>
      <ActionsComponent class="component col-7" />
      <MissionInfosComponent class="component col-3" />
    </b-row>
    <b-row>
      <PlayerStatsComponent class="component col-5" />
      <EnemyStatsComponent class="component col-5" />
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

<style lang="css" scoped>
.component {
  margin-top: 5%;
  margin-right: auto;
  margin-left: auto;
}
</style>
