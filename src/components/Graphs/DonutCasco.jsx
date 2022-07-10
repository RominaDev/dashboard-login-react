import React, { Component } from "react";
import Chart from "react-apexcharts";
import casco from '../../media/casco.png'
import axios from "axios";

const url = 'http://127.0.0.1:8000/ImplementoSeguridadLast';
class RadialBar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [],
        options: {
          plotOptions: {
            radialBar: {
              size: undefined,
              inverseOrder: false,
              startAngle: -180,
              endAngle: 180,
              offsetX: -50,
              offsetY: 20,
                
              hollow: {
                margin: 0,
                size: '40%',
                background: 'transparent',
                image: {},
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false,
                imageWidth: 64,
                
            },
              track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: "#FFF",
                strokeWidth: "97%",
                opacity: 1,
                margin: 5,
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  opacity: 0.5
                }
              },
              dataLabels: {
                show: true,
                name: {
                  show: true,
                  fontSize: "22px",
                  fontFamily: undefined,
                  color: undefined,
                  offsetY: -90
                },
                value: {
                  show: true,
                  fontSize: "25px",
                  color: '#373d3f',
                  offsetY: 95,
                  formatter: function (val) {
                    return val + "%";
                  }
                },
                total: {
                  show: true,
                  label: "CASCO",
                  color: "#373d3f",
                  formatter: function (w) {
                    return (
                      w.globals.seriesTotals.reduce((a, b) => {
                        return a + b;
                      }, 0) /
                        w.globals.series.length +
                      "%"
                    );
                  }
                }
              }
            }
          },
          fill:{
            colors:["#7C35ED"],
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            }
          
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Volatility'],
        },
        
      };
    }
    getCascos() {

      axios.get((url))
  
        .then(Response => {
  
          let cascos = Response.data[0].casco;
  
          console.log('cascos vistos : ' + cascos)
  
          this.setState({
  
            series: [cascos],
  
          })
  
        })
  
    }
  
  
  
    // tiempo recarga
  
    componentDidMount() {
  
      this.interval = setInterval(() => this.getCascos(), 3000);
  
    }
  
    componentWillUnmount() {
  
      clearInterval(this.interval);
  
    }
  
    render() {
      return (
        <div className="donut">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            width="280"
          />
        </div>
      );
    }
  }
  
  export default RadialBar;
  