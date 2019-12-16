import React, { Component } from "react";
import BannerImage from "../media/banner-image.png";

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="title-container">
          <div className="title">
            <h1>
              shope top
              <br />
              styles and trends
            </h1>
          </div>
        </div>
        <div className="image">
          <img src={BannerImage} alt="shoe_logo"></img>
        </div>
      </div>
    );
  }
}

export default Banner;
