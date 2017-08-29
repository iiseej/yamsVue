<template>
    <div class="player" >
      <big class="name">{{ players[index].name }}</big>

      <!-- haut -->
      <div v-for="(category, index) in score.haut" class="row">
        <!-- <p> {{ player.name }} </p> -->
        <small :class="'cat' + ' ' +  category.name">
        {{ category.name }}
        </small>
        <input v-on:keyup="totalHaut(), grandTotal(), setColor " :class="'circular label' + category.name " v-model.native.number="category.value" :style="{'background-color': category.color}" type="number"></input>
      </div>

      <!-- difference -->
      <div v-for="(category, index) in score.difference" class="row">
        <!-- <p> {{ player.name }} </p> -->
        <small :class="'cat' + ' ' +  category.name">
        {{ category.name }}
        </small>
        <input v-on:keyup="diff(), totalBAs(), grandTotal(), setColor " :class="'circular label' + category.name " v-model.native.number="category.value" :style="{'background-color': category.color}" type="number"></input>
      </div>

      <!-- suites -->
      <div v-for="(category, index) in score.suites" class="row">
        <!-- <p> {{ player.name }} </p> -->
        <small :class="'cat' + ' ' +  category.name">
        {{ category.name }}
        </small>
        <input v-on:keyup="totalSuite(), grandTotal(), setColor " :class="'circular label' + category.name " v-model.native.number="category.value" :style="{'background-color': category.color}" type="number"></input>
      </div>

      <!-- bas -->
      <div v-for="(category, index) in score.bas" class="row">
        <!-- <p> {{ player.name }} </p> -->
        <small :class="'cat' + ' ' +  category.name">
        {{ category.name }}
        </small>
        <input v-on:keyup="totalBAs(), grandTotal(), setColor" :class="'circular label' + category.name " v-model.native.number="category.value" :style="{'background-color': category.color}" type="number"></input>
      </div>

      <span class="token" :style="{'background-color': color}">{{ total.value }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'player',
  props: {
    index: Number
  },
  data: () => ({
    color: null,
    total: {
      value: 0
    },
    score: {
      haut: [
        {
          name: 'Les As',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Les 2',
          value: null,
          color: 'transparent'

        },
        {
          name: 'Les 3',
          value: null,
          color: 'transparent'

        },
        {
          name: 'Les 4',
          value: null,
          color: 'transparent'

        },
        {
          name: 'Les 5',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Les 6',
          value: null,
          color: 'transparent'

        },
        {
          name: 'Total Haut',
          value: 0,
          color: '#1d4f74'
        }],
      difference: [
        {
          name: 'Le petit',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Le grand',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Total différence',
          value: 0,
          color: '#1d4f74'
        }],
      suites: [
        {
          name: 'Petite suite',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Grande suite',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Total suites',
          value: 0,
          color: '#1d4f74'
        }],
      bas: [
        {
          name: 'Brelan',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Full',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Carré',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Yams',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Bonus Yams',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Yams sec',
          value: null,
          color: 'transparent'
        },
        {
          name: 'Total bas',
          value: 0,
          color: '#1d4f74'
        }
      ]
    }
  }),
  computed: {
    ...mapGetters(['players']),
    setColor () {
      this.color = 'hsl(' + Math.round(this.total.value / 4.8) + ', 100%, 50%)'
    }
  },
  methods: {
    totalHaut () {
      this.score.haut[6].value = 0
      for (let i = 0; i < 6; i += 1) {
        this.score.haut[6].value += this.score.haut[i].value
      }
      if (this.score.haut[6].value >= 63) {
        this.score.haut[6].value += 50
        this.score.haut[6].color = '#1d742e'
      }
      else {
        this.score.haut[6].color = '#1d4f74'
      }
    },
    diff () {
      if (this.score.difference[0].value === null || this.score.difference[1].value === null) {
        this.score.difference[2].value = 0
      }
      else if (this.score.difference[1].value < this.score.difference[0].value) {
        this.score.difference[2].value = 0
        this.score.difference[2].color = 'red'
      }
      else {
        this.score.difference[2].value = this.score.difference[1].value - this.score.difference[0].value + 20
        this.score.difference[2].color = '#1d742e'
      }
    },
    totalSuite () {
      if (this.score.suites[0].value === 30 && this.score.suites[1].value === 40) {
        this.score.suites[2].value = this.score.suites[0].value + this.score.suites[1].value + 30
        this.score.suites[2].color = '#1d742e'
      }
      else {
        this.score.suites[2].value = this.score.suites[0].value + this.score.suites[1].value
      }
    },
    totalBAs () {
      this.score.bas[6].value = 0
      for (let i = 0; i < 6; i += 1) {
        this.score.bas[6].value += this.score.bas[i].value
      }
    },
    grandTotal () {
      this.total.value = this.score.haut[6].value + this.score.difference[2].value + this.score.suites[2].value + this.score.bas[6].value
    }
    // endOfGame () {
    //   if (!this.haut.some(elem => elem.value === null) && !this.bas.some(elem => elem.value === null)) {
    //     alert('partie finie')
    //   }
    // }
  }
}
</script>

<style lang="stylus" scoped>
.label
  font-weight: bold
  font-size: 20px
.player
  display: flex
  flex-direction: column
  margin-right: 50px
  margin-left: 50px
  width: 150px
  height: 100%

.chip
  width: 120px
  height: 50px
  font-size: 12px
  font-weight: regular
.token
  text-align: center
  margin-bottom: 2px
  font-weight: bold
  font-size: 20px
  margin-top: 2px
  border-radius: 5px

.row
  background-color: rgba(#feeed5, 0.54)
  color: black
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 5px 0 5px

.name
  text-align: center
  background-color: rgba(#feeed5, 0.54)

.Total
  font-weight: bold

.labelTotal
  font-weight: bold
  color: white
  background-color: #1d4f74
  border-radius: 5px
  font-size: 20px


.label0, .label1, .label2, .label3, .label4, .label5, .label7, .label8, .label10, .label11, .label13, .label14, .label15, .label16, .label17, .label18
  color: #1d4f74
  font-size: 20px
  border-radius: 5px

input:focus
  border: none;
  color: transparent;
  display: inline-block;
  font-size: 2em;
  text-shadow: 0 0 0 #1d4f74;
  width: 2em;

</style>
