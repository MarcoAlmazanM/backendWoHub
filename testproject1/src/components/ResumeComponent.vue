<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <p class="blueTec--text text-center text-h4 font-weight-bold">Resumen</p>
        <v-text-field id="Resume" label="Resumen" placeholder="" type="text"  v-model="resume" outlined dense></v-text-field>
        <v-btn block color="blueTec" class="whiteTec--text" @click="updateResume">Actualizar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase"

export default {
  name: "ResumeComponent",
  components: {
  },
  data() {
    return {
      profileInformationHeaderList: [
        'Nombre completo',
        'Matrícula',
        'Correo Institucional',
        'Carrera',
        'Correo Personal',
      ],
      userInfo: [],
      resume: "",
    }
  },
  mounted() {
    let user=this.getUser();
    //let user=result.toString().charAt(0).toUpperCase()+result.slice(1);
    this.getStudentsInfo(user);
  },
  methods: {
    async getStudentsInfo(user) {

      const student = await firebase.firestore().collection("Coaches").doc(user).get();
      this.resume = student.data().resume;

    },
    getUser(){
      //console.log(firebase.auth().currentUser);
      return firebase.auth().currentUser.email;
    },
    async updateResume(){
      var user = this.getUser();

      await firebase.firestore().collection("Coaches").doc(user).update({
        resume: this.resume
      });
    }
  }
}
</script>

<style scoped>

</style>