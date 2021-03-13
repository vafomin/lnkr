<template>
  <v-card class="mx-auto" width="40em">
    <v-card-text>
      <p class="headline">{{ title }}</p>
      <a :href="short_url" target="_blank">
        <p class="title">{{ short_url }}</p>
      </a>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" outlined @click.stop="dialog = true">
        QR-code
      </v-btn>
      <v-spacer />
      <p>
        <v-icon>visibility</v-icon>
        {{ watch }}
      </p>
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
      interval: null,
      dialog: false,
      watch: 0,
    };
  },
  created() {
    this.interval = setInterval(this.getWatch, 5000);
  },
  mounted() {
    this.getWatch();
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
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
