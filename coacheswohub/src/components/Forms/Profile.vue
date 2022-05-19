<template>
  <v-col  justify="center" justify-md="start">
    <p class="blueTec--text text-md-start text-center text-h6">{{ title }}</p>
    <p class="grayTec--text text-md-start  text-center text-h6">{{ info }}</p>
  </v-col>
</template>

<script>
export default {
  name: "Profile",
  props:{
    title:String,
    info:String,
  }
}
</script>

<style scoped>

</style>