<template>
  <div class="container rounded box" id="mainDiv">
    <div class="row">
      <div id="name" class="rounded box-label">
        <h3 style="color:#fff">{{ this.actionsLabel }}</h3>
      </div>
    </div>
    <div class="row align-self-stretch pb-5">
      <div class="col-4">
        <button
          type="button"
          v-on:click="launch_fight()"
          class="btn btn-success w-100 h-100"
          id="launch_fight"
        >
          {{ this.fightButtonLabel }}
        </button>
      </div>
      <div class="col-4">
        <button
          type="button"
          v-on:click="end_mission()"
          class="btn btn-success w-100 h-100"
          id="end_mission"
        >
          {{ this.endFightButtonLabel }}
        </button>
      </div>
      <div class="col-4">
        <button
          type="button"
          v-on:click="repair_ship()"
          class="btn btn-success w-100 h-100"
          id="repair_ship"
        >
          {{ this.endFightAndRepairButtonLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import uiTextPlugin from '../externalization/uiTextPlugin'
export default {
  data () {
    return {
      actionsLabel: uiTextPlugin.Actions.ACTIONS_LABEL,
      fightButtonLabel: uiTextPlugin.Actions.FIGHT_BUTTON_LABEL,
      endFightButtonLabel: uiTextPlugin.Actions.END_FIGHT_BUTTON_LABEL,
      endFightAndRepairButtonLabel:
        uiTextPlugin.Actions.END_FIGHT_AND_REPAIR_BUTTON_LABEL
    }
  },
  methods: {
    launch_fight: function () {
      this.$emit('launch_fight')
    },
    end_mission: function () {
      this.$emit('end_mission')
    },
    repair_ship: function () {
      this.$emit('repair_ship')
    }
  }
}
</script>

<style lang="css" scoped></style>
