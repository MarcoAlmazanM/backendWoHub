<template>
  <v-toolbar app elevation="0"  color="grayTec" >
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; " to="/personal"><p class="whiteTec--text text-h6 pa-1 mb-1">Personal Info</p></router-link>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; " to="/"><p class="whiteTec--text text-h6 pa-1 mb-1">Career Awards</p></router-link>
    <v-spacer></v-spacer>
    <router-link style="text-decoration: none; " to="/resume"><p class="whiteTec--text pa-1 mb-1 text-h6">Resume</p></router-link>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>

</style>