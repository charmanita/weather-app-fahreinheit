// ============================================
// WEATHER APP INDEX.JS
// ============================================

import loadPage from './loadPage';
import './style.css';
import loadMainWeatherContainer from './loadMainWeatherContainer';
import createSidebar from './createSidebar';

let currentUnits = 'metric'; // Default: Celsius
let currentCity = 'Tokyo';   // Track the last successfully searched city

// ============================================
// WEATHER API FETCH
// ============================================
async function getWeather(location, units) {
    try {
        let response;
        if (typeof location === 'string') {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=2a3e6417c89470aaa7587fa599ac7255`);
        } else if (Array.isArray(location)) {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=${units}&appid=2a3e6417c89470aaa7587fa599ac7255`);
        } else {
            throw new Error("Invalid location parameters");
        }

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        throw new Error(error.message || "Weather data could not be fetched.");
    }
}

// ============================================
// DROPDOWN CREATION FUNCTION
// ============================================
function appendUnitDropdown(sidebarElement) {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.setAttribute('id', 'dropdown-container');
    dropdownContainer.style.width = '100%';
    dropdownContainer.style.marginBottom = '20px';

    const unitSelector = document.createElement('select');
    unitSelector.setAttribute('id', 'unit-selector');
    
    // Style dropdown inline to ensure visibility over backgrounds
    unitSelector.style.width = '100%';
    unitSelector.style.padding = '10px';
    unitSelector.style.background = 'rgba(0, 0, 0, 0.5)';
    unitSelector.style.color = 'white';
    unitSelector.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    unitSelector.style.borderRadius = '4px';
    unitSelector.style.fontSize = '16px';
    unitSelector.style.cursor = 'pointer';
    unitSelector.style.outline = 'none';
    
    const celsiusOption = document.createElement('option');
    celsiusOption.value = 'metric';
    celsiusOption.textContent = 'Celsius (°C)';
    celsiusOption.style.background = '#1e1e2f';
    
    const fahrenheitOption = document.createElement('option');
    fahrenheitOption.value = 'imperial';
    fahrenheitOption.textContent = 'Fahrenheit (°F)';
    fahrenheitOption.style.background = '#1e1e2f';
    
    unitSelector.appendChild(celsiusOption);
    unitSelector.appendChild(fahrenheitOption);
    
    unitSelector.value = currentUnits;
    
    // Update unit states and refresh UI smoothly
    unitSelector.addEventListener('change', (e) => {
        currentUnits = e.target.value;
        setData(currentCity); 
    });
    
    dropdownContainer.appendChild(unitSelector);
    
    // Inserts the dropdown cleanly at the top of the sidebar panel
    sidebarElement.insertBefore(dropdownContainer, sidebarElement.firstChild);
}

// ============================================
// WEATHER DISPLAY FUNCTION
// ============================================
async function setData(location) {
    try {
        const weatherData = await getWeather(location, currentUnits);
        
        const unitSuffix = currentUnits === 'metric' ? '°C' : '°F';
        const windSuffix = currentUnits === 'metric' ? 'm/s' : 'mph';

        // Elements are queried here safely AFTER they are attached to the page body
        const tempDiv = document.querySelector('#temperature');
        const cityDiv = document.querySelector('#city');
        const iconImg = document.querySelector('#weather-icon');
        const weatherTextDiv = document.querySelector('#weather');

        if (tempDiv) tempDiv.textContent = `${Math.ceil(weatherData.main.temp)}${unitSuffix}`;
        if (cityDiv) cityDiv.textContent = weatherData.name;
        if (iconImg) iconImg.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        if (weatherTextDiv) weatherTextDiv.textContent = weatherData.weather[0].main;
        
        currentCity = weatherData.name;
        populateSidebar(weatherData, unitSuffix, windSuffix);
        
        const date = getDate(weatherData.timezone);
        setTime(date);

    } catch (error) {
        console.error("Error setting weather display:", error);
    }
}

// ============================================
// TIME HANDLERS
// ============================================
function getDate(timeOffSet) {
    const date = new Date();
    const localTime = date.getTime();
    const localOffset = date.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const location = utc + (1000 * timeOffSet);
    return new Date(location);
}

function setTime(date) {
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    
    const hourDiv = document.querySelector('#hour');
    const minuteDiv = document.querySelector('#minute');
    const dayDiv = document.querySelector('#day');
    const dateDiv = document.querySelector('#date');
    const monthDiv = document.querySelector('#month');
    
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    if (hourDiv) hourDiv.textContent = (hours.length >= 2) ? hours : `0${hours}`;
    if (minuteDiv) minuteDiv.textContent = (minutes.length >= 2) ? `:${minutes}` : `:0${minutes}`;
    if (dayDiv) dayDiv.textContent = `${weekday[date.getDay()]}-`;
    if (dateDiv) dateDiv.textContent = `${date.getDate()}-`;
    if (monthDiv) monthDiv.textContent = months[date.getMonth()];
}

// ============================================
// SIDEBAR POPULATE
// ============================================
function populateSidebar(weatherData, unitSuffix, windSuffix) {
    const boxValues = document.querySelectorAll('#sidebar-container #value'); 
    const data = [
        `${Math.ceil(weatherData.main.feels_like)}${unitSuffix}`, 
        `${Math.ceil(weatherData.main.temp_max)}${unitSuffix}`, 
        `${Math.ceil(weatherData.main.temp_min)}${unitSuffix}`,
        `${weatherData.main.humidity}%`, 
        `${weatherData.main.pressure} hPa`,
        `${weatherData.wind.speed} ${windSuffix}`
    ];
    
    for (let index = 0; index < data.length && index < boxValues.length; index += 1) {
        boxValues[index].textContent = data[index];
    }
}

// ============================================
// GEOLOCATION ROUTER
// ============================================
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                await setData([lat, lon]);
            },
            (error) => {
                setData('Tokyo');
            }
        );
    } else {
        setData('Tokyo');
    }
}

// ============================================
// APP SETUP MOUNT LIFE-CYCLE
// ============================================
document.body.appendChild(loadPage());

const mainContainer = document.querySelector('#main');
const sidebarContainer = document.querySelector('#sidebar');

if (mainContainer) {
    mainContainer.appendChild(loadMainWeatherContainer());
}

if (sidebarContainer) {
    createSidebar(); // Sets up your info row divs from your module first
    appendUnitDropdown(sidebarContainer); // Injects our new unit selection dropdown immediately above them
}

getLocation();