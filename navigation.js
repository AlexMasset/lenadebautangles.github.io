var open_nav_button = document.getElementById("side_nav_btn");
var close_nav_button = document.getElementById("closebtn_nav");
var side_nav_bar = document.getElementById("side_Nav_Bar");

function openNav() {
    side_nav_bar.style.width = "250px";
    document.getElementById("darken").style.opacity = "0.3";
}
function closeNav() {
    side_nav_bar.style.width = "0";
    document.getElementById("darken").style.opacity = "0";
}

open_nav_button.addEventListener("click", function() {
    openNav();
})
close_nav_button.addEventListener("click", function() {
    closeNav();
})