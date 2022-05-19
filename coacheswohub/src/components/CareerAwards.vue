<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">

      <v-col cols="6">
        <p class="blueTec--text text-center text-h4 font-weight-bold">CAREER AWARDS</p>
        <p class="blueTec--text text-left text-h5 font-weight-bold">CURRENT LIST</p>
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" v-for="(career,index) in careerAwards" :key="index">

            <v-text-field
                :id="index.toString()"
                type="text"
                :value="career"
                readonly
                prepend-icon="mdi-delete"
                prepend-inner-icon="mdi-menu"
                :append-icon="showAppendIcon[index] ? 'mdi-check':''"
                @click:prepend="deleteCareerAward(index)"
                @click:prepend-inner = "enableInput(index)"
                @click:append = "saveCareerAward(index)"
            >
            </v-text-field>
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
      newCareer:'',
      showAppendIcon:[],
      careerInput:null
    }
  },
  mounted(){
    let user = this.getUser();
    this.getCareerAwards(user);
  },
  methods:{
    async getCareerAwards(user){
      this.coach = await firebase.firestore().collection("Coaches").doc(user.email).get();
      this.careerAwards = this.coach.data().career;
      for (let i=0; i< this.careerAwards.length; i++){
        this.showAppendIcon.push(false);
      }

    },
    async updateCareerAwards(){
      await firebase.firestore().collection("Coaches").doc(this.getUser().email).update({
        career:this.careerAwards
      });
    },
    setCareer(){
      this.careerAwards.push(this.newCareer.toString());
      this.updateCareerAwards();
    },
    getUser(){
      return firebase.auth().currentUser;
    },
    deleteCareerAward(index){
      this.careerAwards.splice(index,1);
      this.updateCareerAwards();
    },
    enableInput(index){
      this.careerInput = document.getElementById(index.toString())
      this.careerInput.removeAttribute('readonly');
      this.showAppendIcon.splice(index,1,true);
    },
    saveCareerAward(index){
      this.careerAwards.splice(index,1, this.careerInput.value);
      this.careerInput.setAttribute('readonly','true');
      this.showAppendIcon.splice(index,1,false);
      console.log(this.careerAwards);
      this.updateCareerAwards();
    }
  }
}
</script>

<style scoped>

</style>