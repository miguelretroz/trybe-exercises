function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dezHolidaysList = [24, 25, 31];
const dezFridaysList = [4, 11, 18, 25];

function holidayChecker(day, holidaysList) {
    for (let holiday of holidaysList) {
        if (day === holiday) {
            return true;
        };
    };
    return false;
};

function fridaysChecker(day, fridaysList) {
    for (let friday of fridaysList) {
        if (day === friday) {
            return true;
        };
    };
    return false;
};

function createCalendarDays(monthDayList) {
    
    let daysList = document.getElementById('days');

    for (let day of monthDayList) {
        let dayItem = document.createElement('li');
        dayItem.className = 'day';
        if (holidayChecker(day, dezHolidaysList)) {
            dayItem.className += ' holiday';
        };
        if (fridaysChecker(day, dezFridaysList)) {
            dayItem.className += ' friday';
        };
        dayItem.innerText = day;
        daysList.appendChild(dayItem);
    };
};

createCalendarDays(dezDaysList);
  