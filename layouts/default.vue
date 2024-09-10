<script setup>
import { useTheme } from "vuetify";

const navigation = useNavigation();

const themes = {
  light: { icon: "mdi-white-balance-sunny", color: "#F57F17", label: "Light" },
  dark: { icon: "mdi-weather-night", color: "#01579B", label: "Dark" },
};

const value = ref(false);
const theme = useTheme();

watch(value, (newValue, oldValue) => {
  theme.global.name.value = newValue ? "dark" : "light";
});
</script>

<template>
  <v-app>
    <v-app-bar :elevation="0" class="border-b-thin" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon icon="mdi-emoticon-cool"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title size="large" class="ms-0">
        <v-btn variant="plain" to="/">Your tasks simplified</v-btn>
      </v-app-bar-title>

      <v-spacer />

      <v-row tag="nav" align="center" justify="end" no-gutters="">
        <v-btn
          v-for="(item, index) in navigation"
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

    <v-divider thickness="15" />

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
