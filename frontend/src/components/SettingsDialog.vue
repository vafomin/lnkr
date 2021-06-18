<template>
  <v-dialog v-model="isVisible" persistent max-width="600">
    <v-card>
      <v-card-title class="headline">{{ $t("settings.title") }}</v-card-title>

      <v-card-text class="subtitle-1">
        <p class="body-1">
          {{ $t("settings.changeTheme") }}:
          <v-btn icon @click="changeColor">
            <v-icon v-if="!isDark" color="orange">wb_sunny</v-icon>
            <v-icon v-else>brightness_2</v-icon>
          </v-btn>
        </p>

        <v-row align="center">
          <v-col cols="4">
            <p class="body-1 mt-3">{{ $t("settings.selectLang") }}:</p>
          </v-col>
          <v-col cols="8">
            <v-select
              v-model="getLanguage"
              :items="languages"
              item-text="t"
              item-value="lang"
              return-object
              label="Select"
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">
          {{ $t("settings.closeBtn") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
import i18n from "../plugins/i18n";

export default {
  name: "SettingsDialog",
  props: {
    visible: Boolean,
  },
  data() {
    return {
      isLoading: false,
      languages: [
        { t: "English", lang: "en" },
        { t: "Русский", lang: "ru" },
      ],
    };
  },

  computed: {
    isVisible() {
      return this.visible;
    },

    isDark() {
      return this.$vuetify.theme.dark;
    },

    getLanguage: {
      get() {
        return { t: this.$t(i18n.locale), lang: i18n.locale };
      },

      set(e) {
        i18n.locale = e.lang;
        this.setLanguage(e.lang);
      },
    },
  },

  methods: {
    ...mapMutations("settings", ["setShowSettingsDialog", "setLanguage"]),

    closeDialog() {
      this.setShowSettingsDialog(false);
    },

    changeColor() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
