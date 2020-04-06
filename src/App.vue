<template>
<v-app>
    <v-app-bar app clipped-left>
      <v-toolbar-title>Shorty</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="change_color()">
        <v-icon>invert_colors</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
  export default{
    mounted() {
      const theme = localStorage.getItem("useDarkTheme");
        if (theme) {
          if (theme == "true") {
            this.$vuetify.theme.dark = true;
          } else this.$vuetify.theme.dark = false;
      }
    },
    methods: {
      change_color () {
        this.$vuetify.theme.dark= !this.$vuetify.theme.dark;
        localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString())      
      },
    },
  }
</script>