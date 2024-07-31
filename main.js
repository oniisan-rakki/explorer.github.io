// showOffers()
// showExperiences()
// openChat()

// Mobile Menu
let openMenu = document.getElementById("hamburger");
let closeMenu = document.getElementById("close");
let mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", function() {
    openMenu.style.display = "none";
    closeMenu.style.display = "grid";
    mobileMenu.style.display = "grid";
});

closeMenu.addEventListener("click", function() {
    openMenu.style.display = "grid";
    closeMenu.style.display = "none";
    mobileMenu.style.display = "none";
});

// goToNextSectionHome()
// goToNextSectionAccommodation()
// goToNextSectionGroupBookings()

// Book Tour Redirect
function bookTourFunction() {
    location.replace("https://www.explorertours.com");
}
// Find Us Redirect
function findUsFunction() {
    location.replace("https://maps.app.goo.gl/LMtN9ryRynKNCr7K8");
}

// Set date to today
const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
document.getElementById("check_in").setAttribute("min", today);
today.setDate(today.getDate() + 1); // Increment the day by 1 to get tomorrow
const tomorrow = today.toISOString().split('T')[0];
document.getElementById("check_out").setAttribute("min", tomorrow);
