var firebaseConfig = {
      apiKey: "AIzaSyAsN6ivQ9GT7-ehmaQDXTFpJ-H1Qbj5GCY",
      authDomain: "kwitter1-b09f8.firebaseapp.com",
      databaseURL: "https://kwitter1-b09f8-default-rtdb.firebaseio.com",
      projectId: "kwitter1-b09f8",
      storageBucket: "kwitter1-b09f8.appspot.com",
      messagingSenderId: "592309226131",
      appId: "1:592309226131:web:789cd04273d8b3a926db66"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= ' redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name" 
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
      window.location = "index.html";
}


