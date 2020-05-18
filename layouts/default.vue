<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>
        おうちで時間割
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
* :not(.v-icon) {
  font-family: 'Noto Sans JP', sans-serif !important;
}
</style>
