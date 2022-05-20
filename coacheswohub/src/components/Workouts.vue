<template>
  <v-app-bar elevation="0"  color="grayTec" app  clipped-right>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; " to="/allwork"><p class="whiteTec--text text-h6 pa-1 mb-1">All Workouts</p></router-link>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; " to="/editwork"><p class="whiteTec--text text-h6 pa-1 mb-1">Edit Workout</p></router-link>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; " to="/newwork"><p class="whiteTec--text pa-1 mb-1 text-h6">New Workout</p></router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Workouts"
}
</script>

<style scoped>

</style>