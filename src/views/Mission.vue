<template>
  <div class="container-fluid">
    <b-row>
      <MissionInfoComponent class="col-3" />
      <PlayerComponent class="col-6" />
      <EnnemyComponent class="col-6" />
    </b-row>
  </div>
</template>

<script>
import PlayerComponent from '../components/PlayerStatsComponent.vue'
import EnnemyComponent from '../components/EnemyStatsComponent.vue'
import MissionInfoComponent from '../components/MissionInfosComponent.vue'
export default {
  components: { PlayerComponent, EnnemyComponent, MissionInfoComponent }
}
</script>

<style lang="scss" scoped></style>
