<template>
  <b-container id="mainDiv" class="rounded box">
    <b-row>
      <div id="name" class="rounded box-label">
        <p style="color:#fff">
          Mission en cours
        </p>
      </div>
    </b-row>
    <b-row>
      <p style="color:#42b983" class="col-12">
        {{ this.level }}/{{ this.maxLevel }}
      </p>
    </b-row>
    <b-row>
      <p style="color:#42b983" class="col-12">
        Objectif: Survivre à {{ this.maxLevel }} missions en obtenant le plus de
        CG.
      </p>
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

.box-label {
  width: 25%;
  margin-left: 2%;
  position: relative;
  top: -20px;
}
</style>
