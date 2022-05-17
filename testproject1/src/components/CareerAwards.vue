<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">

      <v-col cols="6">
        <p class="blueTec--text text-center text-h4 font-weight-bold">CAREER AWARDS</p>
        <p class="blueTec--text text-left text-h5 font-weight-bold">CURRENT LIST</p>
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" v-for="career in careerAwards" :key="career">
            <v-text-field
                :value="career"
                prepend-icon="mdi-delete"
                prepend-inner-icon="mdi-menu"
                type="text"
                :readonly="true"
            ></v-text-field>
          </v-col>
          <v-col cols="10">
            <p class="text-left text-h6 font-weight-bold">Add new info</p>
            <v-text-field label="New Career"  v-model="newCareer" solo></v-text-field>
            <v-btn block color="blueTec" class="whiteTec--text" @click="setCareer" >Save</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import 'firebase/storage';


export default {
  name: "CareerAwards",
  data (){
    return {
      careerAwards:[],
      newCareer:''
    }
  },
  mounted(){
    let user = this.getUser()
    this.getCareerAwards(user);
  },
  methods:{
    async getCareerAwards(user){
      this.coach = await firebase.firestore().collection("Coaches").doc(user.email).get();
      this.careerAwards = this.coach.data().career;

    },
    async setCareer(){
      this.careerAwards.push(this.newCareer.toString());
      await firebase.firestore().collection("Coaches").doc(this.getUser().email).update({
        career:this.careerAwards
      });
    },
    getUser(){
      return firebase.auth().currentUser;

    }
  }
}
</script>

<style scoped>

</style>