<template>
  <div
    class="container mx-auto border rounded-lg border-success p-5 m-5 text-white"
    style="background-color: #202325"
  >
    <label class="row" style="color:#42b983">{{ this.nameLabel }}</label>
    <input
      v-model="playerName"
      type="text"
      style="color:#42b983; background-color: #141414"
      class="mb-5 row form-control border-success"
    />

    <label class="row" style="color:#42b983">{{ this.shipLabel }}</label>
    <div>
      <select
        class="mb-5 row form-control border-success"
        v-model="ship"
        style="color:#42b983; background-color: #141414"
      >
        <option
          style="color:#42b983; background-color: #141414"
          v-for="ship in ships"
          v-bind:key="ship.id"
          v-bind:value="ship"
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

    <button @click="sendToMission()" v-else class="btn btn-success m-3">
      {{ this.startButtonLabel }}
    </button>
  </div>
</template>

<script>
import { shipsService } from '../services/shipsService.js'
import uiTextPlugin from '../externalization/uiTextPlugin.js'
export default {
  data () {
    return {
      playerName: '',
      ships: [],
      ship: {},
      isLoading: uiTextPlugin.Menu.DEFAULT_IS_LOADING,
      nameLabel: uiTextPlugin.Menu.NAME_LABEL,
      shipLabel: uiTextPlugin.Menu.SHIP_LABEL,
      startButtonLabel: uiTextPlugin.Menu.START_BUTTON_LABEL
    }
  },
  methods: {
    sendToMission () {
      this.$router.push({
        name: 'Mission',
        params: { playerName: this.playerName, ship: this.ship }
      })
    }
  },
  async created () {
    try {
      this.ships = await shipsService.getShips()
      this.ship = this.ships[0]
      this.isLoading = false
    } catch (error) {
      await this.$bvModal.msgBoxOk(
        'Une erreur est survenue, contactez un administrateur si elle persiste.',
        {
          okTitle: 'Ok',
          bodyBgVariant: 'dark',
          bodyTextVariant: 'success',
          footerBgVariant: 'dark',
          okVariant: 'success'
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
