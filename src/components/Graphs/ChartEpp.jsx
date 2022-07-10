import React from 'react'
import ReactApexChart from 'react-apexcharts'

//grafico area de EPP
function ChartEpp() {

    const series = [{
        name: 'Cascos',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Chalecos',
        data: [11, 32, 45, 32, 34, 52, 41]
    }];
    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        colors:["#F1C40F","#FF6F00",""],

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };



    return (
        <div id="chart" >
            <ReactApexChart options={options} series={series} type="area"  />
        </div >

    );
};

export default ChartEpp