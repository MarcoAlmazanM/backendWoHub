<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <p class="blueTec--text text-center text-h4 font-weight-bold">CREA UNA CUENTA</p>
        <v-text-field label="Nombre completo" placeholder="Escribe tu nombre completo" type="text" :rules="[rules.required]" v-model="nombre" outlined dense></v-text-field>
        <v-text-field label="Matrícula" placeholder="Escribe tu matrícula" type="text" :rules="[rules.required]" v-model="matricula" outlined dense></v-text-field>
        <v-text-field label="Correo Institucional" placeholder="Escribe tu correo institucional" type="text" :rules="[rules.required,emailRules.format]" v-model="correo" outlined dense></v-text-field>
        <v-text-field label="Correo Personal" placeholder="Escribe tu correo" type="text" :rules="[rules.required, emailRules.format]" v-model="correoP" outlined dense></v-text-field>
        <v-text-field label="Contraseña" placeholder="Escribe tu contraseña"
                      :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="showPass ? 'text' : 'password'"
                      name="input-pass"
                      hint="Al menos 6 caractéres"
                      class="input-group--focused"
                      @click:append="showPass = !showPass" v-model="clave" outlined dense></v-text-field>
        <v-text-field label="Confirmar contraseña" placeholder="Vuelve a escribir tu contraseña"
                      :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min, passwordConfirmationRule]"
                      :type="showConfirm ? 'text' : 'password'"
                      name="input-pass2"
                      hint="Al menos 6 caractéres"  @click:append="showConfirm = !showConfirm" v-model="copia" outlined dense></v-text-field>
        <v-checkbox class="align-center justify-center" v-model="checkbox" :label="'Acepto los términos y condiciones'"></v-checkbox>
        <v-btn :disabled="!checkbox" block color="blueTec" class="whiteTec--text" @click="registerAccount">Registrarse</v-btn>
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
      checkbox:false,
      dialog: false,
      showPass: false,
      showConfirm:false,
      nombre:'',
      matricula:'',
      correo:'',
      correoP:'',
      clave:'',
      copia:'',
      rules: {
        required: value => !!value || 'Valor requerido.',
        min: v => v.length >= 6 || 'Min 6 caractéres',

        //emailMatch: () => (`The email and password you entered don't match`),
      },
      emailRules: {
        format: v => /.+@.+/.test(v) || "El formato debe de ser válido"
      },
    }
  },
  computed:{
    passwordConfirmationRule(){
      return (this.clave===this.copia || "Las contraseñas no coinciden")
    }
  },
  methods:{
    registerAccount() {
      const users={
        email: this.correo.toString().charAt(0).toUpperCase()+this.correo.toString().slice(1),
        key: this.clave.toString(),
      }
      const account = {
        name: this.nombre.toString(),
        id: this.matricula.toString(),
        personal: this.correoP.toString(),
      }
      //registra la informacion
      firebase.auth().createUserWithEmailAndPassword(users["email"], users["key"])
          .then(() => {
            //alert('Registro hecho');
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(account).then(()=>{
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