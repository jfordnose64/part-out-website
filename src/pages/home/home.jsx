import React, { Component } from 'react'
import './home.css'

class Home extends Component {
  render() {
    let image =
      'https://www.volvocars.com/images/v/us/v/-/media/project/contentplatform/data/media/img/static-gallery-grid/image2_desktop_3840x2150.jpg?iar=0&w=1500'
    return (
      <div className="home-container">
        <div className="container">
          <div className="home-title-con">
            <h2>Welcome to PartShopr!</h2>
            <div className="welcome-carousel-con">
              <h2>Maybe a carousel?</h2>
            </div>
          </div>
          <div className="featured-listings-container">
            <div className="featured-listings">
              <div className="listing">
                <img className="listing-image" src={image} alt="Listing" />
                <div className="listing-content">
                  <h1 className="listing-title">Title</h1>
                  <p>Description</p>
                </div>
              </div>
              <div className="listing">
                <img className="listing-image" src={image} alt="Listing" />
                <div className="listing-content">
                  <h1 className="listing-title">Title</h1>
                  <p>Description</p>
                </div>
              </div>
              <div className="listing">
                <img className="listing-image" src={image} alt="Listing" />
                <div className="listing-content">
                  <h1 className="listing-title">Title</h1>
                  <p>Description</p>
                </div>
              </div>
              <div className="listing">
                <img className="listing-image" src={image} alt="Listing" />
                <div className="listing-content">
                  <h1 className="listing-title">Title</h1>
                  <p>Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
