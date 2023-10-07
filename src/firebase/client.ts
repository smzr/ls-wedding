import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBkkSpB2Zd1GTgV2CmboIga1v0dSbsXJVA",
  authDomain: "ls-wedding-rsvp.firebaseapp.com",
  //databaseURL: "https://ls-wedding-rsvp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ls-wedding-rsvp",
  storageBucket: "ls-wedding-rsvp.appspot.com",
  messagingSenderId: "759054289921",
  appId: "1:759054289921:web:db6a786f856f8859ef0400"
};

export const app = initializeApp(firebaseConfig);