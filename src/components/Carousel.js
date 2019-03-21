import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import carouselSlidesData from './Data'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft, faAngleRight)

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      carouselSlidesData,
    }
  }

  activeSlide = index => {
    this.setState({ activeIndex: index })
  }
  goLeft = e => {
    e.preventDefault()
    let index = this.state.activeIndex
    let slides = carouselSlidesData
    let slidesLength = slides.length - 1
    --index
    if (index < 0) {
      index = slidesLength
    }

    this.setState({
      activeIndex: index,
    })
  }
  goRight = e => {
    e.preventDefault()
    let index = this.state.activeIndex
    let slides = carouselSlidesData
    let slidesLength = slides.length - 1
    ++index
    if (index === slidesLength + 1) {
      index = 0
    }

    this.setState({
      activeIndex: index,
    })
  }
  render() {
    console.log(this.state.activeIndex)
    return (
      <div className="carousel-container">
        <h5>What others have said about me: </h5>
        <div className="carousel-main">
          <button
            className="carousel__arrow carousel_arrow--left"
            onClick={this.goLeft}
          >
            <FontAwesomeIcon icon="angle-left" />
          </button>
          <span className="carousel__slides">
            {this.state.carouselSlidesData.map((slide, index) => (
              <span
                className={
                  index === this.state.activeIndex
                    ? 'carousel__slide carousel__slide--active'
                    : 'carousel__slide'
                }
                key={index}
              >
                <p>
                  "{slide.content}"
                  <br />- {slide.author}
                  <br />- {slide.source}
                </p>
              </span>
            ))}
          </span>
          <button
            className="carousel__arrow carousel_arrow--right"
            onClick={this.goRight}
          >
            <FontAwesomeIcon icon="angle-right" />
          </button>
        </div>
        <div className="carousel__indicators">
          {this.state.carouselSlidesData.map((slide, index) => (
            <span key={index}>
              <button
                className={
                  index === this.state.activeIndex
                    ? 'carousel__indicator carousel__indicator--active'
                    : 'carousel__indicator'
                }
                onClick={() => this.activeSlide(index)}
              />
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
