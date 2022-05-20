<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <v-form v-model="isFormValid">
          <p class="blueTec--text text-center text-h4 font-weight-bold">PERSONAL INFO</p>
          <v-text-field label="Username" @change="usr" v-model="username" :rules="[rules.required,rules.username]" class="input-group--focused" outlined></v-text-field>
          <v-text-field label="Correo" @change="mail" v-model="email" :rules="[rules.required, rules.email]" outlined></v-text-field>
          <v-text-field label="Teléfono" @change="tel" v-model="phone" :rules="[rules.required, rules.length(10)]" outlined></v-text-field>
          <v-text-field label="Ubicación" @change="ubi" v-model="location"  :rules="[rules.required, rules.location]" outlined></v-text-field>
          <v-btn block color="blueTec" class="whiteTec--text" @click="setInterests" :disabled="!isFormValid">Actualizar información personal</v-btn>
        </v-form>
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
      isFormValid:false,
      rules: {
        required: value => !!value || 'Field Required',
        username: value=> {
          const pattern = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
          return pattern.test(value) || 'The username can contain dots,underscore but not at the start or the end, alphabets, numbers and the length needs to be between 8 and 30 characters.';
        },
        length: len => v => (v || '').length == len || `Invalid phone length, required ${len}`,
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid Email.';
        },
        location: value =>{
          const pattern =/^[^,]*,[ a-zA-Z]+(?:\s+[a-zA-Z]+)*(?=[^,]*$)+.$/;
          return pattern.test(value) || 'Please use the following format City,Country.';
        }
      }
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