// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDMDphm6xCuGC7JQjcLwi4hU3Y5eSsX8jQ",
  authDomain: "aponk-82561.firebaseapp.com",
  databaseURL: "https://aponk-82561-default-rtdb.firebaseio.com",
  projectId: "aponk-82561",
  storageBucket: "aponk-82561.appspot.com",
  messagingSenderId: "814528637046",
  appId: "1:814528637046:web:a246200b62d4e800121757",
  measurementId: "G-0NB8RSBWLV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firebaseRef = firebase.database().ref().child('login');

firebaseRef.once("value").then(function (snapshot) {
  var loginInfo = snapshot.val();
  document.getElementById("login").addEventListener("click", function () {
    var username = document.getElementById("username");
    var password = document.getElementById("pass");
    if (username.value == loginInfo.username && password.value == loginInfo.password) {
      location.replace("dashboard_data_live.html");
    } else if (username.value != loginInfo.username) {
      username.style.borderColor = "red";
    } else if (password.value != loginInfo.password) {
      password.style.borderColor = "red";
    }
  });
});

document.getElementById('pass').addEventListener("input", function () {
  document.getElementById("pass").style.borderColor = "#ccc";
});
document.getElementById('username').addEventListener("input", function () {
  document.getElementById("username").style.borderColor = "#ccc";
});
