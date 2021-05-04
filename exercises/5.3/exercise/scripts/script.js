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
/* Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

    Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

    Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

    Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

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

/* Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

    Adicione a este botão a ID "btn-holiday" .

    Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
 */

function btnConstructor(btnID, btnText) {
    let button = document.createElement('button');
    let btnContainer = document.querySelector('.buttons-container');
    button.id = btnID;
    button.innerText = btnText;
    btnContainer.appendChild(button);
}

btnConstructor('btn-holiday', 'Feriados');

/* Exercício 3:

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
 */

let btnHolidays = document.getElementById('btn-holiday');
let backgroundColorIsApplied = false; 

btnHolidays.addEventListener('click', function () {
    let holidayItensList = document.getElementsByClassName('holiday');


    if (backgroundColorIsApplied) {
        for (let holiday of holidayItensList) {
            holiday.style.background = 'none';
        };
        backgroundColorIsApplied = false;
    } else {
        for (let holiday of holidayItensList) {
            holiday.style.background = 'white';
        };
        backgroundColorIsApplied = true;
    };
});

/* Exercício 4:

Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

    Adicione a este botão o ID "btn-friday" .

    Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */


btnConstructor('btn-friday', 'Sexta-feira');

/* Exercício 5:

Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

    É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

let btnFriday = document.getElementById('btn-friday');
let textIsFriday = false;

btnFriday.addEventListener('click', function () {
    let fridaysList = document.getElementsByClassName('friday');
    
    if (textIsFriday) {
        for (let friday in fridaysList) {
            fridaysList[friday].innerText = dezFridaysList[friday];
        };
        textIsFriday = false;
    } else {
        for (let friday of fridaysList) {
            friday.innerText = 'Sexta-feira';
        };
        textIsFriday = true;
    };
});

/* Exercício 6:

Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. */

function eventListApplier(elements, event, action) {
    for (let element of elements) {
        element.addEventListener(event, action);
    };
};

let daysListItens = document.getElementsByClassName('day');

function textZoomIn(event) {
    event.target.style.fontSize = '25px';
    event.target.style.margin = '0px';
};

function textZoomOut(event) {
    event.target.style.fontSize = '20px';
    event.target.style.margin = '5px 0px';
};

eventListApplier(daysListItens, 'mouseover', textZoomIn);
eventListApplier(daysListItens, 'mouseout', textZoomOut);

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function taskCreator(taskName) {
    let tasksContainer = document.getElementsByClassName('my-tasks')[0];
    let task = document.createElement('span');
    task.innerText = taskName;
    tasksContainer.appendChild(task);
};

taskCreator('Cozinhar');

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

    O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

    O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" . */

function legendCreator(color) {
    let tasksContainer = document.getElementsByClassName('my-tasks')[0];
    let legend = document.createElement('div');
    legend.className = 'task';
    legend.style.background = color;
    tasksContainer.appendChild(legend);
};

legendCreator('orangered');

/* Exercício 9:

Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.

    Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada. */

let taskIsSelected = false;

function taskSelector(event) {
    if (taskIsSelected) {
        event.target.className = 'task';
        taskIsSelected = false;
    } else {
        event.target.className = 'task selected';
        taskIsSelected = true;
    };
};

let legend = document.getElementsByClassName('task')[0];
legend.addEventListener('click', taskSelector);