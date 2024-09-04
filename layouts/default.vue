<template>
  <nav
    class="container is-fluid navbar is-fixed-top border-b-thin"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <div class="navbar-item px-0">
        <v-icon icon="mdi-emoticon-cool" />
        <strong> Your tasks simplified</strong>
      </div>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">
          <v-icon icon="mdi-home" />
          <span>Table generator</span></nuxt-link
        >

        <nuxt-link class="navbar-item" to="/demo"
          ><v-icon icon="mdi-test-tube" /><span>Demo</span></nuxt-link
        >
      </div>
    </div>
  </nav>

  <v-divider thickness="5" />
  <v-container fluid>
    <slot />
  </v-container>
</template>

<style>
.router-link-active {
  color: rgb(17, 94, 149);
}
</style>
