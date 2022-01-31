var button_connexion = document.getElementById("connexion");
var show_password_checkbox = document.getElementById("show_pw_toggle");
var password = document.getElementById("password_input");
var identifiant = document.getElementById("id_input");

function connect() {
    let identifiant_value = identifiant.value;
    let password_value = password.value;
    if (password_value == "Alexbg13" && identifiant_value == "Lenouille30") {
        window.location.href = "./tableau_de_bord/tableau_de_bord.html";
    } else {
        document.getElementById("connexion_error").hidden = false;
    }
}
button_connexion.addEventListener("click",function() {
    connect();
})

function showPassword() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

show_password_checkbox.addEventListener("click", function() {
    showPassword(); 
})


