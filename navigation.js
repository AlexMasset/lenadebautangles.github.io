var open_nav_button = document.getElementById("side_nav_btn");
var close_nav_button = document.getElementById("closebtn_nav");
var side_nav_bar = document.getElementById("side_Nav_Bar");

function openNav() {
    side_nav_bar.style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    side_nav_bar.style.width = "0";
    document.body.style.backgroundColor = "white";
}

open_nav_button.addEventListener("click", function() {
    openNav();
})
close_nav_button.addEventListener("click", function() {
    closeNav();
})