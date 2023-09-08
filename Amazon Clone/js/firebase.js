
const firebaseConfig = {
  apiKey: "AIzaSyBGV-IqokSIZ_giOtQzAjcORUNH5o1xujk",
  authDomain: "clone-two-49401.firebaseapp.com",
  projectId: "clone-two-49401",
  storageBucket: "clone-two-49401.appspot.com",
  messagingSenderId: "489452444199",
  appId: "1:489452444199:web:1709dbac2c3039bdf80c02",
  measurementId: "G-7RY6PE2RGZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

const db = firebase.firestore();