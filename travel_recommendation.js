const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");

function searchDestination() {
    const input = document.getElementById('conditionInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            let results = [];

            if (input === 'beach' || input === 'beaches') {
                results = data.beaches;
            } else if (input === 'temple' || input === 'temples') {
                results = data.temples;
            } else if (input === 'country' || input === 'countries') {
                data.countries.forEach(country => {
                    results = results.concat(country.cities); // combine all cities under countries
                });
            } else {
                resultDiv.innerHTML = `<p>No results found for "${input}".</p>`;
                return;
            }

            // Display each result
            results.forEach(place => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.border = '1px solid #ccc';
                card.style.padding = '10px';
                card.style.marginBottom = '15px';
                card.style.borderRadius = '10px';
                card.style.backgroundColor = '#fff';

                const img = document.createElement('img');
                img.src = place.imageUrl;
                img.alt = place.name;
                img.style.width = '100%';
                img.style.borderRadius = '10px';

                const name = document.createElement('h3');
                name.textContent = place.name;

                const desc = document.createElement('p');
                desc.textContent = place.description;

                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(desc);

                resultDiv.appendChild(card);
            });
        })
        .catch(error => {
            resultDiv.innerHTML = `<p>Error loading recommendations. Please try again.</p>`;
            console.error(error);
        });
}

function clearDestination(){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

}
btnSearch.addEventListener('click',searchDestination);
btnSearch.addEventListener('click',clearDestination);


