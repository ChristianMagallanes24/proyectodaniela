import React from 'react'
import myGoals from '../../assets/goals.svg';
import myDiamond from '../../assets/Diamond.svg';
import myVision from '../../assets/Vision.svg';

const Nosotros = () => {
    return (
        <div className='nosotros-container'>


            <div className='sobre-nosotros'>

                {/* Imagen para nosotros */}
                <div className='nosotros-img-container'>
                    <img src="https://loremflickr.com/517/368" alt="img" />
                </div>

                {/* sobre nosotros informacion */}
                <div className='nosotros-info'>
                    <h2 className='nosotros-titulo'>Sobre nosotros</h2>
                    <p className='nosotros-parrafo'>Somos una Organización Global dedicada a brindar Servicios Profesionales de Recursos Humanos de perfiles IT y generalistas,adaptados a la necesidad de cada Cliente. </p>
                    <button className='btn-nosotros'>Saber más</button>
                </div>
            </div>

            <div className='nosotros-iconos-container'>
                <div className='nosotros-iconos'>
                    <img src={myGoals} alt="xd" />
                    <h3>Mision</h3>
                    <p className='nosotros-iconos-p'>Servicio de calidad</p>
                </div>
                <div className='nosotros-iconos'>
                    <img src={myDiamond} alt="xd" />
                    <h3>Vision</h3>
                    <p className='nosotros-iconos-p'>Reconocimiento</p>
                </div>
                <div className='nosotros-iconos'>
                    <img src={myVision} alt="xd" />
                    <h3>Valores</h3>
                    <p className='nosotros-iconos-p'>Profesionalismo</p>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;
