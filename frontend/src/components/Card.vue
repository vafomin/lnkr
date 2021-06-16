<template>
  <v-card class="mx-auto" width="40em">
    <div v-if="isLoading">
      <v-card-text>
        <v-alert v-if="successAlert" dense outlined type="success">
          {{ $t("linkCopiedSuccess") }}
        </v-alert>
        <v-alert v-if="errorAlert" dense outlined type="error">
          {{ $t("linkCopiedError") }}
        </v-alert>
        <p class="headline">{{ url | truncateTitle }}</p>
        <v-row>
          <v-btn
            icon
            color="primary"
            v-clipboard:copy="shortUrl"
            v-clipboard:success="clipboardSuccess"
            v-clipboard:error="clipboardError"
          >
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
          <a :href="shortUrl" target="_blank">
            <p class="title">{{ shortUrl }}</p>
          </a>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" outlined @click.stop="dialog = true">
          {{ $t("qrCode") }}
        </v-btn>
        <v-spacer />
        <v-icon>visibility</v-icon>
        {{ watch }}
      </v-card-actions>
    </div>
    <v-skeleton-loader v-else class="mx-auto" width="40em" type="article" />

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{ $t("qrCode") }}</v-card-title>
        <v-card-text>
          <qrcode :value="shortUrl" :options="{ width: 200 }"></qrcode>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import config from "../config";

export default {
  name: "Card",
  props: {
    token: String,
  },
  data() {
    return {
      dialog: false,
      successAlert: false,
      errorAlert: false,
      url: "",
      watch: 0,
      isLoading: false,
    };
  },

  computed: {
    shortUrl() {
      return `${config.app.url}/u/${this.token}`;
    },
  },

  mounted() {
    this.getUrlInfo({ token: this.token })
      .then((data) => {
        this.url = data.url;
        this.watch = data.watch;
      })
      .finally(() => {
        this.isLoading = true;
      });
  },

  methods: {
    ...mapActions("urls", ["getUrlInfo"]),

    clipboardSuccess() {
      this.successAlert = true;
      setTimeout(() => (this.successAlert = false), 1000);
    },
    clipboardError() {
      this.errorAlert = true;
      setTimeout(() => (this.errorAlert = false), 1000);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
