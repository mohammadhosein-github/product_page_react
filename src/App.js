import React, { Component } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Product from "./components/products/Products";
import WhiteShoe from "./media/white.png";
import GrayShoe from "./media/gray.png";
import GreenShoe from "./media/green.png";
import OrangeShoe from "./media/orange.png";
import "./App.scss";

export class App extends Component {
  state = {
    content: [
      {
        id: 0,
        value: "item current",
        title: `Nike Air Force`,
        img_src: WhiteShoe,
        img_alt: "white_shoe",
        colors: ["white"],
        sizes: ["40", "41", "42"],
        price: "90"
      },
      {
        id: 1,
        value: "item",
        title: `Merrell Zion`,
        img_src: GrayShoe,
        img_alt: "gray_shoe",
        colors: ["gray"],
        sizes: ["41", "42", "43"],
        price: "75"
      },
      {
        id: 2,
        value: "item",
        title: `ASICS GT-2000 8 Trail`,
        img_src: GreenShoe,
        img_alt: "green_shoe",
        colors: ["green", "black"],
        sizes: ["39", "40", "41", "42", "43", "45"],
        price: "129"
      },
      {
        id: 3,
        value: "item",
        title: `Nike Free RN`,
        img_src: OrangeShoe,
        img_alt: "white_shoe",
        colors: ["orange", "black"],
        sizes: ["40", "41", "42"],
        price: "89.30"
      }
    ],
    selectedProducts: [],
    slideCounter: 0
  };

  slideControl = () => {
    return {
      transform: `translateX(${-100 * this.state.slideCounter}%)`
    };
  };

  goPrev = () => {
    if (this.state.slideCounter >= 1) {
      this.setState({
        slideCounter: this.state.slideCounter - 1
      });
    }
  };

  goNext = () => {
    if (this.state.slideCounter <= this.state.content.length - 2) {
      this.setState({
        slideCounter: this.state.slideCounter + 1
      });
    }
  };

  addProduct = id => {
    if (!this.state.selectedProducts.includes(id)) {
      const selectedProducts = this.state.selectedProducts.concat(id);
      this.setState({
        selectedProducts
      });
    } else {
      return -1;
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar selectedProducts={this.state.selectedProducts.length} />
        <Banner />
        <Product
          content={this.state.content}
          slideCounter={this.state.slideCounter}
          goPrev={this.goPrev}
          goNext={this.goNext}
          slideControl={this.slideControl()}
          addProduct={this.addProduct}
          sliderColumns={this.state.content.length}
        />
      </div>
    );
  }
}

export default App;
