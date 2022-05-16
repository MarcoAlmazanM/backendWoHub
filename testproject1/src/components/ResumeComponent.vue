<template>
  <v-row  align="center" justify="center" >
    <v-col cols="12" md="6">
      <p class="blueTec--text text-center text-h4 font-weight-bold">INFORMACIÓN DEL ALUMNO</p>
      <div class="text-center">
        <v-avatar class="rounded-circle mb-5" size="164">
          <v-img src="https://firebasestorage.googleapis.com/v0/b/fir-ideentest.appspot.com/o/Perfil%2Fbond.jpeg?alt=media&token=02bc0f1d-82b8-468b-bb75-52b78e1d5d3d"></v-img>
        </v-avatar>
      </div>
      <v-row align="center" justify="center" justify-md="start" >
        <v-col  cols="12" md="4" sm="10" class="pa-md-2 mb-1" offset-md="2" offset-sm="2"  v-for="(label, index) in profileInformationHeaderList" :key="index">
          <Profile :title="label" :info="userInfo[index]"></Profile>
        </v-col>
      </v-row>

    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase"
import Profile from "@/components/Forms/Profile";

export default {
  name: "ResumeComponent",
  components: {
    Profile,
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
      userInfo: []
    }
  },
  mounted() {
    let user=this.getUser();
    //let user=result.toString().charAt(0).toUpperCase()+result.slice(1);
    this.getStudentsInfo(user);
  },
  methods: {
    async getStudentsInfo(user) {

      const student = await firebase.firestore().collection("users").doc(user.uid).get();
      const carrera="ITC"
      this.userInfo.push(student.data().name);
      this.userInfo.push(student.data().id);
      this.userInfo.push(user.email);
      //this.userInfo.push(student.data().Carrera);
      this.userInfo.push(carrera);
      this.userInfo.push(student.data().personal);
    },
    getUser(){
      //console.log(firebase.auth().currentUser);
      return firebase.auth().currentUser;
    }
  }
}
</script>

<style scoped>

</style>