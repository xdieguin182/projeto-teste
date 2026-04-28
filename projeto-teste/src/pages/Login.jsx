import React from 'react'
import Formulario from '../components/Formulario'
import LoginHeader from '../components/LoginHeader'
import Footer from '../components/Footer'


function Login() {



  return (
    <div className="d-flex flex-column min-vh-100">
      <LoginHeader />  


      <Formulario />


      <Footer />
    </div>
  )
}

export default Login


