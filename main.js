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

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
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