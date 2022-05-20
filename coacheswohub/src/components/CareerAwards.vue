<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="6">
        <p class="blueTec--text text-center text-h4 font-weight-bold">CAREER AWARDS</p>
        <p class="blueTec--text text-left text-h5 font-weight-bold">CURRENT LIST</p>
        <v-row align="center" justify="center" class="fill-height">
              <v-col cols="12" v-for="(career,index) in careerAwards" :key="index">
                <v-form v-model="formValid">
                  <v-text-field
                      :id="index.toString()"
                      type="text"
                      :value="career"
                      readonly
                      outlined
                      prepend-icon="mdi-delete"
                      prepend-inner-icon="mdi-menu"
                      :append-icon="showAppendIcon[index] && formValid ? 'mdi-check':''"
                      @click:prepend="deleteCareerAward(index) "
                      @click:prepend-inner = "enableInput(index) "
                      @click:append = " saveCareerAward(index) "
                      :rules="rules"
                  >
                  </v-text-field>
                </v-form>
              </v-col>
              <v-col cols="10">
                <p class="text-left text-h6 font-weight-bold">Add new info</p>
                <v-form v-model="isFormValid">
                  <v-text-field  label="New Career"  v-model="newCareer" :rules="rules" outlined></v-text-field>
                  <v-btn block color="blueTec" class="whiteTec--text" @click="setCareer" :disabled="!isFormValid" >Save</v-btn>
                </v-form>
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
      careerInput:null,
      rules: [
        value => !!value || 'Field Required'
      ],
      isFormValid: false,
      formValid:false,
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
      this.newCareer = "";
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
      this.updateCareerAwards();
    }
  }
}
</script>

<style scoped>

</style>