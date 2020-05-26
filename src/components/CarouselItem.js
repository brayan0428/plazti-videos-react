import React from 'react'
import '../assets/styles/components/CarouselItem.css'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import deleteIcon from '../assets/static/remove-icon.png'
import { connect } from 'react-redux'
import { setFavorite, deleteFavorite } from '../actions'

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props

  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration })
  }

  const handleDeleteFavorite = () => {
    props.deleteFavorite(id)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="" />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          {
            isList 
            ? <img className="carousel-item__details--img" src={deleteIcon} alt="Plus Icon" onClick={handleDeleteFavorite} /> 
            : <img className="carousel-item__details--img" src={plusIcon} alt="Plus   Icon" onClick={handleSetFavorite} />
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem)