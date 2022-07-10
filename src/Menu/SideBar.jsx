import React, { useState } from 'react'
import './SideBar.css';
 
import { SideBarData } from './DataSideBar';
const SideBar = () => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpaned] = useState(true);
  
    return (
        <div className="row">
            <div className="col">
                <div className="SideBar mt-2">
                    {/* logo  */}
                    <div className="logo">
                    </div>

                    {/* camara */}
                    <div className="row">
                        <div className="col">
                            <div className='camara'>
                                <div className="container-cam">
                                    <div>
                                    <p class="text-center">Zona 1: CAMARA 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col mt-3">
                            <div id="current_date" className='fecha'><p class="text-center">16-11-2021 10:29 AM</p></div>
                        </div>
                    </div>

                    {/* menu */}
                    <div className="row">
                        <div className="col-10">
                            <div className="menu">
                                {SideBarData.map((item, index) => {
                                    return (
                                        <div
                                            className={selected === index ? "menuItem active" : "menuItem"}
                                            key={index}
                                            onClick={() => setSelected(index)}
                                        >
                                            <item.icon />
                                            <span>{item.heading}</span>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;