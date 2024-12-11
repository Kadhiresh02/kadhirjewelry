import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import Footer from './Footer';
import './style.css';
import Logo from '../Assets/logo.jpg'
const MainDashboard = () => {
  return (
    <div>
        <div className='Mainbox'>
            <div className='LogoBox'>
                <img src={Logo} alt='Logo' className='Logoimg'/>

                <div className='Logotitle'>
                    <h2>KADHIR JEWELRY</h2>
                </div>


            </div>
            <div className='Header'>
                <NavComp/>
            </div>
            <div className='Body'>
                <Outlet/>
            </div>
            <div className='Footer'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default MainDashboard