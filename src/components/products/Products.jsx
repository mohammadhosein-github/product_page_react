import React, { Component } from "react";
import Card from "./EachCard";

export class Products extends Component {
  render() {
    return (
      <div className="products">
        <div
          className="cards-box"
          style={{
            gridTemplateColumns: `repeat(${this.props.sliderColumns}, 100%)`
          }}
        >
          {this.props.content.map(elem => {
            return (
              <Card
                key={elem.id}
                SlideControl={this.props.slideControl}
                CardId={elem.id}
                ImageSrc={elem.img_src}
                ImageAlt={elem.img_alt}
                ColorsArray={elem.colors}
                SizesArray={elem.sizes}
                Price={elem.price}
                addProduct={this.props.addProduct}
                Title={elem.title}
              />
            );
          })}
        </div>
        <button className="prev-next prev" onClick={this.props.goPrev}>
          {"<"}
        </button>
        <button className="prev-next next" onClick={this.props.goNext}>
          >
        </button>
      </div>
    );
  }
}

export default Products;
