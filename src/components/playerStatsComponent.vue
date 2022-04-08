<template>
  <div>
    <p style="color:#42b983">{{ this.playerName }}</p>
    <p style="color:#42b983">{{ this.ship.name }}</p>
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
