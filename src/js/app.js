
// Sidebar

document.querySelector(".menu_toggle").addEventListener("click",function () {
    console.log(this);
    this.firstElementChild.classList.toggle("fa-times");
    document.querySelector(".sidebar").classList.toggle("d-none");
     
})

document.addEventListener("scroll", function () {
    if (!document.querySelector(".sidebar").classList.contains("d-none")) {
        document.querySelector(".sidebar").classList.toggle("d-none");
        document.querySelector(".menu_toggle").firstElementChild.classList.toggle("fa-times");
    }
})















// Chart js
const ctx = document.getElementById('myChart').getContext("2d");
var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(1, "rgba(55, 81, 255, 0.2)");
gradientFill.addColorStop(0, "rgba(55, 81, 255, 0)");
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
                label: 'Today',
                data: [22, 59, 37, 55, 50, 56],
                borderColor: 'rgba(55, 81, 255, 1)',
                backgroundColor: gradientFill,
                fill: true,
                borderWidth: 2,
                pointBorderColor: "rgba(55, 81, 255, 1)",
                pointHoverBackgroundColor: "#ffffff",
                pointHoverBorderColor: "#3751ff",
                pointHoverRadius: 4,
                pointHoverBorderWidth: 4,
                radius: 0,

            },
            {
                label: 'Yesturday',
                data: [55, 22, 50, 40, 37, 50],
                borderColor: '#DFE0EB',
                borderWidth: 2,
                pointBorderColor: "rgba(55, 81, 255, 1)",
                pointHoverBackgroundColor: "#ffffff",
                pointHoverBorderColor: "#3751ff",
                pointHoverRadius: 4,
                pointHoverBorderWidth: 4,
                radius: 0,

            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'as of 25 May 2019, 09:41 PM',
            },
        },
        interaction: {
            intersect: false
        },
        tension: 0.4,
        // layout: {
        //     padding: 32
        // },
        filler: {
            propagate: false,
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 60,
                position: 'right',
                ticks: {
                    fontSize: 10,
                    fontStyle: "normal",
                    color: '#9FA2B4',
                },
                grid: {
                    color: '#EBEDF0',
                    drawBorder: false
                },
                title: {
                    align: 'start'
                }
            },
            x: {
                display: false
            }
        }
    }
});

document.getElementById('today').children[0].style.backgroundColor = myChart.data.datasets[0].borderColor;
document.getElementById('yesturday').children[0].style.backgroundColor = myChart.data.datasets[1].borderColor;

console.log();