<template>
  <div
    class="container mx-auto border rounded-lg border-success p-5 m-5 text-white"
    style="background-color: #e3f2fd"
  >
    <label class="row" style="color:#42b983">Votre nom:</label>
    <input v-model="playerName" type="text" class="row form-control" />

    <label class="row" style="color:#42b983">Votre vaisseau:</label>
    <div>
      <select class="row form-control" v-model="shipName" style="color:#42b983">
        <option
          style="color:#42b983"
          v-for="ship in ships"
          v-bind:key="ship.id"
          v-bind:value="ship.name"
        >
          {{ ship.name }}
        </option>
      </select>
    </div>

    <img
      v-if="isLoading"
      src="@/assets/loadingWaiting.gif"
      alt="Chargement..."
      width="20"
    />

    <router-link
      v-else
      v-bind:to="{
        name: 'Mission', //nom de la route
        params: { playerName: playerName, shipName: shipName }
      }"
      ><button class="btn btn-success m-3">
        Débuter la partie
      </button></router-link
    >
  </div>
</template>

<script>
import { shipsService } from '../services/shipsService.js'
export default {
  data () {
    return {
      playerName: '',
      ships: [],
      shipName: '',
      isLoading: true
    }
  },
  async created () {
    this.ships = await shipsService.getShips()
    this.shipName = this.ships[0].name
    this.isLoading = false
  }
}
</script>

<style lang="scss" scoped></style>
