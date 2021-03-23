import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages } from "../assets/localization";
import { languages } from "../config";

Vue.use(VueI18n);

function getLang() {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  } else {
    const lang = navigator.language.substr(0, 2).toLowerCase();
    if (languages.includes(lang)) {
      return lang;
    } else {
      return "en";
    }
  }
}

export default new VueI18n({
  locale: getLang(),
  messages,
});
