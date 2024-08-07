// Slides on Book Now page
let slideIndex = [1,1,1,1,1];
let slideId = ["mySlides" ,"mySlides1", "mySlides2", "mySlides3", "mySlides4"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
};

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1};    
  if (n < 1) {slideIndex[no] = x.length};
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  };
  x[slideIndex[no]-1].style.display = "block";  
};

// Mobile Menu
let openMenu = document.getElementById("hamburger");
let closeMenu = document.getElementById("close");
let mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener('click', () => {
    openMenu.style.display = "none";
    closeMenu.style.display = "grid";
    mobileMenu.style.display = "grid";
});

closeMenu.addEventListener('click', () => {
    openMenu.style.display = "grid";
    closeMenu.style.display = "none";
    mobileMenu.style.display = "none";
});

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

// Book Tour Redirect
function bookTourFunction() {
    location.replace("https://www.explorertours.com");
}
// Find Us Redirect
function findUsFunction() {
    location.replace("https://maps.app.goo.gl/LMtN9ryRynKNCr7K8");
}

// Social Media Redirects
function socialFacebook() {
    location.replace("https://www.facebook.com/explorerbackpackers/")
}

function socialInstagram() {
    location.replace("https://www.instagram.com/explorer.backpackers/")
}

function socialTikTok() {
    location.replace("https://www.tiktok.com/@explorer.backpackers")
}

function socialTwitter(){
    location.replace("https://www.twitter.com/@explorer.backpackers")
}

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-XXXXXXX');

// yoco API key
const yocoApiKey = "";

// cloudbeds API key
const cloudbedsApiKey = "";

// function to take the default values 


// cloudbeds api for available room types
const cloudbedsRoomTypes = 'https://api.cloudbeds.com/api/v1.2/getRooms';

let amount = 0;

// function to create a list of room types available and or filter the room types 
function getRooms() {
    const room = document.getElementById('roomSelection').value;
    const guests = document.getElementById('numberOfGuests').value;
    const checkIn = document.getElementById('check_in').value;
    const checkOut = document.getElementById('check_out').value;
    const discountCode = document.getElementById('discountCode').value;

    const femSix = document.getElementById('femSix')
    const femFour = document.getElementById('femFour')
    const mixEight = document.getElementById('mixEight')
    const mixEightOut = document.getElementById('mixEightOut')
    const priRoom = document.getElementById('priRoom')

    switch(room) {
        case 'selectedAllOptions':
        case 'selectedfemaleSixBedDorm':
            femFour.style.display = "none"
            mixEight.style.display = "none"
            mixEightOut.style.display = "none"
            priRoom.style.display = "none"
        case 'selectedFemaleFourBedDorm':
            femSix.style.display = "none"
            mixEight.style.display = "none"
            mixEightOut.style.display = "none"
            priRoom.style.display = "none"
        case 'selectedMixedEightBedDorm':
        case 'selectedMixedEightBedDormOutside':
        case 'selectedPrivateQueenRoom':
    }
}

function slideInfo() {}

// function to open slide
function openSlide() {
}

// yoco api
const yoco = 'https://payments.yoco.com/api/checkouts';

// cloudbeds api adds a reservation to the selected property
const cloudbedsPostReservation = 'https://api.cloudbeds.com/api/v1.2/postReservation';

// cloudbeds api for payment after yoco successful payment
const cloudbedsPostPayment = 'https://api.cloudbeds.com/api/v1.2/postPayment';

