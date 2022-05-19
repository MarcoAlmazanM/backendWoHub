<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <p class="blueTec--text text-center text-h4 font-weight-bold">PERSONAL INFO</p>
        <v-text-field label="Username" @change="usr" v-model="username" solo></v-text-field>
        <v-text-field label="Correo" @change="mail" v-model="email" solo></v-text-field>
        <v-text-field label="Teléfono" @change="tel" v-model="phone" solo></v-text-field>
        <v-text-field label="Ubicación" @change="ubi" v-model="location" solo></v-text-field>
        <v-btn block color="blueTec" class="whiteTec--text" @click="setInterests" >Actualizar información personal</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import firebase from "firebase";
  import 'firebase/storage';


  export default {

    name: "PersonalInfo",
    data: () => ({
          username: '',
          email: '',
          phone: '',
          location: '',
          myarr: [],
        }),
    mounted() {

      this.getStudentsInfo(firebase.auth().currentUser.email);
    },
    methods:{
      async getStudentsInfo(user) {

        const coach = await firebase.firestore().collection("Coaches").doc(user).get();
        this.data = coach.data();
        this.email = this.data.email;
        this.username = this.data.username;
        this.phone = this.data.phone;
        this.location = this.data.location.City + " "+ this.data.location.Country;

      },

      usr(event) {
        this.username = event;
      },
      mail(event) {
        this.email = event;
      },
      tel(event) {
        this.phone = event;
      },
      ubi(event) {
        this.location = event;
      },

      setInterests() {

        this.myarr = this.location.split(" ");

        const locationMap = new Map();
        locationMap.set('City', this.myarr[0]);
        locationMap.set('Country', this.myarr[1]);
        const location = Object.fromEntries(locationMap);

        //updates interests
        firebase.firestore().collection('Coaches').doc(firebase.auth().currentUser.email).update({
          email:this.email,
          username: this.username,
          phone: this.phone,
          location: location
        })
            .then(() => {
              this.$router.push('/personal');
            });
      }
    }

  }
</script>


<style scoped>

</style>