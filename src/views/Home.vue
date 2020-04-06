<template>
  <div class="v-container pa-4">
      <v-layout class="text-xs-center" column="column" justify-center="justify-center" align-center="align-center">
          <v-flex xs12="xs12" md10="md10">
              <v-text-field
                    v-model="url"
                    label="Type URL..."
                    solo
                    style="margin-right: 15px; width: 50em"
              >
              <template slot="append">
                    <v-btn outlined @click="short()">
                        SHORT
                    </v-btn>
              </template>
              </v-text-field>          
          </v-flex>
      </v-layout>
  </div>
</template>
