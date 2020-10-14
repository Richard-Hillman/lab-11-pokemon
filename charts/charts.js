import { getFromLocalStorage } from '../utils.js';
const ray = getFromLocalStorage('RESULTS');
const encounterBox = document.querySelector('#encount');
const capturedBox = document.querySelector('#capped');
const resetButton = document.querySelector('#reset');
// Mapping from local storage array and returning items to a const

const pokeName = ray.map((item) => {
    return item.pokeName;
});

const encountered = ray.map((item) => {
    return item.encountered;
});
console.log(encountered);

const captured = ray.map((item) => {
    return item.captured;
});       

// encounterBox.textContent = encountered;
// capturedBox.textContent = captured;

// chart 

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Encounters',
            backgroundColor: 'rgb(255,200,100,50)',
            borderColor: 'rgb(2,2,10,50)',
            borderWidth: 1,
            data: encountered,
        }]
    },
    options: {
        legend: {
            
        },
        
        scales: {
            // xAxes: [{ stacked: true }],
            yAxes: [{ stacked: false,
                ticks: { beginAtZero: true,
                    stepSize: 1 }, },  
            ]
        }
    }
});


var ctx = document.getElementById('myChart2').getContext('2d');

var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: pokeName,
        datasets: [{
            label: 'Captured',
            backgroundColor: 'rgb(255,200,100,50)',
            borderColor: 'rgb(200,2,100,50)',
            borderWidth: 1,
            data: captured,
        }]
    },
    options: {
        scales: {
            // xAxes: [{ stacked: true }],
            yAxes: [{ stacked: false,
                ticks: { beginAtZero: true,
                   
                    stepSize: 1 },  
            }]
        }
    
    }
});

resetButton.addEventListener('click', () => {

    localStorage.clear();
    window.location.href = '../index.html';
})