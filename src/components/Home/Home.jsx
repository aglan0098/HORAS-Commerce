import React from "react";
import Products from "./Products/Products";
import Services from "./Services";
import Slider from "./Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Services />
      <Products />
    </>
  );
}
