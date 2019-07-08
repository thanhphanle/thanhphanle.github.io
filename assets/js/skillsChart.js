google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
    var data = google.visualization.arrayToDataTable([
        ['Skill', 'Experience', { role: 'style' }],
        ['Java', 3, 'opacity: 0.8; color: #1e9ae0'],
        ['PostgreSQL', 2, 'opacity: 0.8; color: #1e9ae0'],
        ['CentOS', 1.5, 'opacity: 0.8; color: #1e9ae0'],
        ['ReactJs', 1, 'opacity: 0.8; color: #1e9ae0'],
        ['NodeJs', 0.5, 'opacity: 0.8; color: #1e9ae0'],
        ['Oracle', 1, 'opacity: 0.8; color: #1e9ae0'],
    ]);


    var options = {
        title: 'Skill Experience',
        chartArea: { width: '65%' },
        colors: ['#66CDAA', 'orange'],
        legend: { position: 'none' },
        bar: {
            groupWidth: '70%'
        },
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
            title: 'Year of experience',
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