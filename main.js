// Set date to today
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

    // Initial setup
    checkInInput.setAttribute("min", new Date().toISOString().split('T')[0]); 
    setMinCheckoutDate(); // Set initial minimum for check-out

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