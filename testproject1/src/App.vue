<!--
Marco Antonio Almazán Martínez A01769046
 -->
<template>
  <v-app>

    <PrincipalNavBar v-if="!log"></PrincipalNavBar>
    <Settings v-if="this.$route.path == '/careerawards' || this.$route.path == '/personal'|| this.$route.path == '/resume'"></Settings>

    <v-navigation-drawer permanent app color="blueTec" v-if="log">
      <v-list dense>
      <v-header class="whiteTec--text text-h6 pa-16 ma-5">MENU</v-header>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="whiteTec--text">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link  to="/home" style="text-decoration: none; "><v-list-item-title class="whiteTec--text text-body-1 ">Home</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item >
          <v-list-item-icon>
            <v-icon class="whiteTec--text">mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link  to="/careerawards" style="text-decoration: none; "><v-list-item-title class="whiteTec--text text-body-1 ">Settings</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon class="whiteTec--text">mdi-login-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="whiteTec--text text-body-1 ">Sign Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-main class="mt-5">
      <v-container fluid >
        <router-view></router-view>
      </v-container>
    </v-main>


  </v-app>



</template>

<script>
import firebase from 'firebase';
import Settings from "./components/Settings";
import PrincipalNavBar from "./components/PrincipalNavBar";


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
      firebase.auth().signOut().then(() => {
            this.$router.push('/');
          })
          .catch(() => {
            this.$router.push('/');
          });
    },
    async getUser(){
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

  components: {
    PrincipalNavBar,
    Settings

  }
};
</script>
<style>
.outPage{

  filter: invert(100%);
}
</style>

