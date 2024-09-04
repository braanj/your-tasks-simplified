<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

useHead(() => {
  return {
    link: [
      {
        rel: "canonical",
        href: config.public.host + route.path,
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css",
      },
    ],
  };
});
</script>

<template>
  <v-container fluid>
    <table class="table is-bordered is-fullwidth">
      <thead>
        <tr class="has-background-light">
          <th>Départ</th>
          <th>Arrivée</th>
          <th>Distance</th>
          <th>Temps transport en commun</th>
          <th>Temps voiture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Aeroport de Martinique</td>
          <td>Le Francois</td>
          <td>13 km</td>
          <td>1h51</td>
          <td>16 min</td>
        </tr>
        <tr>
          <td>Fort de France</td>
          <td>Sainte Anne</td>
          <td>50 km</td>
          <td>2h40</td>
          <td>46 min</td>
        </tr>
        <tr>
          <td>Les Trois Ilets</td>
          <td>Sainte Anne</td>
          <td>35 km</td>
          <td>2h20</td>
          <td>35 min</td>
        </tr>
        <tr>
          <td>Le Vauclin</td>
          <td>Saint Pierre</td>
          <td>66 km</td>
          <td>3h</td>
          <td>1h</td>
        </tr>
        <tr>
          <td>Aeroport de Martinique</td>
          <td>Le Francois</td>
          <td>13 km</td>
          <td>1h51</td>
          <td>16 min</td>
        </tr>
        <tr>
          <td>Fort de France</td>
          <td>Sainte Anne</td>
          <td>50 km</td>
          <td>2h40</td>
          <td>46 min</td>
        </tr>
        <tr>
          <td>Les Trois Ilets</td>
          <td>Sainte Anne</td>
          <td>35 km</td>
          <td>2h20</td>
          <td>35 min</td>
        </tr>
        <tr>
          <td>Le Vauclin</td>
          <td>Saint Pierre</td>
          <td>66 km</td>
          <td>3h</td>
          <td>1h</td>
        </tr>
        <tr>
          <td>Aeroport de Martinique</td>
          <td>Le Francois</td>
          <td>13 km</td>
          <td>1h51</td>
          <td>16 min</td>
        </tr>
        <tr>
          <td>Fort de France</td>
          <td>Sainte Anne</td>
          <td>50 km</td>
          <td>2h40</td>
          <td>46 min</td>
        </tr>
        <tr>
          <td>Les Trois Ilets</td>
          <td>Sainte Anne</td>
          <td>35 km</td>
          <td>2h20</td>
          <td>35 min</td>
        </tr>
        <tr>
          <td>Le Vauclin</td>
          <td>Saint Pierre</td>
          <td>66 km</td>
          <td>3h</td>
          <td>1h</td>
        </tr>
        <tr>
          <td>Aeroport de Martinique</td>
          <td>Le Francois</td>
          <td>13 km</td>
          <td>1h51</td>
          <td>16 min</td>
        </tr>
        <tr>
          <td>Fort de France</td>
          <td>Sainte Anne</td>
          <td>50 km</td>
          <td>2h40</td>
          <td>46 min</td>
        </tr>
        <tr>
          <td>Les Trois Ilets</td>
          <td>Sainte Anne</td>
          <td>35 km</td>
          <td>2h20</td>
          <td>35 min</td>
        </tr>
        <tr>
          <td>Le Vauclin</td>
          <td>Saint Pierre</td>
          <td>66 km</td>
          <td>3h</td>
          <td>1h</td>
        </tr>
        <tr>
          <td>Aeroport de Martinique</td>
          <td>Le Francois</td>
          <td>13 km</td>
          <td>1h51</td>
          <td>16 min</td>
        </tr>
        <tr>
          <td>Fort de France</td>
          <td>Sainte Anne</td>
          <td>50 km</td>
          <td>2h40</td>
          <td>46 min</td>
        </tr>
        <tr>
          <td>Les Trois Ilets</td>
          <td>Sainte Anne</td>
          <td>35 km</td>
          <td>2h20</td>
          <td>35 min</td>
        </tr>
        <tr>
          <td>Le Vauclin</td>
          <td>Saint Pierre</td>
          <td>66 km</td>
          <td>3h</td>
          <td>1h</td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>
