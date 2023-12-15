// Qua definisco le variabili
const inputElement = document.getElementById("num");
const divisionButton2 = document.getElementById("d2");
const divisionButton3 = document.getElementById("d3");
const risultato = document.getElementById("result");

// Qua definisco le funzioni/operazioni 
function divisionePer2() {
    if (inputElement.value % 2 === 0) {
        risultato.textContent = "Sì";
    } else {
        risultato.textContent = "No";
    }
}

function divisionePer3() {
    if (inputElement.value % 3 === 0) {
        risultato.textContent = "Sì";
    } else {
        risultato.textContent = "No";
    }
}

// Qua chiamo le funzioni e le eseguo
divisionButton2.addEventListener('click', divisionePer2);
divisionButton3.addEventListener('click', divisionePer3);
