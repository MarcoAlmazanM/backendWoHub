<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <p class="blueTec--text text-center text-h4 font-weight-bold">Crea una Cuenta</p>
        <v-text-field label="Nombre Completo" placeholder="Nombre Completo" type="text"  v-model="name" outlined dense></v-text-field>
        <v-text-field label="Email" placeholder="ejemplo@wohub.com" type="text"  v-model="email" outlined dense></v-text-field>
        <v-text-field label="Teléfono" placeholder="5512345678" type="text"  v-model="phone" outlined dense></v-text-field>
        <v-text-field label="Contraseña" placeholder="********"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPass ? 'text' : 'password'"
                      name="input-pass"
                      class="input-group--focused"
                      @click:append="showPass = !showPass" v-model="password" outlined dense></v-text-field>
        <v-text-field label="Confirmar contraseña" placeholder="********"
                      :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showConfirm ? 'text' : 'password'"
                      name="input-pass2"
                      @click:append="showConfirm = !showConfirm" v-model="passwordconfirm" outlined dense></v-text-field>
        <v-checkbox class="align-center justify-center" v-model="checkbox1" :label="'Políticas de Privacidad'"></v-checkbox>
        <v-checkbox class="align-center justify-center" v-model="checkbox2" :label="'Términos & Condiciones'"></v-checkbox>
        <v-checkbox class="align-center justify-center" v-model="checkbox3" :label="'Código de Conducta'"></v-checkbox>
        <v-btn :disabled="!checkbox1 || !checkbox2 || !checkbox3" block color="blueTec" class="whiteTec--text" @click="registerAccount">Crear Cuenta</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import 'firebase/storage'
//import {db} from "@/main";
//import app from "@/plugins/firebaseConfig.js";
//import {db} from "@/plugins/firebaseConfig.js";
//import {db} from "@/plugins/firebaseConfig.js";
export default {
  name: "NewAccount",
  data(){
    return{
      checkbox1:false,
      checkbox2:false,
      checkbox3:false,
      showPass: false,
      showConfirm:false,
      name:'',
      email:'',
      phone:'',
      password:'',
      passwordconfirm:''

    }
  },
  methods:{
    registerAccount() {
      const users={
        email: this.email.toString(),
        password: this.password.toString()
      }
      const account = {
        email: this.email.toString(),
        name: this.name.toString(),
        phone: this.phone.toString()
      }
      //registra la informacion
      firebase.auth().createUserWithEmailAndPassword(users["email"], users["password"])
          .then(() => {
            //alert('Registro hecho');
            firebase.firestore().collection('Users').doc(account["email"]).set(account).then(()=>{
              this.$router.push('/home');
            });
          })
    },
  },
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #344FFE;
}
</style>