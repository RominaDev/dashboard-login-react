import React, { Component } from "react";
import Chart from "react-apexcharts";
import casco from '../../media/casco.png'

class RadialBar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [97],
        options: {
          plotOptions: {
            radialBar: {
              size: undefined,
              inverseOrder: false,
              startAngle: -180,
              endAngle: 180,
              offsetX: -10,
              offsetY: 0,
                
              hollow: {
                margin: 15,
                size: '50%',
                image: {casco},
                imageWidth: 64,
                imageHeight: 64,
                imageClipped: false
            },
              track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: "#F1C40F",
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
                  offsetY: -60
                },
                value: {
                  show: true,
                  fontSize: "25px",
                  color: '#373d3f',
                  offsetY: 65,
                  formatter: function (val) {
                    return val + "%";
                  }
                },
                total: {
                  show: true,
                  label: "USO IN OUT",
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
            colors:["#FF6F00"]
          },
          labels: ['Volatility'],
        },
        
      };
    }
  
    render() {
      return (
        <div className="donut">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            width="220"
          />
        </div>
      );
    }
  }
  
  export default RadialBar;
  