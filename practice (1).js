
// ADICIONE SUS LINKS FIREBASE AQUI

const firebaseConfig = {
  apiKey: "AIzaSyDYNpYRMz_G9Np0BhdwteTaHFLFNMxVvKs",
  authDomain: "aula-50.firebaseapp.com",
  databaseURL: "https://aula-50-default-rtdb.firebaseio.com",
  projectId: "aula-50",
  storageBucket: "aula-50.appspot.com",
  messagingSenderId: "351906844156",
  appId: "1:351906844156:web:b8bf099379706b54b2f679",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}


