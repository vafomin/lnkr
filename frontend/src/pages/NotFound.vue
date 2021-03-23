<template>
  <div class="v-container pa-4">
    <v-layout
      class="text-xs-center"
      column="column"
      justify-center="justify-center"
      align-center="align-center"
    >
      <v-flex xs12="xs12" md10="md10">
        <div class="headline text-center pb-4">
          <h1>{{ $t("error404") }}</h1>
        </div>
        <div class="headline text-center pb-4">
          <h2>{{ $t("pageNotFound") }}</h2>
        </div>
        <v-btn to="/" class="ma-2" block outlined color="primary">{{
          $t("home")
        }}</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
