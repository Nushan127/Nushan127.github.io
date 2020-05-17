function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "webdev" && password == "webdev123"){
    alert ("Hi Welcome");
    }
    else{
        alert ("Invalid Username or password.");
    
    }
    }
