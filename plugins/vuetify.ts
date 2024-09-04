import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md2 } from "vuetify/blueprints";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    blueprint: md2,
    theme: {
      defaultTheme: "light",
    },
  });

  app.vueApp.use(vuetify);
});
