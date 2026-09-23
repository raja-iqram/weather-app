// Searchbar
let searchBar = document.querySelector('#search');

// Search Button
let button = document.querySelector('#submit');

// Temperature
let temp = document.querySelector('#temperature');

// City Field 
let city = document.querySelector('.cityname');

// Weather Icon 
let weatherIcon = document.querySelector('.weather-icon');

// Humidity
let humi = document.querySelector('.humidity');


// Cloud 
let getCloud = document.querySelector('.cloud');

// Rain 
let getRain = document.querySelector('.rain');

// Wind 
let getWind = document.querySelector('.wind');


/* ================= Dynamic City Name for Getting the data from API ================= */
let cityName = "Islamabad";


/* ================= Function For Make Weather App Dynamic ================= */

let getData = ()=>{

    button.addEventListener('click', (e)=>{
        e.preventDefault();

        cityName = searchBar.value;
        fetchData();
    })

}
getData();


/* ================= Fetch the Data from API ================= */
let fetchData = async ()=>{
    
    try{

    let weatherAPI = `https://api.weatherapi.com/v1/current.json?key=d270e8b4911a4450924204358262209&q=${cityName}&aqi=yes`;
    
    console.log('Loading Data');
    
    let weather = await fetch(weatherAPI);

    let response = await weather.json();

    console.log(response);

    /* ============= Temperature ============= */
    let temperature = response.current.temp_c;
    
    if(temperature < 15){
        weatherIcon.innerHTML = `<i class="bi bi-cloud-drizzle-fill"></i>`;
    }

    /* ============= City Name ============= */
    city.innerText = response.location.name;

    temp.innerText = `${Math.round(temperature)} °C`;

    /* ============= Humadity ============= */
    let humidity = `${response.current.humidity} %`;
    humi.innerText = humidity;

    /* ============= Cloud ============= */
    getCloud.innerText = `${response.current.cloud} %`;

    /* ============= Rain ============= */
    getRain.innerText = `${response.current.chance_of_rain} %`;

    /* ============= Wind ============= */
    getWind.innerText = `${response.current.wind_mph} mph`;

    }

    catch(error){
        console.log('Request cannot be completed');
        console.log(error);
    }
}

fetchData();

