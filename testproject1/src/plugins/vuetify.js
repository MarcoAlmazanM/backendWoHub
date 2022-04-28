import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        blueTec: '#344FFE',
        whiteTec: '#FFFFFF',
        grayTec: '#787C9D',
      },
    },
  },
});
