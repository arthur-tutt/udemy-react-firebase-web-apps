import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyArXA0Nr1UCNpbOCGW62myafxeE79PWpJY",
    authDomain: "udemy-demo-project-mgmt-site.firebaseapp.com",
    projectId: "udemy-demo-project-mgmt-site",
    storageBucket: "udemy-demo-project-mgmt-site.appspot.com",
    messagingSenderId: "993394892942",
    appId: "1:993394892942:web:ff0e49f0aedeab840c69df"
  };


  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage}
