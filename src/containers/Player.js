import React, { useEffect, useState } from 'react'
import '../assets/styles/components/Player.css'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
const Player = (props) => {
  const {id} = props.match.params
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    props.getVideoSource(id)
    setLoading(false)
  }, [])

  return loading 
  ? <h1>Cargando...</h1>
  : (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4"/>
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>Regresar</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  }
}

const mapDispatchToProps = {
  getVideoSource
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)