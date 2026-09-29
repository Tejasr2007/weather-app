const forecastContainer =
document.getElementById("forecastContainer");

const days = [
"Mon",
"Tue",
"Wed",
"Thu",
"Fri"
];

days.forEach(day => {

    forecastContainer.innerHTML += `
        <div class="forecast-card">
            <h3>${day}</h3>
            <p>☀️</p>
            <p>31°C</p>
        </div>
    `;

});