//add functionality to #account_settings

//Changing greet msg to greet the user by their username
function greet_msg() {
    username = prompt("How should we call you?").trim();
    while (username == "") {
        alert("Your username can't be blank!")
        username = prompt("How should we call you?").trim();
    }
    let default_msg = document.getElementById("welcome_msg");
    default_msg.innerHTML = "Greetings " + username + "!";
}

greet_msg()
