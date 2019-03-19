import firebase, { firestore } from "firebase";

const config = {
  apiKey: "AIzaSyAxzEhuLM19eBv62LMbdQl5o9Y8jZi55cY",
  authDomain: "oximata-2a585.firebaseapp.com",
  databaseURL: "https://oximata-2a585.firebaseio.com",
  projectId: "oximata-2a585",
  storageBucket: "oximata-2a585.appspot.com",
  messagingSenderId: "755479410327"
};
firebase.initializeApp(config);

export default firestore;
