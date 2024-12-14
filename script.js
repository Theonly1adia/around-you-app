document.addEventListener('DOMContentLoaded', function() {
    const enterAppButton = document.getElementById('enterApp');

    // Add event listener to the 'Explore Now' button
    enterAppButton.addEventListener('click', function() {
        // Redirect to the new search page
        window.location.href = 'search.html';
    });
});

<<<<<<< HEAD
const button = document.querySelector("#findButton"); // Correct selector

button.addEventListener("click", function() {
    let apiKey = localStorage.getItem("apiKey");

    if (!apiKey) {
        apiKey = prompt("Enter API Key:");
        if (apiKey) {
            localStorage.setItem("apiKey", apiKey);
        } else {
            alert("API Key is required to proceed.");
            return;
        }
    }

    searchHiddenGems(apiKey); // Pass the API key directly to the search function
});
=======
// Your Foursquare API key
const API_KEY = 'key';
>>>>>>> f483c83de5cf28d3a32e8d0fe6003774ccb4f1ed

// Function to search for quirky/weird places using Foursquare Places API
function searchHiddenGems(apiKey) {
    const location = document.getElementById('locationInput').value;

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    console.log(`Searching for hidden gems near: ${location}`);

    // Foursquare API URL
    const url = `https://api.foursquare.com/v3/places/search?query=hidden+gem&near=${location}&categories=13003,13065,10000&limit=10`;

    // Fetch data from Foursquare using API key from localStorage
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.results) {
            displayPlaces(data.results);
        } else {
            console.log('No hidden gem places found', data);
            alert('No hidden gem places found for this location.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        alert(`Search for hidden gem places was not successful: ${error.message}`);
    });
}

// Function to display the places on the webpage
function displayPlaces(places) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Clear previous results

    places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.classList.add('place-card', 'mt-3', 'p-3', 'border', 'rounded');

        const placeName = document.createElement('h3');
        placeName.innerText = place.name;
        placeCard.appendChild(placeName);

        resultsContainer.appendChild(placeCard);
    });
}
