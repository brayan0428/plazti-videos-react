import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.css'

const App = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/initialState')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  console.log(videos)

  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  )
}

export default App