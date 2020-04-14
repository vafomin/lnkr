<template>
<v-app>
    <v-app-bar app clipped-left>
      <v-img
        class="mx-2"
        src="assets/logo.png"
        max-height="40"
        max-width="40"
        contain
      ></v-img>
      <v-toolbar-title>Shorty</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="change_color()">
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <v-btn icon @click.stop="dialog = true">
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <span>Created by <a href="https://enotcode.com" target="_blank">enotcode</a></span>
    </v-footer>

    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <v-card-title class="headline">What is Shorty?</v-card-title>

        <v-card-text class="subtitle-1">
          Shorty is a simple link shortener with a QR code.
          It has open source on <a href="https://github.com/enotcode/shorty" target="_blank">GitHub</a>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            outlined
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-app>
</template>

<script>
  export default{
    data () {
      return {
        dialog: false,
      }
    },
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