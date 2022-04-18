<template>
  <div class="container-fluid">
    <div
      id="mainDiv"
      class="w-50 mx-auto border rounded-lg border-success p-5 m-5"
      style="background-color: #202325"
    >
      <h2 class="text-center">Leaderboard</h2>
      <ul class="topBorder">
        <li v-for="score in scores" v-bind:key="score.score">
          {{ score.name }} - {{ score.score }} CG
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { scoresService } from '../services/scoresService.js'
export default {
  data () {
    return {
      scores: [],
      isLoading: true
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
