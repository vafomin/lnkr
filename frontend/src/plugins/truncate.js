import Vue from "vue";

Vue.filter("truncateTitle", (title) => {
  return title.length > 45 ? `${title.substr(0, 45)}...` : title;
});
