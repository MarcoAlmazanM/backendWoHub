<template>
  <div>
    <v-layout>
      <v-col>
        <p class="blueTec--text text-h6 font-weight-bold">Cover</p>
        <v-img  max-height="360" max-width="640" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"></v-img>
        <br>
        <v-btn block color="blueTec" class="whiteTec--text">Seleccionar Portada</v-btn>
        <br>
        <p class="blueTec--text text-h6 font-weight-bold">Workout Video</p>
        <v-btn block color="blueTec" class="whiteTec--text">Seleccionar Video</v-btn>
        <br>
      </v-col>
      <v-col>
        <p class="blueTec--text text-h6 font-weight-bold">General</p>
        <v-text-field label="Workout Title" outlined></v-text-field>
        <v-textarea label="Description" outlined></v-textarea>
        <v-select label="Visibility when upload finishes" solo> </v-select>
        <br>

      </v-col>
    </v-layout>
    <v-layout>
      <v-col>
        <p class="blueTec--text text-h6 font-weight-bold">Filters</p>
        <v-select label="Difficulty" solo> </v-select>
        <v-select label="Muscular Focus" solo> </v-select>
      </v-col>
      <v-col>
        <br>
        <br>
        <v-select label="Type" solo> </v-select>
        <v-select label="Required Equipment" solo> </v-select>
      </v-col>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "NewWorkouts.vue"
}
</script>

<style scoped>

</style>