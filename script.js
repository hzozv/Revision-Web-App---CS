// Prompts the user for their username when the website first loads and uses it to greet them
function greet_msg() {
    username = prompt("How should we call you?").trim();
    while (username == "") {
        alert("Your username can't be blank!");
        username = prompt("How should we call you?").trim();
    }
    let default_msg = document.getElementById("welcome_msg");
    default_msg.innerHTML = "Welcome " + username + "!";
}
greet_msg()


//A bunch of variables used for level_up(), add_xp(), total_amount_xp().
const xp_bar = document.getElementById("xp_bar");
let current_lvl = parseInt(document.getElementById("current_lvl").innerHTML, 10);
let totalAmountOfXp = parseInt(document.getElementById("total_xp").innerHTML, 10);
let xp_label = document.getElementById("xp_label").innerHTML;
let overflow_xp = 0;


/*
Changes the value and max of the progression bar and handles overflows.
Title of progression bar and label is updated accordingly
*/
function level_up() {
    if (overflow_xp >= xp_bar.max) {
        xp_bar.value = overflow_xp - xp_bar.max;
        overflow_xp = xp_bar.value;
        xp_bar.max = Math.round(xp_bar.max * 1.1);
        document.getElementById("current_max_xp").innerHTML = xp_bar.max;
        current_lvl += 1;
        document.getElementById("current_lvl").innerHTML = current_lvl;
        document.getElementById("current_xp").innerHTML = xp_bar.value;
        xp_bar.title = "You need " + (xp_bar.max - xp_bar.value) + " more xp to reach Level " + (current_lvl + 1) + " !";
        alert("Congrats, You've leveled up to Level " + current_lvl + "! :D");

    }
}


// This function should be changed to accept a value and use that instead of the hard-coded '15'.
function add_xp() {
    xp_bar.value += 6
    overflow_xp += 6
    document.getElementById("current_xp").innerHTML = xp_bar.value;
    xp_bar.title = "You need " + (xp_bar.max - xp_bar.value) + " more xp to reach Level " + (current_lvl + 1) + " !";
    level_up();          
    total_amount_xp();   
}

// Records the amount of xp gained
function total_amount_xp() {
    document.getElementById("total_xp").innerHTML = totalAmountOfXp += 15;
}
