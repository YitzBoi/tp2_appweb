<template>
  <b-container id="mainDiv">
    <b-row>
      <b-col id="name" class="col-12 rounded">
        <p style="color:#fff">
          Mission en cours
        </p>
      </b-col>
      <b-col class="col-12">
        <p style="color:#42b983" class="col-12">
          {{ this.level }}/{{ this.maxLevel }}
        </p>
      </b-col>
      <b-col class="col-12">
        <p style="color:#42b983" class="col-12">
          Objectif: Survivre à {{ this.maxLevel }} missions en obtenant le plus
          de CG.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      level: 1,
      maxLevel: 5
    }
  },
  async created () {},
  methods: {
    ennemyKilled: function () {
      this.level++
    }
  }
}
</script>

<style lang="css" scoped>
#mainDiv {
  background-color: rgb(32, 35, 37);
  color: rgb(66, 185, 131);
  padding-bottom: 20px;
}

#name {
  background-color: rgb(0, 171, 34);
  padding-top: 1%;
  margin-bottom: 2%;
}

p {
  font-size: 20px;
}
</style>
