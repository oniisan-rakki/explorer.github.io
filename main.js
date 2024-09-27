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

document.addEventListener('DOMContentLoaded', ()=> {
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

});

const bookForm = document.getElementById('availability');
const roomSelection = document.getElementById('roomSelection');
const numberGuests = document.getElementById('numberOfGuests');
const checkIn = document.getElementById('check_in');
const checkOut = document.getElementById('check_out');
const reservationDetails = document.getElementById('reservationDetails');
const totalAmount = document.getElementById('totalAmount');
bookForm.addEventListener('submit', (event) => {

  event.preventDefault(); // Prevent default form submission behavior
  // API Call (CloudBeds)
  // Update display properties based on the selected value
  const selectedValue = roomSelection.value;
  const guests = numberGuests.value;
  const startDate = checkIn.value;
  const endDate = checkOut.value;
  let date1 = new Date (startDate);
  let date2 = new Date (endDate); 
  let differenceInTime = date2.getTime() - date1.getTime();
  let differenceInDays = Math.round(differenceInTime/(1000*3600*24))
  console.log(differenceInDays)
  
  if (selectedValue === 'selectedAllOptions') {
    // Show all options (or hide none)
    document.getElementById("femSix").style.display = "block";
    document.getElementById("femFour").style.display = "block";
    document.getElementById("mixEight").style.display = "block";
    document.getElementById("mixEightOut").style.display = "block";
    document.getElementById("priRoom").style.display = "block";

  } else if (selectedValue === 'selectedfemaleSixBedDorm') {
    // Hide all options except the selected one
    document.getElementById("femSix").style.display = "block";
    document.getElementById("femFour").style.display = "none";
    document.getElementById("mixEight").style.display = "none";
    document.getElementById("mixEightOut").style.display = "none";
    document.getElementById("priRoom").style.display = "none";

    // Show the selected option
    document.getElementById(selectedValue).style.display = "block";

  } else if (selectedValue === 'selectedFemaleFourBedDorm') {
        // Hide all options except the selected one
        document.getElementById("femSix").style.display = "none";
        document.getElementById("femFour").style.display = "block";
        document.getElementById("mixEight").style.display = "none";
        document.getElementById("mixEightOut").style.display = "none";
        document.getElementById("priRoom").style.display = "none";
    
        // Show the selected option
        document.getElementById(selectedValue).style.display = "block";

  } else if (selectedValue === 'selectedMixedEightBedDorm') {
            // Hide all options except the selected one
            document.getElementById("femSix").style.display = "none";
            document.getElementById("femFour").style.display = "none";
            document.getElementById("mixEight").style.display = "block";
            document.getElementById("mixEightOut").style.display = "none";
            document.getElementById("priRoom").style.display = "none";
        
            // Show the selected option
            document.getElementById(selectedValue).style.display = "block";

  } else if (selectedValue === 'selectedMixedEightBedDormOutside') {
                // Hide all options except the selected one
                document.getElementById("femSix").style.display = "none";
                document.getElementById("femFour").style.display = "none";
                document.getElementById("mixEight").style.display = "none";
                document.getElementById("mixEightOut").style.display = "block";
                document.getElementById("priRoom").style.display = "none";
            
                // Show the selected option
                document.getElementById(selectedValue).style.display = "block";

  } else if (selectedValue === 'selectedPrivateQueenRoom') {
                    // Hide all options except the selected one
                    document.getElementById("femSix").style.display = "none";
                    document.getElementById("femFour").style.display = "none";
                    document.getElementById("mixEight").style.display = "none";
                    document.getElementById("mixEightOut").style.display = "none";
                    document.getElementById("priRoom").style.display = "block";
                
                    // Show the selected option
                    document.getElementById(selectedValue).style.display = "block";
  }
  updateGuestInformation(`${guests}`);
  // ... your other form submission logic here
});

