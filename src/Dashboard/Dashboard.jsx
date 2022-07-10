import React from 'react';
import './Dashboard.css';
import Epp from '../Epp/Epp';
import SideBar from '../Menu/SideBar';
import InOut from '../InOut/InOut';
import Transporte from '../Transporte/Transporte';
import CardsFooter from '../Footer/CardsFooter';

function DashBoard() {


  return (

    <div className='App'>
        <div class="container-fluid ">

          <div class="row row-xs-1 row-sm-2 row-md-2">
            <div class="col-2 mt-3 columnas">
              <SideBar />
            </div>

            <div class="col-3 mt-4">
              <Epp />
            </div>

            <div class="col">
              <InOut />
            </div>
            
            <div class="col mt-2">
              <Transporte />
            </div>
          </div>

           {/* footer */}
           {/* <div >
              <CardsFooter />
            </div> */}
        </div>
    </div>

  );
}
export default DashBoard;