import Controller from '@ember/controller';
// Comment 1
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Controller.extend({
  // Singleton services
  session: service(), // Injecting ember simple auth.
    firebaseApp: service(), // Injecting firebase services
    actions: {
      logout() {
        return this.get('session').invalidate();
     },
      async login() {
      const auth = await this.get('firebaseApp').auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      return auth.signInWithPopup(provider);
    },
    displayMenu() {
      alert("Loging out?");
    }
  }
});
