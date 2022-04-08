<template>
  <nav class="navbar navbar-light" style="background-color: #202325;">
    <router-link style="color:#42b983" v-bind:to="{ name: 'Home' }"
      >Home</router-link
    >
    <router-link style="color:#42b983" v-bind:to="{ name: 'Score' }"
      >Leaderboard</router-link
    >
  </nav>
</template>

<script>
export default {}
</script>
