import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB5imMvu2aH_Gh7t7-HcXS7jL1BAEVz46k",
  authDomain: "yoprobono.firebaseapp.com",
  databaseURL: "https://yoprobono.firebaseio.com",
  projectId: "yoprobono",
  storageBucket: "yoprobono.appspot.com",
  messagingSenderId: "208787636190"
};
firebase.initializeApp(config);
export default firebase;