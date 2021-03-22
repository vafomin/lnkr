<template>
  <v-card class="mx-auto" width="40em">
    <v-card-text>
      <v-alert v-if="successAlert" dense outlined type="success">
        Link copied successfully
      </v-alert>
      <v-alert v-if="errorAlert" dense outlined type="error">
        Link copying error
      </v-alert>
      <p class="headline">{{ title | truncateTitle }}</p>
      <v-row>
        <v-btn
          icon
          color="primary"
          v-clipboard:copy="short_url"
          v-clipboard:success="clipboardSuccess"
          v-clipboard:error="clipboardError"
        >
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
        <a :href="short_url" target="_blank">
          <p class="title">{{ short_url }}</p>
        </a>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" outlined @click.stop="dialog = true">
        QR-code
      </v-btn>
      <v-spacer />
      <p v-if="!isLoading">
        <v-icon>visibility</v-icon>
        {{ watch }}
      </p>
      <v-progress-circular
        v-else
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-card-actions>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">QR-code</v-card-title>
        <v-card-text>
          <qrcode :value="short_url" :options="{ width: 200 }"></qrcode>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import api from "../plugins/api";
export default {
  name: "Card",
  props: {
    title: String,
    short_url: String,
    token: String,
  },
  data() {
    return {
      isLoading: false,
      interval: null,
      dialog: false,
      watch: 0,
      successAlert: false,
      errorAlert: false,
    };
  },
  created() {
    this.interval = setInterval(this.getWatch, 5000);
  },
  mounted() {
    this.isLoading = true;
    this.getWatch().finally(() => (this.isLoading = false));
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getWatch() {
      return api.getWatch(this.token).then((response) => {
        this.watch = response;
      });
    },
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