/*// Cloudbeds 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());



function getAvailableRoomTypes(startDate, endDate, rooms, adults, children) {
const getAvailableRoomTypesapiUrl = `https://api.cloudbeds.com/api/v1.2/getAvailableRoomTypes`;
fetch (getAvailableRoomTypesapiUrl, {
    method : 'GET',
    headers: {
        'Authorization' :`Bearer ${cloudBedsapiKey}`,
        'Content-Type' : 'application/json'
    }
    data : {
        startDate : startDate
    }
})
.then (response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then (data => {
    console.log(data)
})
.catch(error => {
    console.error('Error:', error)
})
}

const bookForm = document.getElementById('availability');
const roomSelection = document.getElementById('roomSelection');
const adults = document.getElementById('numberOfGuests');
const startDate = document.getElementById('check_in');
const endDate = document.getElementById('check_out');
const rooms = 1;
const children = 1;
const rateOptions = document.getElementById('rateOptions');
bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const startDate = startDate.value;
    const adults = adults.value;
    const endDate = endDate.value;
    const selectedValue =roomSelection.value;
    let date1 = new Date (startDate);
    let date2 = new Date (endDate); 
    let differenceInTime = date2.getTime() - date1.getTime();
    let differenceInDays = Math.round(differenceInTime/(1000*3600*24))
    let guest = '';
    if (adults > 1) {
        let guest = `${adults} Guests`;
    } else {
        let guest = `${adults} Guest`
    }
    
    //API Call (cloudbeds)
    getAvailableRoomTypes(startDate, endDate, rooms, adults, children);

    document.getElementById('rateOptions').innerHTML = `
    <form>
        <div class="roomOptionPriceSelectionRow100">
            <input type='radio' id='normalRate'>
            <label>
                ${guest}  | Check-in: ${startDate} | Check-out: ${endDate}
            </label>
        </div>
        <div class="roomOptionPriceSelectionRow100">
            <input type='radio' id='studentRate'>
            <label>
                ${guest} (Student Discount - 10%) | Check-in: ${startDate} | Check-out: ${endDate}
            </label>
        </div>
        <div class="roomOptionPriceSelectionRow100">
            <input type='radio' id='studentRate'>
            <label>
                ${guest} (Elderly Discount - 15%) | Check-in: ${startDate} | Check-out: ${endDate}
            </label>
        </div>
    </form>
    `
    /*if (selectedValue ==='selectedAllOption') {}
    else if (selectedValue === 'selectedfemaleSixBedDorm') {}
    else if (selectedValue === 'selectedFemaleFourBedDorm') {}
    else if (selectedValue === 'selectedMixedEightBedDorm') {}
    else if (selectedValnue === 'selectedMixedEightBedDormOutside') {}
    else if (selectedValue === 'selectedPrivateQueenRoom') {}
})*/

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

/*
// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());



// getAvailableRoomTypes
const cloudBedsapiKey = '';
const getAvailableRoomTypesapiUrl = `https://api.cloudbeds.com/api/v1.2/getAvailableRoomTypes`;
fetch(getAvailableRoomTypesapiUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${cloudBedsapiKey}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error);
});

// postReservation
const postReservationapiUrl = `https://api.cloudbeds.com/api/v1.2/postReservation`;
fetch(postReservationapiUrl, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${cloudBedsapiKey}`,
    'Content-Type': 'application/json'
  }
})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Error:', error);
});

// yocoCheckout gateway
const yocoapiKey = '';
const yocoCheckoutapiUrl = `https://payments.yoco.com/api/checkouts`;
fetch(yocoCheckoutapiUrl, {
  headers: {
    'Authorization' : `Bearer ${yocoSecretKey}`
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
  })
  .catch(error => {
    console.error('Error:', error);
});

// postPayment
const postPaymentapiUrl = `https://api.cloudbeds.com/api/v1.2/postPayment`;
fetch(postPaymentapiUrl, {
  method: 'POST',
  header: {
    'Authorization' : `Bearer ${cloudBedsapiKey}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });
  */