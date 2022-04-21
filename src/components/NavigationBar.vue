<template>
  <nav class="navbar navbar-light" style="background-color: #202325;">
    <router-link style="color:#42b983" v-bind:to="{ name: 'Home' }">{{
      this.homeRouteLabel
    }}</router-link>
    <router-link style="color:#42b983" v-bind:to="{ name: 'Score' }">{{
      this.leaderboardRouteLabel
    }}</router-link>
  </nav>
</template>

<script>
import uiTextPlugin from '../externalization/uiTextPlugin'
export default {
  data () {
    return {
      homeRouteLabel: uiTextPlugin.Nav.HOME_ROUTE_LABEL,
      leaderboardRouteLabel: uiTextPlugin.Nav.LEADERBOARD_ROUTE_LABEL
    }
  }
}
</script>
