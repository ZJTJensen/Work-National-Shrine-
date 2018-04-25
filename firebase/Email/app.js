
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCXCgUKMjIIZkC_2zC0zdyvZg6SoJDfdlU",
        authDomain: "emails-9b0c4.firebaseapp.com",
        databaseURL: "https://emails-9b0c4.firebaseio.com",
        projectId: "emails-9b0c4",
        storageBucket: "emails-9b0c4.appspot.com",
        messagingSenderId: "585604052594"
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    var emailDataRef = firebase.database().ref('emails'); 

    emailDataRef.once("value", function(snapshot){
            if(snapshot.exists()){
            var content = ""
            snapshot.forEach(function(childSnapshot){

                var name_val = childSnapshot.val().Name;
                var email_val = childSnapshot.val().Email;
                content += "<tr><td>"+ name_val+"</td><td>"+email_val+"</td></tr>";

            });
            $('#test').append(content)
        }
        });
