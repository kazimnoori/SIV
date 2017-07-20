const CHART = document.getElementById ("report");
var lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["Oct-2016", "Nov-2016", "Dec-2016", "Jan-2017", "Feb-2017", "Mar-2017", "Apr-2017", "May-2017", "Jun-2017", "Jul-2017", "Aug-2017"],
        datasets: [
            {
                label: 'Afghan SIVs',
                fill: false,
                borderColor: '#25967a',
                pointHoverBackgroundColor: '#25967a',
                legend: "Afghan SIV",
                data: [1461, 1534, 1335, 1672, 1813, 1697, 1000, 1473, 1360, 195]
            }, 
            {
                label: 'Iraqi SIVs',
                pointHoverBackgroundColor: '#ea173e',
                fill: false,
                borderColor: '#ea173e',
                data: [233, 290, 239, 174, 284, 204, 155, 191, 178, 56],
            }
                ]
        },
    options: {
        legend: {
            display: true,
                }
            }

});
