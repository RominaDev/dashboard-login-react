import React from 'react'
import ReactApexChart from 'react-apexcharts'

function ChartInOut() {

  const  series = [{
        name: 'EN ZONA',
        data: [2.3, 3.1, 4.0, 10.1]
    }];
       const options = {
        chart: {
            type: "area",
            height: 300,
            foreColor: "#999",
            stacked: true,
            dropShadow: {
              enabled: true,
              enabledSeries: [0],
              top: -2,
              left: 2,
              blur: 5,
              opacity: 0.06
            }
          },
          colors: ['#00E396', '#0090FF'],
          stroke: {
            curve: "smooth",
            width: 3
          },
          dataLabels: {
            enabled: false
          },
          series: [{
            name: 'Total Views',
            data: (0, 18)
          }, {
            name: 'Unique Views',
            data: (1, 18)
          }],
          markers: {
            size: 0,
            strokeColor: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
              size: 6
            }
          },
          xaxis: {
            type: "datetime",
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            labels: {
              offsetX: 14,
              offsetY: -5
            },
            tooltip: {
              enabled: true
            }
          },
          grid: {
            padding: {
              left: -5,
              right: 5
            }
          },
          tooltip: {
            x: {
              format: "dd MMM yyyy"
            },
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left'
          },
          fill: {
            type: "solid",
            fillOpacity: 0.7
          }
        };
    return (
        <div id="chartInOut" >
            <ReactApexChart options={options} series={series} type="bar" height={250} />
        </div >
    );
};

export default ChartInOut