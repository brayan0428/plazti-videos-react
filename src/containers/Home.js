import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/App.css'

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/initialState')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <>
      <Search />
      {
        videos.mylist && videos.mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
          {
            videos.mylist.map(video => (
              <CarouselItem key={video.id} {...video} />
            ))
          }
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {
            videos.trends && videos.trends.map(video => (
              <CarouselItem key={video.id} {...video} />
            ))
          }
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {
            videos.originals && videos.originals.map(video => (
              <CarouselItem key={video.id} {...video} />
            ))
          }
        </Carousel>
      </Categories>
    </>
  )
}

export default Home