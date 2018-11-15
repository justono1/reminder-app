<template>
  <div class="inner-container">
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script type="text/javascript">
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { config } from '@/helpers/firebaseConfig';

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };

    if (this.$store.state.firebaseui != '') {
      this.$store.state.firebaseui.reset();
    } else {
      this.$store.commit({
        type: 'setFirebaseUI',
        instance: new firebaseui.auth.AuthUI(firebase.auth())
      });
    }
    this.$store.state.firebaseui.start('#firebaseui-auth-container', uiConfig);
  }
};
</script>

<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>
