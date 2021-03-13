<template>
  <div class="v-container pa-4">
    <v-layout
      class="text-xs-center"
      column="column"
      justify-center="justify-center"
      align-center="align-center"
    >
      <v-flex xs12="xs12" md10="md10">
        <div class="headline pb-4">
          <h1>Redirecting...</h1>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import api from "../plugins/api";
export default {
  mounted() {
    const token = this.$route.params.token;
    api.getURL(token).then((response) => {
      if (response === "404") {
        this.$router.push("../notFound");
      } else {
        api.updWatch(token).then(() => (document.location.href = response));
      }
    });
  },
};
</script>
