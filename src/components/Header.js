import React from 'react' 
import '../assets/styles/components/Header.css'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import {requestLogout} from '../actions'
const Header = (props) => {
  const {user} = props
  const hasUser = Object.keys(user).length > 0

  const handleLogout = (e) => {
    e.preventDefault()
    props.requestLogout({})
  }
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser 
            ? <img src={gravatar(user.email)} alt="" />
            : <img src={userIcon} alt="" />
          }
          
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser
            ? <li><a href="/">{user.name}</a></li>
            : null
          }
          {
            hasUser
            ? <li><a href="/" onClick={handleLogout}>Cerrar Sesión</a></li>
            : <li><Link to="/login">Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  )
}
const mapStateToProps = state => {
  return{
    user: state.user  
  }
}

const mapDispatchToProps = {
  requestLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)