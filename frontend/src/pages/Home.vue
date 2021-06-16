<template>
  <div class="v-container pa-4">
    <v-layout
      class="text-xs-center"
      column="column"
      justify-center="justify-center"
      align-center="align-center"
    >
      <v-flex xs12="xs12" md10="md10">
        <v-form v-model="valid" @submit.prevent="short()">
          <v-text-field
            v-model="url"
            :rules="url_rules"
            :label="$t('typeURL')"
            solo
            style="margin-right: 15px; width: 50em"
          >
            <template slot="append">
              <v-btn outlined @click="short()" :disabled="!valid">
                {{ $t("short") }}
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </v-flex>

      <v-flex xs12="xs12" md10="md10">
        <div v-for="url in urls" :key="url.token">
          <Card :token="url.token" />
          <br />
        </div>
      </v-flex>

      <v-snackbar
        :timeout="timeoutSnackbar"
        :value="successSnackbar"
        absolute
        bottom
        color="success"
      >
        <span
          ><v-icon>mdi-checkbox-marked-circle</v-icon>
          {{ $t("linkCopiedSuccess") }}</span
        >
      </v-snackbar>
      <v-snackbar
        :timeout="timeoutSnackbar"
        :value="errorSnackbar"
        absolute
        bottom
        color="error"
      >
        <span
          ><v-icon>mdi-alert-circle</v-icon> {{ $t("linkCopiedError") }}</span
        >
      </v-snackbar>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Card: () => import("../components/Card"),
  },
  data() {
    return {
      valid: true,
      url_rules: [
        (u) => !!u || this.$t("urlRequired"),
        (u) =>
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g.test(
            u
          ) || this.$t("urlValid"),
      ],
      url: "",
    };
  },

  computed: {
    ...mapState("urls", ["urls"]),
    ...mapState("common", [
      "successSnackbar",
      "errorSnackbar",
      "timeoutSnackbar",
    ]),
  },

  methods: {
    ...mapActions("urls", ["shortUrl"]),

    short() {
      if (this.valid) {
        this.shortUrl({ url: this.url });
        this.url = "";
      }
    },
  },
};
</script>
