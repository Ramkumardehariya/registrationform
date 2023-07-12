
let password = document.getElementById("password")
let username = document.getElementById("name")
let flog = 1;

function validForm(value){
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "Error enter user name"
        flog = 0;
    }
    else if(username.value.length < 3)
    {
        document.getElementById("userError").innerHTML = "Error please enter min 3 char"
        flog = 0;
    }
    else{ 
        document.getElementById("userError").innerHTML = "";
        flog = 1;
    }

    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Error enter user name"
        flog = 0;
    }
    else if(password.value.length < 3)
    {
        document.getElementById("passError").innerHTML = "Error please enter min 3 char"
        flog = 0;
    }
    else{ 
        document.getElementById("userError").innerHTML = "";
        flog = 1;
    }

    if(flog)
    {
        return true;
    }
    else{
        return false;
    }
}
