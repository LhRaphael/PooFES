function addExercise() {
    const container = document.getElementById('exercise-container');

    const entry = document.createElement('div');
    entry.className = 'exercise-entry';

    entry.innerHTML = `
        <input type="text" placeholder="Nome do exercício" />
        <input type="number" placeholder="Séries" min="1" />
        <input type="number" placeholder="Repetições" min="1" />
        <input type="checkbox" class="exercise-check" onchange="toggleCheck(this)" />
    `;

    container.appendChild(entry);
}

function toggleExercises() {
    const container = document.getElementById('exercise-container');
    const button = document.querySelector('.toggle-button');
    container.classList.toggle('collapsed');
    button.textContent = container.classList.contains('collapsed') ? '▲' : '▼';
}

let currentDate = new Date();

function renderCalendar(date) {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("calendar-days");

    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();

    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;
    daysContainer.innerHTML = "";

    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay();

    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startingDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= totalDays; day++) {
        const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        daysContainer.innerHTML += `<div class="${isToday ? 'today' : ''}">${day}</div>`;
    }
}

function changeMonth(offset) {
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar(currentDate);
}

document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(currentDate);
});
