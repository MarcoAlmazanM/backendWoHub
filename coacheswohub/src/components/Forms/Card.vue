<template>
  <v-container fluid>
    <v-row dense align="center" justify="center" >
      <v-col cols="12" md="8">
        <v-card class="whiteTec--text rounded-xl">
          <v-card-title class="text-h6 text-md-h5 blueTec--text font-weight-bold">{{ title }}</v-card-title>
          <v-card-subtitle><p class="grayTec--text text-h6 font-weight-bold alignOption mb-1">Profesor: {{ teacher }}</p></v-card-subtitle>
          <v-card-actions>
            <v-dialog persistent v-model="dialog" width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-spacer></v-spacer>
                <a v-bind="attrs" v-on="on" class="blueTec--text font-weight-bold ">Ver Detalles</a>
              </template>
              <!--Cuadro de dialogo-->
              <v-card>
                <v-card-title class="text-h6 text-sm-h5 blueTec--text mb-3 font-weight-bold justify-center ">{{ title }}</v-card-title>
                <v-card-text>
                  <p class="grayTec--text alignOption mb-3 text-body-1  text-sm-h6 font-weight-bold">Profesor: {{ teacher }}</p>
                  <p class="grayTec--text alignOption mb-3 text-body-1  text-sm-h6 font-weight-bold">Salón: {{ place }}</p>
                  <p class="grayTec--text alignOption mb-3 text-body-1  text-sm-h6 font-weight-bold">Días: {{ days }}</p>
                  <p class="grayTec--text alignOption mb-10 text-body-1 text-sm-h6 font-weight-bold">Horario: {{ time }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <a class="blueTec--text font-weight-bold text-h6"  @click="dialog = false">
                    Cerrar
                  </a>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Card",
  props:{
    title: String,
    teacher: String,
    place: String,
    days: String,
    time: String,
  },
  data(){
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>
.alignOption {
  text-align: start;
}
.alignCenter{
  text-align: center;
}
</style>