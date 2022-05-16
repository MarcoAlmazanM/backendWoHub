<template>
  <div>
    <v-app-bar elevation="0" outlined color="grayTec" bottom>
      <router-link v-if="!log" to="/" >
        <v-img max-height="100" max-width="180"
               src="https://firebasestorage.googleapis.com/v0/b/fir-ideentest.appspot.com/o/Perfil%2FlogoTec.png?alt=media&token=4263dc00-eab5-495e-af9d-be5d55ec5593"
               class="mb-2"></v-img>
      </router-link>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Settings"
}
</script>

<style scoped>

</style>