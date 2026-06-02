import boxDetails from './boxDetails';

function createSidebar() {
  const sidebar = document.querySelector('#sidebar');
  if (!sidebar) return;

  // Clear out old elements if they exist to prevent duplicates
  sidebar.innerHTML = '';

  // 1. Create a container for our dropdown and search bar controls
  const controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('id', 'controls-container');
  controlsContainer.style.width = '100%';
  controlsContainer.style.display = 'flex';
  controlsContainer.style.flexDirection = 'column';
  controlsContainer.style.gap = '12px';
  controlsContainer.style.marginBottom = '20px';

  // 2. Create the dropdown selector element
  const unitSelector = document.createElement('select');
  unitSelector.setAttribute('id', 'unit-selector');
  unitSelector.style.width = '100%';
  unitSelector.style.padding = '10px';
  unitSelector.style.background = 'rgba(0, 0, 0, 0.4)';
  unitSelector.style.color = 'white';
  unitSelector.style.border = '1px solid rgba(255, 255, 255, 0.2)';
  unitSelector.style.borderRadius = '4px';
  unitSelector.style.fontSize = '16px';
  unitSelector.style.cursor = 'pointer';
  unitSelector.style.outline = 'none';

  const celsiusOption = document.createElement('option');
  celsiusOption.value = 'metric';
  celsiusOption.textContent = 'Celsius (°C)';

  const fahrenheitOption = document.createElement('option');
  fahrenheitOption.value = 'imperial';
  fahrenheitOption.textContent = 'Fahrenheit (°F)';

  unitSelector.appendChild(celsiusOption);
  unitSelector.appendChild(fahrenheitOption);
  controlsContainer.appendChild(unitSelector);
  
  // Attach the controls panel at the very top of the sidebar
  sidebar.appendChild(controlsContainer);

  // 3. Create Heading Title
  const weatherTitle = document.createElement('div');
  weatherTitle.textContent = 'Weather Details';
  weatherTitle.setAttribute('id', 'weather-title');
  weatherTitle.style.fontSize = '20px';
  weatherTitle.style.fontWeight = 'bold';
  weatherTitle.style.margin = '10px 0';
  sidebar.appendChild(weatherTitle);

  // 4. Create Weather Condition Info Rows
  const container = document.createElement('div');
  container.setAttribute('id', 'sidebar-container');
  
  container.appendChild(boxDetails('Feels Like', ''));
  container.appendChild(boxDetails('High', ''));
  container.appendChild(boxDetails('Low', ''));
  container.appendChild(boxDetails('Humidity', ''));
  container.appendChild(boxDetails('Pressure', ''));
  container.appendChild(boxDetails('Wind', ''));
  
  sidebar.appendChild(container);
}

export default createSidebar;