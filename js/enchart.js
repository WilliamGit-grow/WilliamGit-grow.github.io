  var chart;

  var consumptionData =
                   [
    {
        "date": "7/1",
        "value": 58,
        "target": 53,
        "k-means": 43,
        "forest": 57,
        "color": "#FF0F00"
    },
    {
        "date": "7/2",
        "value": 48.2,
        "target": 54,
        "k-means": 45,
        "forest": 58,
        "color": "#FF0F00"
    },
    {
        "date": "7/3",
        "value": 47.8,
        "target": 49,
        "k-means": 42,
        "forest": 59,
        "color": "#FF0F00"
    },
    {
        "date": "7/4",
        "value": 48.6,
        "target": 45,
        "k-means": 46,
        "forest": 55,
        "color": "#FF0F00"
    },
    {
        "date": "7/5",
        "value": 47.9,
        "target": 42,
        "k-means": 44,
        "forest": 52,
        "color": "#FF0F00"
    },
    {
        "date": "7/6",
        "value": 48.5,
        "target": 59,
        "k-means": 50,
        "forest": 49,
        "color": "#FF0F00"
    },
    {
        "date": "7/7",
        "value": 48.1,
        "target": 51,
        "k-means": 48,
        "forest": 48,
        "color": "#FF0F00"
    },
    {
        "date": "7/8",
        "value": 49.3,
        "target": 57,
        "k-means": 51,
        "forest": 47,
        "color": "#FF0F00"
    },
    {
        "date": "7/9",
        "value": 48.9,
        "target": 48,
        "k-means": 47,
        "forest": 50,
        "color": "#FF0F00"
    },
    {
        "date": "7/10",
        "value": 48.3,
        "target": 53,
        "k-means": 49,
        "forest": 53,
        "color": "#FF0F00"
    },
    {
        "date": "7/11",
        "value": 49.2,
        "target": 43,
        "k-means": 54,
        "forest": 54,
        "color": "#FF0F00"
    },
    {
        "date": "7/12",
        "value": 47.7,
        "target": 41,
        "k-means": 52,
        "forest": 51,
        "color": "#FF0F00"
    },
    {
        "date": "7/13",
        "value": 48.7,
        "target": 60,
        "k-means": 56,
        "forest": 56,
        "color": "#FF0F00"
    },
    {
        "date": "7/14",
        "value": 49.1,
        "target": 56,
        "k-means": 58,
        "forest": 58,
        "color": "#FF0F00"
    },
    {
        "date": "7/15",
        "value": 47.6,
        "target": 50,
        "k-means": 57,
        "forest": 59,
        "color": "#FF0F00"
    },
    {
        "date": "7/16",
        "value": 49,
        "target": 47,
        "k-means": 59,
        "forest": 57,
        "color": "#FF0F00"
    },
    {
        "date": "7/17",
        "value": 48.4,
        "target": 45,
        "k-means": 49,
        "forest": 56,
        "color": "#FF0F00"
    },
    {
        "date": "7/18",
        "value": 49.4,
        "target": 58,
        "k-means": 47,
        "forest": 55,
        "color": "#FF0F00"
    },
    {
        "date": "7/19",
        "value": 47.5,
        "target": 44,
        "k-means": 46,
        "forest": 54,
        "color": "#FF0F00"
    },
    {
        "date": "7/20",
        "value": 48.8,
        "target": 52,
        "k-means": 48,
        "forest": 53,
        "color": "#FF0F00"
    },
    {
        "date": "7/21",
        "value": 48.2,
        "target": 47,
        "k-means": 49,
        "forest": 52,
        "color": "#FF0F00"
    },
    {
        "date": "7/22",
        "value": 48.6,
        "target": 55,
        "k-means": 50,
        "forest": 51,
        "color": "#FF0F00"
    },
    {
        "date": "7/23",
        "value": 47.8,
        "target": 46,
        "k-means": 52,
        "forest": 50,
        "color": "#FF0F00"
    },
    {
        "date": "7/24",
        "value": 48.9,
        "target": 49,
        "k-means": 53,
        "forest": 49,
        "color": "#FF0F00"
    },
    {
        "date": "7/25",
        "value": 48.1,
        "target": 43,
        "k-means": 54,
        "forest": 47,
        "color": "#FF0F00"
    },
    {
        "date": "7/26",
        "value": 49.5,
        "target": 57,
        "k-means": 58,
        "forest": 46,
        "color": "#FF0F00"
    },
    {
        "date": "7/27",
        "value": 47.7,
        "target": 54,
        "k-means": 59,
        "forest": 45,
        "color": "#FF0F00"
    },
    {
        "date": "7/28",
        "value": 48.3,
        "target": 42,
        "k-means": 57,
        "forest": 44,
        "color": "#FF0F00"
    },
    {
        "date": "7/29",
        "value": 49.1,
        "target": 56,
        "k-means": 55,
        "forest": 42,
        "color": "#FF0F00"
    },
    {
        "date": "7/30",
        "value": 48,
        "target": 49,
        "k-means": 53,
        "forest": 41,
        "color": "#FF0F00"
    },
    {
        "date": "7/31",
        "value": 48.4,
        "target": 47,
        "k-means": 52,
        "forest": 59,
        "color": "#FF0F00"
    },
    {
        "date": "8/1",
        "value": 49.2,
        "target": 48,
        "k-means": 50,
        "forest": 58,
        "color": "#FF0F00"
    },
    {
        "date": "8/2",
        "value": 47.6,
        "target": 52,
        "k-means": 48,
        "forest": 57,
        "color": "#FF0F00"
    },
    {
        "date": "8/3",
        "value": 48.8,
        "target": 44,
        "k-means": 49,
        "forest": 56,
        "color": "#FF0F00"
    },
    {
        "date": "8/4",
        "value": 49.3,
        "target": 59,
        "k-means": 53,
        "forest": 55,
        "color": "#FF0F00"
    },
    {
        "date": "8/5",
        "value": 47.5,
        "target": 41,
        "k-means": 55,
        "forest": 54,
        "color": "#FF0F00"
    },
    {
        "date": "8/6",
        "value": 48.7,
        "target": 60,
        "k-means": 54,
        "forest": 52,
        "color": "#FF0F00"
    },
    {
        "date": "8/7",
        "value": 48.1,
        "target": 49,
        "k-means": 52,
        "forest": 51,
        "color": "#FF0F00"
    },
    {
        "date": "8/8",
        "value": 49.4,
        "target": 56,
        "k-means": 49,
        "forest": 50,
        "color": "#FF0F00"
    },
    {
        "date": "8/9",
        "value": 48.2,
        "target": 45,
        "k-means": 47,
        "forest": 49,
        "color": "#FF0F00"
    },
    {
        "date": "8/10",
        "value": 47.9,
        "target": 43,
        "k-means": 46,
        "forest": 48,
        "color": "#FF0F00"
    },
    {
        "date": "8/11",
        "value": 49,
        "target": 58,
        "k-means": 45,
        "forest": 47,
        "color": "#FF0F00"
    },
    {
        "date": "8/12",
        "value": 48.5,
        "target": 53,
        "k-means": 43,
        "forest": 46,
        "color": "#FF0F00"
    },
    {
        "date": "8/13",
        "value": 47.7,
        "target": 42,
        "k-means": 44,
        "forest": 44,
        "color": "#FF0F00"
    },
    {
        "date": "8/14",
        "value": 49.1,
        "target": 55,
        "k-means": 42,
        "forest": 43,
        "color": "#FF0F00"
    },
    {
        "date": "8/15",
        "value": 48.3,
        "target": 46,
        "k-means": 41,
        "forest": 45,
        "color": "#FF0F00"
    },
    {
        "date": "8/16",
        "value": 48.6,
        "target": 54,
        "k-means": 40,
        "forest": 47,
        "color": "#FF0F00"
    },
    {
        "date": "8/17",
        "value": 49.2,
        "target": 50,
        "k-means": 39,
        "forest": 46,
        "color": "#FF0F00"
    },
    {
        "date": "8/18",
        "value": 47.8,
        "target": 44,
        "k-means": 38,
        "forest": 48,
        "color": "#FF0F00"
    },
    {
        "date": "8/19",
        "value": 48.9,
        "target": 57,
        "k-means": 36,
        "forest": 49,
        "color": "#FF0F00"
    },
    {
        "date": "8/20",
        "value": 48.4,
        "target": 46,
        "k-means": 35,
        "forest": 51,
        "color": "#FF0F00"
    },
    {
        "date": "8/21",
        "value": 49.3,
        "target": 51,
        "k-means": 37,
        "forest": 52,
        "color": "#FF0F00"
    },
    {
        "date": "8/22",
        "value": 47.6,
        "target": 42,
        "k-means": 39,
        "forest": 53,
        "color": "#FF0F00"
    },
    {
        "date": "8/23",
        "value": 48.8,
        "target": 59,
        "k-means": 40,
        "forest": 54,
        "color": "#FF0F00"
    },
    {
        "date": "8/24",
        "value": 48.1,
        "target": 48,
        "k-means": 42,
        "forest": 55,
        "color": "#FF0F00"
    },
    {
        "date": "8/25",
        "value": 49.5,
        "target": 55,
        "k-means": 43,
        "forest": 57,
        "color": "#FF0F00"
    },
    {
        "date": "8/26",
        "value": 47.7,
        "target": 47,
        "k-means": 45,
        "forest": 58,
        "color": "#FF0F00"
    },
    {
        "date": "8/27",
        "value": 48.3,
        "target": 44,
        "k-means": 47,
        "forest": 59,
        "color": "#FF0F00"
    },
    {
        "date": "8/28",
        "value": 49,
        "target": 51,
        "k-means": 49,
        "forest": 57,
        "color": "#FF0F00"
    },
    {
        "date": "8/29",
        "value": 48.4,
        "target": 53,
        "k-means": 51,
        "forest": 56,
        "color": "#FF0F00"
    },
    {
        "date": "8/30",
        "value": 47.9,
        "target": 40,
        "k-means": 53,
        "forest": 54,
        "color": "#FF0F00"
    },
    {
        "date": "8/31",
        "value": 49.1,
        "target": 56,
        "k-means": 55,
        "forest": 52,
        "color": "#FF0F00"
    }
];


            
            AmCharts.ready(function () {
            	 // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = consumptionData;
                chart.categoryField = "date";
                chart.startDuration = 1;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 45; // this line makes category values to be rotated
                categoryAxis.gridPosition = "start";


                // GRAPH
                // var graph = new AmCharts.AmGraph();
                // graph.valueField = "value";
                // graph.colorField = "color";
                // graph.balloonText = "<b>[[category]]: [[value]]</b>";
                // graph.type = "line";
                // graph.lineAlpha = 0;
                // graph.fillAlphas = 1;
                // chart.addGraph(graph);

                var graph = new AmCharts.AmGraph();
                graph.type = "line";
                graph.title = "SVM回归";
                graph.lineColor = "#FF0000"; // 将线条颜色改为红色
                graph.valueField = "value";
                graph.lineThickness = 2;
                graph.bullet = "round";
                graph.bulletBorderThickness = 0.1;
                graph.bulletBorderColor = "#FF0000"; // 将弹出框的边框颜色也改为红色
                graph.bulletBorderAlpha = 1;
                // graph.bulletColor = "#ffffff";
                graph.dashLengthField = "dashLengthLine";
                graph.balloonText = "<span style='font-size:13px;'>SVM回归:<b>[[value]]</b> [[additional]]</span>";
                chart.addGraph(graph);

                
                // line
                var graph2 = new AmCharts.AmGraph();
                graph2.type = "line";
                graph2.title = "BP神经网络";
                graph2.lineColor = "#fcd202";
                graph2.valueField = "target";
                graph2.lineThickness = 2;
                graph2.bullet = "round";
                graph2.bulletBorderThickness = 0.1;
                graph2.bulletBorderColor = "#fcd202";
                graph2.bulletBorderAlpha = 1;
                // graph2.bulletColor = "#ffffff";
                graph2.dashLengthField = "dashLengthLine";
                graph2.balloonText = "<span style='font-size:13px;'>BP神经网络:<b>[[value]]</b> [[additional]]</span>";
                chart.addGraph(graph2);

                var graph3 = new AmCharts.AmGraph();
                graph3.type = "line";
                graph3.title = "k-means回归";
                graph3.lineColor = "#0000FF"; // 将线条颜色改为蓝色
                graph3.valueField = 'k-means'; // 这里根据您的数据字段调整
                graph3.lineThickness = 2;
                graph3.bullet = "round";
                graph3.bulletBorderThickness = 0.1;
                graph3.bulletBorderColor = "#0000FF"; // 将弹出框的边框颜色也改为蓝色
                graph3.bulletBorderAlpha = 1;
                // graph3.bulletColor = "#ffffff";
                graph3.dashLengthField = "dashLengthLine"; // 这里根据您的数据字段调整
                graph3.balloonText = "<span style='font-size:13px;'>k-means回归:<b>[[value]]</b> [[additional]]</span>"; // 这里根据您的数据字段调整
                chart.addGraph(graph3);

                var graph4 = new AmCharts.AmGraph();
                graph4.type = "line";
                graph4.title = "随机森林";
                graph4.lineColor = "#00CC00"; // 将线条颜色改为蓝色
                graph4.valueField = 'forest'; // 这里根据您的数据字段调整
                graph4.lineThickness = 2;
                graph4.bullet = "round";
                graph4.bulletBorderThickness = 0.1;
                graph4.bulletBorderColor = "#00CC00"; // 将弹出框的边框颜色也改为蓝色
                graph4.bulletBorderAlpha = 1;
                // graph4.bulletColor = "#ffffff";
                graph4.dashLengthField = "dashLengthLine"; // 这里根据您的数据字段调整
                graph4.balloonText = "<span style='font-size:13px;'>随机森林:<b>[[value]]</b> [[additional]]</span>"; // 这里根据您的数据字段调整
                chart.addGraph(graph4);


                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("consumptiondiv");
            });
            

            var conditionerData = [
                {
                    "date": "7/5",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/10",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/15",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/20",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/25",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                }
            ];
            
            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = conditionerData;
                chart.categoryField = "date";
                chart.startDuration = 1;
                chart.plotAreaBorderColor = "#DADADA";
                chart.plotAreaBorderAlpha = 1;

                // AXES
                // Category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridPosition = "start";
                categoryAxis.gridAlpha = 0.1;
                categoryAxis.axisAlpha = 0;

                // Value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0;
                valueAxis.gridAlpha = 0.1;
                valueAxis.position = "top";
                chart.addValueAxis(valueAxis);

                // GRAPHS
                // first graph
                var graph1 = new AmCharts.AmGraph();
                graph1.type = "column";
                graph1.title = "Income";
                graph1.valueField = "income";
                graph1.balloonText = "当前:[[value]]";
                graph1.lineAlpha = 0;
                graph1.fillColors = "#ADD981";
                graph1.fillAlphas = 1;
                chart.addGraph(graph1);

                // second graph
                var graph2 = new AmCharts.AmGraph();
                graph2.type = "column";
                graph2.title = "Expenses";
                graph2.valueField = "expenses";
                graph2.balloonText = "历史:[[value]]";
                graph2.lineAlpha = 0;
                graph2.fillColors = "#81acd9";
                graph2.fillAlphas = 1;
                chart.addGraph(graph2);

                chart.creditsPosition = "top-right";

                // WRITE
                chart.write("conditionerdiv");
            });
            
            
            var EERData = [
                             {
                                 "year": '1月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '3月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '6月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '9月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '11月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '12月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             }

                         ];


                         AmCharts.ready(function () {
                             // SERIAL CHART
                             chart = new AmCharts.AmSerialChart();
                             chart.path = "../amcharts/";
                             chart.dataProvider = EERData;
                             chart.categoryField = "year";
                             chart.startDuration = 1;

                             chart.handDrawn = true;
                             chart.handDrawnScatter = 3;

                             // AXES
                             // category
                             var categoryAxis = chart.categoryAxis;
                             categoryAxis.gridPosition = "start";

                             // value
                             var valueAxis = new AmCharts.ValueAxis();
                             valueAxis.axisAlpha = 0;
                             chart.addValueAxis(valueAxis);

                             // GRAPHS
                             // column graph
                             var graph1 = new AmCharts.AmGraph();
                             graph1.type = "column";
                             graph1.title = "Income";
                             graph1.lineColor = "#a668d5";
                             graph1.valueField = "income";
                             graph1.lineAlpha = 1;
                             graph1.fillAlphas = 1;
                             graph1.alphaField = "alpha";
                             graph1.balloonText = "<span style='font-size:13px;'>当前 :<b>[[value]]</b> [[additional]]</span>";
                             chart.addGraph(graph1);

                             // line
                             var graph2 = new AmCharts.AmGraph();
                             graph2.type = "line";
                             graph2.title = "Expenses";
                             graph2.lineColor = "#fcd202";
                             graph2.valueField = "expenses";
                             graph2.lineThickness = 2;
                             graph2.bullet = "round";
                             graph2.bulletBorderThickness = 3;
                             graph2.bulletBorderColor = "#fcd202";
                             graph2.bulletBorderAlpha = 1;
                             graph2.bulletColor = "#ffffff";
                             graph2.dashLengthField = "dashLengthLine";
                             graph2.balloonText = "<span style='font-size:13px;'>目标 :<b>[[value]]</b> [[additional]]</span>";
                             chart.addGraph(graph2);

                             // WRITE
                             chart.write("EERdiv");
                         });
                         
                         
                         
                         var refrigerationData = [
                                          {
                                              "year": "7/3",
                                              "value": 2
                                          },
                                          {
                                              "year": "7/5",
                                              "value": 2.5
                                          },
                                          {
                                              "year": "7/15",
                                              "value": 1.5
                                          },
                                          {
                                              "year": "7/20",
                                              "value": 5
                                          },
                                          {
                                              "year": "7/25",
                                              "value": 8
                                          },
                                          {
                                              "year": "7/29",
                                              "value": 2
                                          }
                                      ];


                          AmCharts.ready(function () {
                              // SERIAL CHART
                              chart = new AmCharts.AmSerialChart();
                              chart.path = getRootPath()+"/assets/amcharts/";
                              chart.pathToImages=getRootPath()+"/assets/amcharts/images/";
                              chart.dataProvider = refrigerationData;
                              chart.marginLeft = 10;
                              chart.categoryField = "year";
                              chart.dataDateFormat = "M/DD";

                              // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
                              chart.addListener("dataUpdated", zoomChart);

                              // AXES
                              // category
                              var categoryAxis = chart.categoryAxis;
                              categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
                              categoryAxis.minPeriod = "DD"; // our data is yearly, so we set minPeriod to YYYY
                              categoryAxis.dashLength = 3;
                              categoryAxis.minorGridEnabled = true;
                              categoryAxis.minorGridAlpha = 0.1;

                              // value
                              var valueAxis = new AmCharts.ValueAxis();
                              valueAxis.axisAlpha = 0;
                              valueAxis.inside = true;
                              valueAxis.dashLength = 3;
                              chart.addValueAxis(valueAxis);

                              // GRAPH
                              graph = new AmCharts.AmGraph();
                              graph.type = "smoothedLine"; // this line makes the graph smoothed line.
                              graph.lineColor = "#d1655d";
                              graph.negativeLineColor = "#637bb6"; // this line makes the graph to change color when it drops below 0
                              graph.bullet = "round";
                              graph.bulletSize = 8;
                              graph.bulletBorderColor = "#FFFFFF";
                              graph.bulletBorderAlpha = 1;
                              graph.bulletBorderThickness = 2;
                              graph.lineThickness = 2;
                              graph.valueField = "value";
                              graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
                              chart.addGraph(graph);

                              // CURSOR
                              var chartCursor = new AmCharts.ChartCursor();
                              chartCursor.cursorAlpha = 0;
                              chartCursor.cursorPosition = "mouse";
                              chartCursor.categoryBalloonDateFormat = "YYYY-W";
                              chart.addChartCursor(chartCursor);

                              // SCROLLBAR
                              var chartScrollbar = new AmCharts.ChartScrollbar();
                              chart.addChartScrollbar(chartScrollbar);

                              chart.creditsPosition = "bottom-right";

                              // WRITE
                              chart.write("refrigerationdiv");
                          });
                                      
                                   // this method is called when chart is first inited as we listen for "dataUpdated" event
                                      function zoomChart() {
                                          // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
                                          chart.zoomToDates(new Date(1972, 0), new Date(1984, 0));
                                      }
                                      
                                    //js获取项目根路径，如：http://localhost:8099/UniqueduHome
                                      function getRootPath(){
                                             //获取当前网址，如： http://localhost:8099/UniqueduHome/view/error/notAuthorize.jsp
                                             var curWwwPath=window.document.location.href;
                                             //获取主机地址之后的目录，如： UniqueduHome/view/error/notAuthorize.jsp
                                             var pathName=window.document.location.pathname;
                                             var pos=curWwwPath.indexOf(pathName);
                                             //获取主机地址，如： http://localhost:8099
                                             var localhostPaht=curWwwPath.substring(0,pos);
                                             //获取带"/"的项目名，如：/UniqueduHome
                                             var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
                                             return(localhostPaht+projectName);
                                         }