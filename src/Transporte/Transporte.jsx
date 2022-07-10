import React from 'react'
import './Transporte.css'
import useApi from '../components/UseApi';
import camion from '../media/camion.png';
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Transporte = () => {

  // const ImplementosSeguridadLast = useApi('http://127.0.0.1:8000/ImplementoSeguridadLast').data

  return (
    <div >
      <div className="row">
        <div className="col">
          <div className="card-calendario">
            <div className="card-text">
            </div>
              <div class="row">
                <div class="col-5">
                  <div className="contain-chaleco">
                    <img className='img-chaleco' src={camion} />
                  </div>
                </div>
                <div class="col-6">
                  <div>

                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="card-transporte">
            <div className="card-text">
              <h1 className='titulo pt-3 mr-5'>CONTROL VEHICULAR <span className="my-5" ><CameraEnhanceOutlinedIcon /></span> </h1>
            </div>
            <div className="div">
              <p className='subtitulo'>Acceso 1: Calle x</p>
            </div>
            <div className="div">
              <p className='subtitulo-2'>EN ESPERA INGRESO</p>
            </div>
            <div class="row">
              <div class="col-6">
              <h1 className='conteo mt-1'>40</h1>
              </div>
              <div class="col-6">
                <div>
                <img className='img-chaleco' src={camion} />
                </div>
              </div>
            </div>
            <div className="div">
              <p className='subtitulo-3 mt-4'>INGRESOS EN EL DIA</p>
            </div>
            <div class="row">
              <div class="col-6">
              <h1 className='conteo mt-4'>505</h1>
              </div>
              <div class="col-6">
                <div>
                <span className='camion'><LocalShippingIcon /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {[ImplementosSeguridadLast].map((post) => ( */}
      {/* <p key="{implementos}">{ImplementosSeguridadLast.casco}<br></br>―――<br></br>100<br></br>Cumpliendo</p> */}
      {/* ))} */}
    </div>
  )
}


export default Transporte