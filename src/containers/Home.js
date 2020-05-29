import React from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/App.css'
import { connect } from 'react-redux'

const Home = ({myList,trends,originals,videosFiltered}) => {

  return videosFiltered.length > 0 
  ? (
    <>
      <Search />
      <Categories title="Videos encontrados">
          <Carousel>
          {
            videosFiltered.map(video => (
              <CarouselItem key={video.id} {...video} />
            ))
          }
          </Carousel>
        </Categories>
    </>
  )
  : (
    <>
      <Search />
      {
        myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
          {
            myList.map(video => (
              <CarouselItem key={video.id} {...video} isList />
            ))
          }
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {
            trends.map(video => (
              <CarouselItem key={video.id} {...video} />
            ))
          }
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {
            originals.map(video => (
              <CarouselItem key={video.id} {...video} />
            ))
          }
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals:state.originals,
    videosFiltered: state.videosFiltered
  }
}
export default connect(mapStateToProps,null)(Home)