import React from 'react'
import './Epp.css';
import DonutEpp from '../components/Graphs/DonutCasco'
import DonutEppCh from '../components/Graphs/DonutChaleco'

const MainEpp = () => {
    return (
        <div>
            {/* INICIO ROW DE INFORMATIVO*/}
            <div className="row fila-superior-epp mx-1">
                <div className='col-8 my-4'>
                    <input type="text" class="form-control" placeholder="Buscar" aria-label="Search" />
                </div>
                <div className='col-4 my-4'></div>
                <div className="row">
                    <div className="col-6 saludo my-4">
                        <div class="card-chartepp">
                            <span className="align-middle hola">Hola, Soy Romina Corsiglia, Desarrolladora FullStack! </span>
                            <br />
                            <span className="align-middle">Esto es un Dashboard en construcción.
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                    </div>
                </div>    
            </div>
            {/* FIN ROW DE INFORMATIVO*/}

            {/* INICIO ROW DE GRAFICO RADIAL BAR */}

            <div className="row mx-0">
                <div className="col-12 col-xxl-6 my-4 ">
                    <div className="card-donutepp">
                        <div className='contain-donutepp'>
                            <DonutEpp />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xxl-6 my-4 ">
                    <div className="card-donutepp justigy-content-center">
                        <div className='contain-donutepp'>
                            <DonutEppCh />
                        </div>
                    </div>
                </div>
            </div>
            {/* FIN ROW DE GRAFICO RADIAL BAR */}
        </div>



    )
}

export default MainEpp