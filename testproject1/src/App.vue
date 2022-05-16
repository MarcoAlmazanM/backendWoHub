<!--
Ángel Nolasco Serrano A01365726
Marco Antonio Almazán Martínez A01769046
 -->
<template>
  <!--<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <button @click="logout">Logout</button>
    </div>
    <router-view />
  </div>-->
  <v-app>
    <v-app-bar app elevation="0" outlined color="blueTec">
      <router-link v-if="!log" to="/" >
        <v-img max-height="100" max-width="180"
               src="https://firebasestorage.googleapis.com/v0/b/fir-ideentest.appspot.com/o/Perfil%2FlogoTec.png?alt=media&token=4263dc00-eab5-495e-af9d-be5d55ec5593"
               class="mb-2"></v-img>
      </router-link>
      <router-link v-if="log" to="/home" >
        <v-img max-height="100" max-width="180"
               src="https://firebasestorage.googleapis.com/v0/b/fir-ideentest.appspot.com/o/Perfil%2FlogoTec.png?alt=media&token=4263dc00-eab5-495e-af9d-be5d55ec5593"
               class="mb-2"></v-img>
      </router-link>

      <v-spacer></v-spacer>
      <router-link v-if="!log" to="/" ><p class="whiteTec--text text-body-2 pa-2 mb-1">INICIAR SESIÓN</p></router-link>
      <router-link v-if="!log" to="/register"><p class="whiteTec--text text-body-2 pa-1 mb-1">REGISTRARSE</p></router-link>
      <router-link v-if="log" to="/home"><p class="whiteTec--text text-body-2 pa-2 mb-1">INFORMACIÓN DEL ALUMNO</p></router-link>
      <router-link v-if="log" to="/submenu"><p class="whiteTec--text text-body-2 pa-1 mb-1">SETTINGS</p></router-link>
      <v-img v-if="log" @click="logout" max-height="30" max-width="30"
             src="https://firebasestorage.googleapis.com/v0/b/fir-ideentest.appspot.com/o/Perfil%2Flogout-variant.svg?alt=media&token=af4d2ed3-65f7-4285-bf4e-de0a66549613"
             class="mb-2 outPage pa-1 mb-1"></v-img>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div>
          <router-view></router-view>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase';
export default {
  data(){
    return {
      log: false,
    }
  },
  mounted(){
    this.getUser()
  },
  methods: {
    logout() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            //alert('Sesion cerrada');
            this.$router.push('/');
          })
          .catch(() => {
            //alert(error.message);
            this.$router.push('/');
          });
    },
    async getUser(){
      //console.log(firebase.auth().currentUser);
      //const user=firebase.auth().currentUser;
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.log=true;
          return this.log;
        }else{
          this.log=false
          return this.log;
        }
      });
    }
  },
};
</script>
<style>
.outPage{

  filter: invert(100%);
}
</style>

