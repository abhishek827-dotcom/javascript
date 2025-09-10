
// Portfolio click event
 let p=document.querySelector("#portfolio");
 p.addEventListener("click", ()=>{
    console.log("you have accesed portfolio")
 });
 
 // Account dropdown toggle
let d = document.querySelector("#d");
let dropdown = document.getElementById("accountDropdown");
let themeBtn = document.getElementById("themeBtn");
let themeDropdown = document.getElementById("themeDropdown");

// Account dropdown show/hide
d.addEventListener("click", function(e) {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    // Hide theme dropdown if open
    themeDropdown.style.display = "none";
});

// Theme dropdown show/hide
themeBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    themeDropdown.style.display = themeDropdown.style.display === "block" ? "none" : "block";
});

// Hide both dropdowns when clicking outside
document.addEventListener("click", function() {
    dropdown.style.display = "none";
    themeDropdown.style.display = "none";
});

// Theme change logic
document.getElementById("lightTheme").addEventListener("click", function(e) {
    e.stopPropagation();
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    themeDropdown.style.display = "none";
    dropdown.style.display = "none";
});
document.getElementById("darkTheme").addEventListener("click", function(e) {
    e.stopPropagation();
    document.body.style.backgroundColor = "black";
    document.body.style.color = "whitesmoke";
    themeDropdown.style.display = "none";
    dropdown.style.display = "none";
})