<template>
  <v-container>
    <v-row dense align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <p class="blueTec--text text-center text-h4 font-weight-bold">Interests survey</p>
        <v-select :items="athletic_level" label="Nivel Atlético" solo> </v-select>
        <v-select :items="favorite_exercise" label="Tipo de Ejercicio Favorito" solo></v-select>
        <v-select :items="improvements" label="¿Qué buscas mejorar?" solo></v-select>
        <v-select :items="exercise_location" label="¿Dónde haces ejercicio?" solo></v-select>
        <v-select :items="available_time" label="Tiempo disponible para hacer ejercicio" solo></v-select>
        <v-text-field label="Deportes de interés (enlistalos)" solo></v-text-field>
        <v-btn block color="blueTec" class="whiteTec--text" @click="setInterests" >Actualizar intereses</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import 'firebase/storage';

  export default {
    name: "Survey",
    data: () => ({

      athletic_level: ['Principiante', 'Intermedio', 'Avanzado'],
      favorite_exercise: ['Natación', 'Correr', 'Ciclismo'],
      improvements: ['Mejorar salud en general', 'Perder peso', 'Ganar musculatura'],
      exercise_location: ['Casa', 'Oficina', 'Gimnasio'],
      available_time: ['30 minutos', '1 hora', '2 horas'],
      sport_interests: []

    }
    ),
    methods:{

      setInterests() {

        const map = new Map();

        map.set('Level', this.athletic_level);
        map.set('Favorite exercise', this.favorite_exercise);
        map.set('Improvements', this.improvements);
        map.set('Location', this.exercise_location);
        map.set('Availability', this.available_time);
        map.set('Sport Interests', this.sport_interests);

        console.log(firebase.auth().currentUser.email);

        //updates interests
        firebase.firestore().collection('Users').doc(firebase.auth().currentUser.email).add({
          'mapData' : map})
          .then(() => {
            this.$router.push('/home');
          });
      }
    }
  }
</script>

<style scoped>

</style>