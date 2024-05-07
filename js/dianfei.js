  var chart;
  var consumptionData = [
                   {
                       "date": "2-25",
                       // "value1":1,
                       "value1":"<img src=\"../img/logi_compan/1.png\" width= \"30\">",
                       "value2":"<img src=\"../img/logi_compan/weilong.png\" width= \"30\">",
                       "value3":"<img src=\"../img/logi_compan/2.png\" width= \"30\">",
                       "value4":"<img src=\"../img/logi_compan/3.png\" width= \"30\">",
                       "value5":"<img src=\"../img/logi_compan/4.png\" width= \"30\">",
                       
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-26",
                       "value1":"8辆",
                       "value2":"4辆",
                       "value3":"5辆",
                       "value4":"5辆",
                       "value5":"8辆",
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-27",
                       "value1": "长春→天津",
                       "value2": "天津→北京",
                       "value3": "上海→武汉",
                       "value4": "北京→长春",
                       "value5": "珠海→合肥",
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-28",
                       "value1": "￥13,000",
                       "value2": "￥7,000",
                       "value3": "￥19,000",
                       "value4": "￥10,000",
                       "value5": "￥11,000",
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-29",
                       "value1": "<img src=\"../img/driver/siji1.png\" height= \"30\">",
                       "value2": "<img src=\"../img/driver/siji2.png\" height= \"30\">",
                       "value3": "<img src=\"../img/driver/siji4.png\" height= \"30\">",
                       "value4": "<img src=\"../img/driver/siji5.png\" height= \"30\">",
                       "value5": "<img src=\"../img/driver/siji6.png\" height= \"30\">",
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "3-1",
                       "value1": "￥6,000",
                       "value2": "￥3,500",
                       "value3": "￥11,000",
                       "value4": "￥3,700",
                       "value5": "￥8,900",
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "3-2",
                        "value1": "<img src=\"../img/percent/100.png\" height= \"35\">",
                       "value2": "<img src=\"../img/percent/50.png\" height= \"35\">",
                       "value3": "<img src=\"../img/percent/40.png\" height= \"35\">",
                       "value4": "<img src=\"../img/percent/100.png\" height= \"35\">",
                       "value5": "<img src=\"../img/percent/25.png\" height= \"35\">",
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   // {
                   //     "date": "3-3",
                   //     "value1":	12.6,
                   //     "value2":0.6,
                   //     "value3":9.6,
                   //     "value4":22.8,
                   //     "color1": "#FF6600",
                   //     "color2": "#04D215",
                   //     "color3": "#0D8ECF"
                   // }
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
                var graph1 = new AmCharts.AmGraph();
                graph1.valueField = "value1";
                graph1.colorField = "color1";
                graph1.balloonText = "<b>主设备: [[value]]</b>";
                graph1.type = "column";
                graph1.lineAlpha = 0;
                graph1.fillAlphas = 1;
                chart.addGraph(graph1);

                var graph2 = new AmCharts.AmGraph();
                graph2.valueField = "value2";
                graph2.colorField = "color2";
                graph2.balloonText = "<b>照明: [[value]]</b>";
                graph2.type = "column";
                graph2.lineAlpha = 0;
                graph2.fillAlphas = 1;
                chart.addGraph(graph2);

                var graph3 = new AmCharts.AmGraph();
                graph3.valueField = "value3";
                graph3.colorField = "color3";
                graph3.balloonText = "<b>空调: [[value]]</b>";
                graph3.type = "column";
                graph3.lineAlpha = 0;
                graph3.fillAlphas = 1;
                chart.addGraph(graph3);
                // line
                var graphl = new AmCharts.AmGraph();
                graphl.type = "line";
                graphl.title = "总能耗";
                graphl.lineColor = "#fcd202";
                graphl.valueField = "value4";
                graphl.lineThickness = 3;
                graphl.bullet = "round";
                graphl.bulletBorderThickness = 3;
                graphl.bulletBorderColor = "#fcd202";
                graphl.bulletBorderAlpha = 1;
                graphl.bulletColor = "#ffffff";
                graphl.dashLengthField = "dashLengthLine";
                graphl.balloonText = "<span style='font-size:13px;'>总能耗:<b>[[value]]</b> [[additional]]</span>";
                chart.addGraph(graphl);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("consumptiondiv");
            });
