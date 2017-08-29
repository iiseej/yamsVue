<template>

  <q-drawer ref="drawer" swipe-only>
    <div class="list platform-delimiter">
      <div class="list-header">
        {{ title }}
      </div>
      <div class="item two-lines">
        <div class="item-content">
          <i class="on-left">accessibility</i>
          <span class="item-label">Joueurs: </span>
          <i @click="removePlayer">remove</i>
          <i @click="addPlayer">add</i>
        </div>
      </div>
      <span  class="players label bg-primary" v-for="(player, index) in players">
        <i class="on-left text-white">face</i>
        <input v-model="player.name"></input>
        <i @click="deletePlayer(index)" class="text-white">delete </i>
      </span>
    </div>
  </q-drawer>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'sidebar',
  data: () => ({
    title: 'Yams'
  }),
  props: {
  },
  computed: {
    ...mapGetters(['players'])
  },
  methods: {
    ...mapActions(['addPlayer']),
    addPlayer () {
      this.players.push({name: ''})
    },
    removePlayer () {
      this.players.splice(this.players.length - 1, 1)
    },
    deletePlayer (index) {
      this.players.splice(index, 1)
    },
    toggle () {
      this.$refs.drawer.toggle()
    }
  }
}
</script>

<style lang="stylus" scoped>
input
  text-align: center;
  width: 100px;
  color: white
i
  cursor: pointer
.list-header
  text-align: center
  color: #1d4f74
  font-size: 50px
.item-content
  color: #1d4f74
.list
  border: none
.drawer-content
  background-color: red
</style>
