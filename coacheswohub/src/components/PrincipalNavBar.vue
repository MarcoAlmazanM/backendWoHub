<template>
  <v-app-bar app elevation="0" outlined color="blueTec" >
    <router-link to="/" >
      <v-img max-height="100" max-width="180"
             src="https://firebasestorage.googleapis.com/v0/b/fir-ideentest.appspot.com/o/Perfil%2FlogoTec.png?alt=media&token=4263dc00-eab5-495e-af9d-be5d55ec5593"
             class="mb-2"></v-img>
    </router-link>
    <v-spacer></v-spacer>
    <router-link  to="/" ><p class="whiteTec--text text-body-2 pa-2 mb-1">INICIAR SESIÓN</p></router-link>
    <router-link  to="/register"><p class="whiteTec--text text-body-2 pa-1 mb-1">REGISTRARSE</p></router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "PrincipalNavBar"
}
</script>

<style scoped>

</style>