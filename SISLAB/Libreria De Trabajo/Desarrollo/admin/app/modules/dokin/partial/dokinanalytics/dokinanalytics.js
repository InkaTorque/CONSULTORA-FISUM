angular.module('dokin').controller('DokinanalyticsCtrl', function ($scope, $timeout) {

    $scope.Analitycs = {
        active: "map",
        changeChart: function (param) {
            var that = this;
            this.active = param;
            $timeout(function () {
                switch (param) {
                    case "line":
                        that.lineChart()
                        break;
                    case "map":
                        that.drawRegionsMap();
                        break;
                    case "hbar":
                        that.drawHbar();
                        break;
                    case "bar":
                        that.barChart();
                        break;
                    case "donut":
                        that.donutChart()
                }
            })
        },
        lineChart: function () {
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Guardians of the Galaxy');
            data.addColumn('number', 'The Avengers');
            data.addColumn('number', 'Transformers: Age of Extinction');
            data.addRows([
                [1, 37.8, 80.8, 41.8],
                [2, 30.9, 69.5, 32.4],
                [3, 25.4, 57, 25.7],
                [4, 11.7, 18.8, 10.5],
                [5, 11.9, 17.6, 10.4],
                [6, 8.8, 13.6, 7.7],
                [7, 7.6, 12.3, 9.6],
                [8, 12.3, 29.2, 10.6],
                [9, 16.9, 42.9, 14.8],
                [10, 12.8, 30.9, 11.6],
                [11, 5.3, 7.9, 4.7],
                [12, 6.6, 8.4, 5.2],
                [13, 4.8, 6.3, 3.6],
                [14, 4.2, 6.2, 3.4],
                [30, 4.2, 6.2, 3.4]
            ]);

            var options = {
                chart: {
                    title: 'Box Office Earnings in First Two Weeks of Opening',
                    //subtitle: 'in millions of dollars (USD)'
                },
                width: 900,
                height: 500,
                axes: {
                    x: {
                        0: {side: 'top'}
                    }
                }
            };
            var chart = new google.charts.Line(document.getElementById('line'));
            chart.draw(data, options);

            //Circulo:
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Usuarios', 11],
                ['Retorno', 7]
            ]);
            var options = {
                title: 'Usuarios / Usuarios que retornaron'
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
        },
        drawRegionsMap: function () {
            var data = google.visualization.arrayToDataTable([
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ]);
            var options = {};
            var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
            chart.draw(data, options);
        },
        drawHbar: function () {
            var data = new google.visualization.arrayToDataTable([
                ['Visitas', 'Cantidad'],
                ["Lunes", 44],
                ["Martes", 31],
                ["Miercoles", 12],
                ["Jueves", 10],
                ['Viernes', 3],
                ['Sabado', 3],
                ['Domingo', 3]
            ]);

            var options = {
                title: 'Chess opening moves',
                width: 900,
                legend: {position: 'none'},
                chart: {
                    title: 'Chess opening moves',
                    subtitle: 'popularity by percentage'
                },
                bars: 'horizontal', // Required for Material Bar Charts.
                axes: {
                    x: {
                        0: {side: 'top', label: 'Cantidad'} // Top x-axis.
                    }
                },
                bar: {groupWidth: "90%"}
            };

            var chart = new google.charts.Bar(document.getElementById('dual_x_div'));
            chart.draw(data, options);
        },
        donutChart: function () {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);

            var options = {
                title: 'Alcance de agentes',
                pieHole: 0.4,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(data, options);
        },
        barChart: function () {
            var data = new google.visualization.arrayToDataTable([
                ['Move', 'Percentage'],
                ["King's pawn (e4)", 44],
                ["Queen's pawn (d4)", 31],
                ["Knight to King 3 (Nf3)", 12],
                ["Queen's bishop pawn (c4)", 10],
                ['Other', 3]
            ]);

            var options = {
                title: 'Chess opening moves',
                width: 900,
                legend: {position: 'none'},
                chart: {subtitle: 'popularity by percentage'},
                axes: {
                    x: {
                        0: {side: 'top', label: 'White to move'} // Top x-axis.
                    }
                },
                bar: {groupWidth: "90%"}
            };

            var chart = new google.charts.Bar(document.getElementById("bar"));
            // Convert the Classic options to Material options.
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    };

    $timeout(function () {
        $scope.Analitycs.changeChart('line');
    })


});
