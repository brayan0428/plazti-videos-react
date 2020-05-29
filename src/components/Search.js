import React from 'react'
import '../assets/styles/components/Search.css'
import { connect } from 'react-redux'
import { filterVideos } from '../actions'

const Search = (props) => {

  const handleInputChange = e => {
    props.filterVideos(e.target.value)
  }
  
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className="input" placeholder="Buscar..." onChange={handleInputChange}/>
    </section>
  )
}

const mapDispatchToProps = {
  filterVideos
}

export default connect(null,mapDispatchToProps)(Search)