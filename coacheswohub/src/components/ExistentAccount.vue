<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <p class="blueTec--text text-center text-h4 font-weight-bold">INICIO DE SESIÓN</p>
        <v-text-field label="Email" :rules="[rules.required, rules.email]" v-model="usuario" outlined></v-text-field>
        <v-text-field :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required,rules.length(8)]"
                      :type="showPass ? 'text' : 'password'"
                      name="input-10-2"
                      hint="At least 8 characters"
                      class="input-group--focused"
                      @click:append="showPass = !showPass" label="Password" v-model="clave" outlined></v-text-field>
        <v-dialog persistent v-model="dialog" width="600">
          <template v-slot:activator="{ dialog, attrs }">
            <v-btn block v-bind="attrs" v-on="dialog" color="blueTec" class="whiteTec--text" @click="signAccount">Iniciar sesión</v-btn>
          </template>
          <!--Cuadro de dialogo-->
          <v-card v-show="dialog">
            <v-card-title class="text-h5 blueTec--text mb-7 font-weight-bold justify-center">Atención</v-card-title>
            <v-card-text>
              <p class="grayTec--text mb-3 text-h6 font-weight-bold text-center">{{ message }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ExistentAccount",
  data () {
    return {
      dialog: false,
      showPass: false,
      message:"",
      usuario:'',
      clave:'',
      rules: {
        required: value => !!value || 'Field Required',
        length: len => v => (v || '').length >= len || `Invalid password length, required ${len}`,
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid Email.';
        },

      },
    }
  },
  methods:{
    signAccount(){
      const profileData={
        user:this.usuario.toString().charAt(0).toUpperCase()+this.usuario.toString().slice(1),
        key:this.clave.toString()
      }
      firebase.auth().signInWithEmailAndPassword(profileData["user"], profileData["key"]).then(()=>{
        this.$router.push('/home');
      })
          .catch(error => {
            if(error.code==="auth/user-not-found"){
              this.message="Correo no identificado";
            }
            else if(error.code==="auth/wrong-password"){
              this.message="Contraseña incorrecta";
            }
            else{
              this.message="Por favor ingrese los datos correctos";
            }
            this.dialog = true;
            //alert(error.code);

          });
    }
  }
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #344FFE;
}
</style>