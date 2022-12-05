import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../../Model/products";
import Modal from "react-bootstrap/Modal";
import { modalClose } from "../../../redux/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Products() {
  const allcategories = [
    "all",
    ...new Set(products.map((product, index) => product.category)),
  ];

  const [filterdProducts, setFilterdProducts] = useState(products);

  const filter = (category) => {
    if (category === "all") {
      setFilterdProducts(products);
      return;
    }
    setFilterdProducts(
      products.filter((product) => product.category === category)
    );
  };

  // ======== Modal Alert ===========
  const { showModal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(modalClose());

  return (
    <>
      <section className="menu my-5 bd-container" id="menu">
        <span className="section-subtitle">Special</span>
        <h2 className="section-title">Menu of the week</h2>

        <div className="col-10 m-auto d-flex justify-content-evenly py-2">
          {allcategories.map((category, index) => (
            <button
              className="btn btn-outline-success fw-bold text-capitalize"
              onClick={() => filter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu__container bd-grid">
          {filterdProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This Item is Already in Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-success">Hope you enjoy Shoping with us</Modal.Body>
        <Modal.Footer>
          <Link to="/cart">
            <button className="btn btn-outline-success" onClick={handleClose}>
              Your Cart
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
