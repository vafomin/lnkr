<template>
  <v-card
    class="mx-auto"
    width="40em"
  >
    <v-card-text>
      <p class="headline">{{ title }}</p>
      <a :href="short_url" target="_blank">
        <p class="title" >{{ short_url }}</p>
      </a>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        outlined
        @click.stop="dialog = true"
      >
        QR-code
      </v-btn>
    </v-card-actions>
    <v-dialog
        v-model="dialog"
        max-width="290"
      >
      <v-card>
        <v-card-title class="headline">QR-code</v-card-title>
        <v-card-text>
          <qrcode :value="title" :options="{ width: 200 }"></qrcode>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    short_url: String
  },
  data () {
    return {
      dialog: false,
    }
  }
};
</script>

<style scoped>
  a { 
    text-decoration: none;
  } 
</style>