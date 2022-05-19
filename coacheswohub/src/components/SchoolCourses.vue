<template>
  <v-row align="center" justify="center" class="fill-height">
    <v-col>
      <p class="blueTec--text text-center text-h4 font-weight-bold justify-center">MATERIAS INSCRITAS</p>
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="10" v-for="index in 6" :key="index">
          <!--          <v-col cols="12" sm="10" v-for="(subject,index) in subjectsList" :key="index">-->
          <v-responsive>
            <v-container>
              <Card
                  :title="subjectsList[0].Titulo"
                  :teacher="subjectsList[0].Profesor"
                  :place="subjectsList[0].Salon"
                  :days="subjectsList[0].Dias"
                  :time= "subjectsList[0].Horario">
                <!--                  Si se agregan más materias desbloquear estás lineas.-->
                <!--                  :title="subject.Titulo"-->
                <!--                  :teacher="subject.Profesor"-->
                <!--                  :place="subject.Salon"-->
                <!--                  :days="subject.Dias"-->
                <!--                  :time="subject.Horario"-->
              </Card>
            </v-container>
          </v-responsive>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/Forms/Card";
import firebase from "firebase";
export default {
  name: "SchoolCourses",
  components:{
    Card,
  },
  data(){
    return{
      subjectsList:[]
    }
  },
  mounted() {
    this.getSubjectsInfo();
  },
  methods: {
    async getSubjectsInfo() {
      await firebase.firestore().collection("Materias").get().then((snapshot) => {
        snapshot.docs.forEach((subject) =>{
          this.subjectsList.push(subject.data());
        });
      });
    }
  }
}
</script>

<style scoped>
</style>