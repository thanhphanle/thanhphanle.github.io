google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['Skill', 'Experience', { role: 'style' }],
        ['Java', 3.5, 'opacity: 0.5; color: blue'],
        ['NodeJs', 0.5, 'opacity: 0.5; color: yellow'],
        ['ReactJs', 1, 'opacity: 0.5; color: orange'],
        ['PostgreSQL', 2, 'opacity: 0.5; color: red'],
        ['Oracle', 1, 'opacity: 0.5; color: green'],
        ['Linux', 1, 'opacity: 0.5; color: gray']
    ]);


    var options = {
        title: 'Skill Experience',
        chartArea: { width: '50%' },
        colors: ['#66CDAA','orange'],
        legend: {position: 'none'},
        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 12,
                auraColor: 'none',
                color: '#555'
            },
            boxStyle: {
                stroke: '#ccc',
                strokeWidth: 1,
                gradient: {
                    color1: '#f3e5f5',
                    color2: '#f3e5f5',
                    x1: '0%', y1: '0%',
                    x2: '100%', y2: '100%'
                }
            }
        },
        hAxis: {
            title: 'Year',
            minValue: 0,
            maxValue: 4,
        },
        /*
        vAxis: {
            title: 'City'
        }
        */
    };
    var chart = new google.visualization.BarChart(document.getElementById('skills_chart'));
    chart.draw(data, options);
}