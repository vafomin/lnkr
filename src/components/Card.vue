<template>
  <v-card
    class="mx-auto"
    width="40em"
  >
    <v-card-text>
      <p class="title">{{ title }}</p>
      <a class="subtitle-1" :href="short_url" target="_blank">{{ short_url }}</a>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    short_url: String
  }
};
</script>
