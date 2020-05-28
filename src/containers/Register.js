import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.css'
import { connect } from 'react-redux'
import {requestRegister} from '../actions'

const Register = (props) => {
  const [form,setValues] = useState({
    name : '',
    email: '',
    password: ''
  })

  const handleInputChange = e => {
    setValues({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.requestRegister(form)
    props.history.push('/')
  }

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Nombre" name="name" onChange={handleInputChange}/>
          <input className="input" type="text" placeholder="Correo" name="email" onChange={handleInputChange}/>
          <input className="input" type="password" placeholder="Contraseña" name="password" onChange={handleInputChange}/>
          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  requestRegister
}

export default connect(null,mapDispatchToProps)(Register)