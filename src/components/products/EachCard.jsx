import React, { Component } from "react";

export class EachCard extends Component {
  state = {
    colors: this.props.ColorsArray,
    sizes: this.props.SizesArray
  };
  render() {
    const {
      ImageSrc,
      ImageAlt,
      ColorsArray,
      SizesArray,
      Price,
      CardId,
      SlideControl
    } = this.props;
    return (
      <div className="card" style={SlideControl}>
        <img src={ImageSrc} alt={ImageAlt}></img>
        <div className="text-area">
          <h3>{this.props.Title}</h3>
          <div className="available">
            <div className="colors">
              <p>colors:</p>
              {ColorsArray.map(elem => {
                return (
                  <button key={elem}>
                    <div className={`color ${elem}`}></div>
                  </button>
                );
              })}
            </div>
            <div className="sizes">
              <p>sizes:</p>
              {SizesArray.map(elem => {
                return (
                  <button key={elem}>
                    <div>{elem}</div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="price-tag">
            <p className="price">${Price}</p>
            <button
              onClick={() => {
                this.props.addProduct(CardId);
              }}
            >
              add to card
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EachCard;
