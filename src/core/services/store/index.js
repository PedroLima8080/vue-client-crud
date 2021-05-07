import Vue from "vue";
import Vuex from "vuex";

// 
import person from "./person.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    person
  }
});
