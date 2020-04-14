<template>
  <v-card
    class="mx-auto"
    width="40em"
  >
    <v-card-text>
      <p class="title">{{ title }}</p>
      <a class="subtitle-1" :href="short_url" target="_blank">{{ short_url }}</a>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        outlined
        @click.stop="dialog = true"
      >
        QR-code
      </v-btn>
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
    </v-card-text>
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
