<template>
  <div class="container-fluid">
    <div
      id="mainDiv"
      class="w-50 mx-auto border rounded-lg border-success p-5 m-5"
      style="background-color: #202325"
    >
      <h3 class="text-center">{{ this.leaderboardLabel }}</h3>
      <ul class="topBorder">
        <li v-for="score in scores" v-bind:key="score.score">
          {{ score.name }} - {{ score.score }} CG
        </li>
      </ul>
    </div>
    <img
      v-if="isLoading"
      src="@/assets/loadingWaiting.gif"
      alt="Chargement..."
      width="20"
    />
  </div>
</template>

<script>
import { scoresService } from '../services/scoresService.js'
import uiTextPlugin from '../externalization/uiTextPlugin.js'
export default {
  data () {
    return {
      scores: [],
      leaderboardLabel: uiTextPlugin.Leaderboard.LEADERBOARD_LABEL,
      isLoading: uiTextPlugin.Menu.DEFAULT_IS_LOADING
    }
  },
  async created () {
    this.scores = await scoresService.getScores()
    this.isLoading = false
  }
}
</script>

<style lang="css" scoped>
h2 {
  font-size: 40px;
}
ul {
  border-style: solid;
  border-bottom: none;
  border-left: none;
  border-right: none;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 25px;
}
</style>
