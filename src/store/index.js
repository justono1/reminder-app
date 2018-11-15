import Vue from 'vue';
import Vuex from 'vuex';
// import { node_uid } from 'node-uid';

//modules
import { people } from '@/store/modules/people';
import { roles } from '@/store/modules/roles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    people: people,
    roles: roles
  },
  state: {
    firebaseui: ''
  },
  mutations: {
    setFirebaseUI(state, payload) {
      state.firebaseui = payload.instance;
    }
  }
});
