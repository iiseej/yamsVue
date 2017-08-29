<template>
  <q-layout>
    <div>
        <button
          @click="toggleDrawer"
        >
          <i>menu</i>
        </button>
      </div>
    <sidebar ref="drawer"></sidebar>

    <div v-for="(player, index) in players" >
      <player :index="index"></player>
    </div>
  </q-layout>
</template>

<script>
import Player from './player'
import sidebar from './sidebar'
import { mapGetters } from 'vuex'

export default {
  components: {
    Player, sidebar
  },
  data: {
  },
  computed: {
    ...mapGetters(['players'])
  },
  methods: {
    toggleDrawer () {
      this.$refs.drawer.toggle()
    }
  }
}
</script>

<style lang="stylus">
input
  text-align: center;
  width: 40px;
.player
  display: flex
  flex-direction: column
  height: 100%

.layout-content
  background-size: cover
  background-image: url("~assets/dice3.jpg")
  display: flex
  justify-content: flex-start


.layout
  height: 100 vh
// .layout-footer
//   height: 30px
//   margin-left: 280px
.drawer-content
  z-index: 30;
  position: fixed;
  background: #feeed5;
  top: 0;
  bottom: 0;
  width: 164px;
  font-size: 1rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position, transform;

</style>
