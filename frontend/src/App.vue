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

      <v-btn icon @click.stop="dialog = true">
        <v-icon>help_outline</v-icon>
      </v-btn>
      <v-btn icon @click.stop="showDialog">
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <span
        >{{ $t("createdBy") }}
        <a href="https://enotcode.com" target="_blank">enotcode</a></span
      >
    </v-footer>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">{{ $t("help.title") }}</v-card-title>

        <v-card-text class="subtitle-1">
          {{ $t("help.description") }}
          <a href="https://github.com/vafomin/shorty" target="_blank">GitHub</a>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" outlined @click="dialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <SettingsDialog :visible="showSettingsDialog" />
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    SettingsDialog: () => import("./components/SettingsDialog"),
  },

  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapState("settings", ["showSettingsDialog"]),
  },

  mounted() {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },

  methods: {
    ...mapMutations("settings", ["setShowSettingsDialog"]),

    showDialog() {
      this.setShowSettingsDialog(!this.showSettingsDialog);
    },
  },
};
</script>
