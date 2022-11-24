import  React from 'react'

const isologo = require.context('../../assets/img', true)

function footer() {
    return(
        <footer>
            <div className='contenedor1'>
            <img src= {isologo('./car-tech-logo-.jpg')} alt='logo'className='isologotipo'/>
            <span className='copyright'>CARTECH 2022 - 2023 ©</span>
            </div>
            <div className='contenedor2'>
                <div className='icon1'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div className='icon2'>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
            </div>
        </footer>
    )
}
export default footer