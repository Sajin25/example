const ctx = document.getElementById('classChart').getContext('2d');

const classChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
            'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
            'Plus One', 'Plus Two', 'Engineering'
        ],
        datasets: [{
            label: 'Duration (hours)',
            data: [
                100, 100, 100, 100, 100,
                100, 100, 100, 100, 100,
                120, 120, 150 // Example data
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});
