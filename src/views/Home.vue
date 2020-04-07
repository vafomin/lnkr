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

          <v-flex xs12="xs12" md10="md10">
            <div v-for="u in my_urls" :key="u.url">
              <Card :title="u.url" :short_url="u.short_url" />
              <br>
            </div>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
  import axios from "axios"
  import Card from "../components/Card";

  export default{
    components: {
      Card
    },
    data(){
      return{
        url: "",
        short_url: "",
        my_urls: []
      }
    },
    mounted(){
      if (localStorage.getItem('my_urls')) {
        this.my_urls = JSON.parse(localStorage.getItem('my_urls'));
      }
    },
    methods: {
        short(){
            axios.post("https://myshortyapi.herokuapp.com/", {
                url: this.url
            })
            .then(response => {
                this.short_url = "https://myshortyapi.herokuapp.com/u/" + response.data.token;
                this.my_urls.push({ "url": this.url, "short_url": this.short_url });
                this.save_urls();
                console.log(response.data.token);
            })
            .catch(error => {
                console.log(error);
            });        
        },

        save_urls(){
          const parsed = JSON.stringify(this.my_urls);
          localStorage.setItem('my_urls', parsed);
        }
    }
  }
</script>