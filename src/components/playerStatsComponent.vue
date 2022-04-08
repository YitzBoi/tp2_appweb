<template>
  <div>
    <p>{{ this.playerName }}</p>
    <p>{{ this.ship.name }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerName: this.$route.params.playerName,
      ship: this.$route.params.ship
    }
  }
}
</script>

<style lang="scss" scoped></style>
