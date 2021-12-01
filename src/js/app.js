const ctx = document.getElementById('myChart').getContext("2d");
var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(1, "rgba(55, 81, 255, 0.2)");
gradientFill.addColorStop(0, "rgba(55, 81, 255, 0)");
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Nidal',
            data: [22, 59, 37, 55, 50, 56],

            borderColor: [
                'rgba(55, 81, 255, 1)',
            ],
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            pointBorderColor: "rgba(55, 81, 255, 1)",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#3751ff",
            pointHoverRadius: 4,
            pointHoverBorderWidth: 4,
            radius: 0,

        },
        {
            label: 'Touhami',
            data: [ 55, 22,50, 40, 37, 50],

            borderColor: [
                '#DFE0EB',
            ],
            borderWidth: 2,
            pointBorderColor: "rgba(55, 81, 255, 1)",
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#3751ff",
            pointHoverRadius: 4,
            pointHoverBorderWidth: 4,
            radius: 0,

        }]
    },
    options: {
        responsive: false,
        interaction: {
            intersect: false
        },
        tension: 0.4,
        layout: {
            padding: 32
        },
        filler: {
            propagate: false,
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 60
            },
            x: {
                display: false
            }


        }
    }
});