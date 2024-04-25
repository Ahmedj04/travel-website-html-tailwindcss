// Initial rendering when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderSelectedTripType(); // Render the initial trip type selection
    setMenu(false);

    //dropdown functionality for selecting the passenger class
    // Default selected class
    let selectedClass = 'Business';

    // Function to handle class change
    function handleClassChange() {
        const selectedOption = document.getElementById('classSelect').value;
        selectedClass = selectedOption;
        updateSelectedClassText(selectedClass);
    }

    // Function to update the displayed class text
    function updateSelectedClassText(classText) {
        const selectedClassTextElement = document.getElementById('selectedClassText');
        selectedClassTextElement.textContent = `${classText} Passenger`;
    }

    // Initialize the selected class text
    updateSelectedClassText(selectedClass);

    // Event listener for dropdown change
    const classSelectElement = document.getElementById('classSelect');
    classSelectElement.addEventListener('change', handleClassChange);

});

// Function to toggle the mobile menu
function setMenu(menuState) {

    const mobileMenu = document.getElementById('mobileMenu');
    const darkTheme = document.getElementById('darkTheme');
    const menuContent = document.getElementById('menuContent');

    if (menuState) {
        // Show the mobile menu
        document.getElementById('menuBox').classList.remove("hideMenu")

        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');

        darkTheme.classList.remove('translate-x-full');
        darkTheme.classList.add('translate-x-0');

        menuContent.classList.remove('translate-x-full');
        menuContent.classList.add('translate-x-0', 'transition-delay');
    } else {
        // Hide the mobile menu
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');

        darkTheme.classList.remove('translate-x-0');
        darkTheme.classList.add('translate-x-full');

        menuContent.classList.remove('translate-x-0', 'transition-delay');
        menuContent.classList.add('translate-x-full');


    }
}

// Function to close the mobile menu
function closeMobileMenu() {
    setMenu(false); // Hide the mobile menu when the Close button is clicked
}




// Initialize selectTrip with default values
let selectTrip = {
    oneWay: 1,      // Set oneWay to 1 initially for purple color
    roundTrip: 0
};

function setSelectTrip(tripType) {
    // Update selectTrip based on the clicked tripType
    selectTrip = {
        oneWay: tripType === 'oneWay' ? 1 : 0,
        roundTrip: tripType === 'roundTrip' ? 1 : 0
    };

    // Render the updated trip type
    renderSelectedTripType();
}

function renderSelectedTripType() {
    const oneWaySpan = document.getElementById('oneWay');
    const roundTripSpan = document.getElementById('roundTrip');

    // Check if elements are found before updating classes
    if (oneWaySpan && roundTripSpan) {
        oneWaySpan.classList.toggle('text-purple-600', selectTrip.oneWay === 1);
        roundTripSpan.classList.toggle('text-purple-600', selectTrip.roundTrip === 1);
    } else {
        console.error('One or both spans not found.');
    }
}

function handleTripTypeClick(tripType) {
    setSelectTrip(tripType); // Call setSelectTrip to update selectTrip
}



// validation for flight from - flight to

// State variables
let flightFrom = '';
let flightTo = '';
let error = '';

// Event listeners for input changes
document.getElementById('flightFromInput').addEventListener('input', handleFlightFromChange);
document.getElementById('flightToInput').addEventListener('input', handleFlightToChange);


// Function to handle flight from input change
function handleFlightFromChange(event) {
    flightFrom = event.target.value;
}

// Function to handle flight to input change
function handleFlightToChange(event) {
    flightTo = event.target.value;
}

// Function to handle search button click
function handleSearch() {
    const errorText = document.getElementById('errorText');

    if (!flightFrom || !flightTo) {
        errorText.textContent = 'Please fill in both "Flight From" and "Flight To" fields.';
    } else {
        // Perform search functionality here (e.g., redirect)
        navigateToContactUs()  // Redirect to contactus.html
        errorText.textContent = ''; // Clear error message
    }
}

// navigation
function navigateToContactUs() {
    // Redirect to index.html
    window.location.href = 'contactUs.html';

}