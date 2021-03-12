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
            label="Type URL..."
            solo
            style="margin-right: 15px; width: 50em"
          >
            <template slot="append">
              <v-btn outlined @click="short()" :disabled="!valid">
                SHORT
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </v-flex>

      <v-flex xs12="xs12" md10="md10">
        <div v-for="u in my_urls.slice().reverse()" :key="u.token">
          <Card :title="u.url" :short_url="u.short_url" :token="u.token" />
          <br />
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import api from "../plugins/api";
import config from "../config";
import Card from "../components/Card";

export default {
  components: {
    Card,
  },
  data() {
    return {
      valid: true,
      url_rules: [
        (u) => !!u || "URL is required",
        (u) =>
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g.test(
            u
          ) || "URL must be valid",
      ],
      url: "",
      short_url: "",
      token: "",
      my_urls: [],
    };
  },
  mounted() {
    if (localStorage.getItem("my_urls")) {
      this.my_urls = JSON.parse(localStorage.getItem("my_urls"));
    }
  },
  methods: {
    short() {
      if (this.valid) {
        api.shortURL(this.url).then((response) => {
          this.token = response;
          this.short_url = `${config.app.url}/u/${this.token}`;
          this.my_urls.push({
            url: this.url,
            short_url: this.short_url,
            token: this.token,
          });
          this.save_urls();
        });
      }
    },

    save_urls() {
      const parsed = JSON.stringify(this.my_urls);
      localStorage.setItem("my_urls", parsed);
    },
  },
};
</script>
