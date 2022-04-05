<template>
  <div>
    <select name="ships" id="ships">
      <option v-for="ship in ships" v-bind:key="ship">
        {{ ship.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { shipsService } from '../services/shipsService'
export default {
  props: {
    ships: {
      type: Array,
      default: async () => await shipsService.getShips()
    }
  }
}
</script>

<style lang="scss" scoped></style>
