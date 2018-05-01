
    // Get a reference to the database service
    var database = firebase.database().ref(); 
    database.on('value', snap => {
        console.log(snap.val()); 
    });

        database.once("value")
        .then(function(snapshot){
            var content = ""
            console.log(snapshot)
            snapshot.forEach(function(data){
                var key = data.key;
                var emailData = data.val();
                var name_val = data.val().Name;
                var email_val = data.val().Email;
                $('#test').append( "<tr><td>"+ name_val+"</td><td>"+email_val+"</td></tr>")
                
            });
            
            
        });