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
     firbase.initializeApp(firebaseConfig);
     
     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['data'];
name_with_tag = "<h4> " + name + "<img class='user_trick' src='tick.png'></h4>";
message_with_tag = "<h4 class ='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id) >"
span_with_tag = "<span class='glyphicon glyphicon-thumbs up'>Like: "+ like + "</span></button><hr>"

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
   console.log("clicked on like button -" + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   update_likes = Number(likes) + 1;
   console.log(update_likes);

   firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
   });
}

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
      window.location = "index.html";
}

