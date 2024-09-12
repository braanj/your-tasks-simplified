<script setup>
import { useTheme } from "vuetify";
import { NAVIGATION } from "~/constants";

const themes = {
  light: { icon: "mdi-white-balance-sunny", color: "#F57F17", label: "Light" },
  dark: { icon: "mdi-weather-night", color: "#01579B", label: "Dark" },
};

const value = ref(false);
const theme = useTheme();

watch(value, (newValue, _) => {
  theme.global.name.value = newValue ? "dark" : "light";
});
</script>

<template>
  <v-app>
    <v-app-bar :elevation="0" class="border-b-thin" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          to="/"
          link
          variant="plain"
          icon="mdi-emoticon-cool"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title size="large" class="ms-0">
        <v-btn variant="plain" to="/">Your tasks simplified</v-btn>
      </v-app-bar-title>

      <v-spacer />

      <v-row tag="nav" align="center" justify="end" no-gutters="">
        <v-btn
          v-for="(item, index) in NAVIGATION"
          :key="index"
          :to="item.route"
          variant="plain"
          :prepend-icon="item.icon"
        >
          {{ item.label }}
        </v-btn>

        <v-switch
          v-model="value"
          hide-details
          class="px-4"
          :false-icon="themes.light.icon"
          :base-color="themes.light.color"
          :true-icon="themes.dark.icon"
          :color="themes.dark.color"
        ></v-switch>
      </v-row>
    </v-app-bar>

    <v-container fluid>
      <slot />
    </v-container>
  </v-app>
</template>

<style>
.router-link-active {
  color: rgb(17, 94, 149);
}
</style>
