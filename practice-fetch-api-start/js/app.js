//1. Fetch the data from the following API using the fetch function.


//  - retrieve the name, capital, population and flags for all countries.
//  - Convert the response to JSON.
//  - pass the data to the displayCountries function.
//  - Catch any errors and log them to the console.
async function getCountries(){
    //  - retrieve the name, capital, population and flags for all countries.
    try{
        const response = await fetch('https://restcountries.com/v3.1/all');
        if(!response.ok){
            throw new Error('Unable to fetch data');
        }

        // convert  response to json
        const data = await response.json();
        // 

        displayCountries(data);

    }catch(error){

        console.error('Error fetching data:', error.message);
    }

}

//2. Create a displayCountries function that takes in an array of countries.
//  - Loop over the array of countries.
//      - Create a div for each country.
//      - Add the country name and flag to the div with the provided HTML structure.
//      - Add the created div to the `.countries` container element.

function displayCountries(countries){

    const countriesContainer = document.querySelector('.countries');

    countries.forEach(country=> {
        // for each country , create a div elemet to hold the country info.
        const counDiv = documen.createElement('div');

        // add a CSS class for styling purposes
        counDiv.classList.add('country');

        // extract info about country
        const name = country.name;
        const flag = country.flag.svg

        counDiv.innerHTML = `<img src="${flag}" alt="$${name} Flag">`;

        // append the country div to the container
        countriesContainer.appendChild(counDiv);
    })

}


//3. Call the getCountries function.
// ini fetch and display process
getCountries();

