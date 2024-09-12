<script setup lang="ts">
import { TOOLS } from "~/constants";
</script>

<template>
  <v-navigation-drawer permanent>
    <v-list-item title="Tools"></v-list-item>
    <v-divider thickness="1" class="my-0"></v-divider>

    <v-list-item
      v-for="(item, index) in TOOLS"
      :key="index"
      link
      :to="item.route"
      :title="item.label"
      :prepend-icon="item.icon"
    ></v-list-item>
  </v-navigation-drawer>

  <v-main height="95vh">
    <nuxt-page />
  </v-main>
</template>
