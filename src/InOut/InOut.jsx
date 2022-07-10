import React from 'react'
import ChartInOut from '../components/Graphs/ChartInOut'
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import ChartEpp from '../components/Graphs/ChartEpp'
import './Inout.css'

const InOut = () => {
  return (
    <div>
      <div className="row">
        <div className="col mt-3">
          <div class="card-inout-1">
            <div class="card-body">
              <div className="row">
              <h5 class="card-title text-center mt-2">PARAMETROS<span><CameraEnhanceOutlinedIcon /></span></h5>
                  <h1 className="patente display-3 text-center font-weight-bold">AREA</h1>
                  <div id="current_date">
                    <p class="text-center">10:29 AM 16-11-2021</p>
                    <p class="text-center">AUTORIZADO</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INICIO ROW DE GRAFICO AREA */}
      <div className="row">
          <div className="col-12">
              <div className="card-inout-2">
                  <div className='contain-inout'>
                      <ChartEpp />
                  </div>
              </div>
          </div>
        </div>
      {/* FIN ROW DE GRAFICO AREA */}
      

    </div>
  )
}


export default InOut

