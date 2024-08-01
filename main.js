document.addEventListener('DOMContentLoaded', () => {
    const checkInInput = document.getElementById("check_in");
    const checkOutInput = document.getElementById("check_out");

    // Function to set minimum date for check-out
    function setMinCheckoutDate() {
        const checkInValue = checkInInput.value;
        if (checkInValue) {
            const checkInDate = new Date(checkInValue);
            checkInDate.setDate(checkInDate.getDate() + 1); // Add one day
            const minCheckout = checkInDate.toISOString().split('T')[0];
            checkOutInput.setAttribute("min", minCheckout);

            // If the check-out is invalid, clear it
            if (checkOutInput.value && new Date(checkOutInput.value) <= checkInDate) {
                checkOutInput.value = ''; // Clear invalid check-out
            }
        } else {
            // If check-in is empty, remove check-out restriction
            checkOutInput.removeAttribute("min");
        }
    }

    // Get today and tomorrow's dates
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Format dates as YYYY-MM-DD
    const todayFormatted = today.toISOString().split('T')[0];
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

    // Initial setup
    checkInInput.setAttribute("min", todayFormatted); 
    checkInInput.defaultValue = todayFormatted; // Default check-in to today
    setMinCheckoutDate(); // Set initial minimum for check-out
    checkOutInput.defaultValue = tomorrowFormatted; // Default check-out to tomorrow

    // Event listeners for changes
    checkInInput.addEventListener("change", setMinCheckoutDate);
    checkOutInput.addEventListener("change", () => {
        // If check-out is before check-in, reset it
        if (checkOutInput.value && new Date(checkOutInput.value) <= new Date(checkInInput.value)) {
            checkOutInput.value = ''; 
        }
    });
}); 

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