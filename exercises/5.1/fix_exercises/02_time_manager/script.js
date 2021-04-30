let header = document.getElementById('header-container');
let emergencySection = document.getElementsByClassName('emergency-tasks')[0];
let notEmergencySection = document.querySelector('.no-emergency-tasks');
let emergencyTitle = document.querySelectorAll('.emergency-tasks h3');
let noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');

header.style.background = 'green';

emergencySection.style.background = 'pink';

notEmergencySection.style.background = 'yellow';

emergencyTitle[0].style.background = "purple";
emergencyTitle[1].style.background = "purple";

noEmergencyTitle[0].style.background = 'black';
noEmergencyTitle[1].style.background = 'black';