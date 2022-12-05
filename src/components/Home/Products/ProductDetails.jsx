import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { modalClose } from "../../../redux/cartSlice";
import { useSelector } from "react-redux";


export default function ProductDetails() {
  const { state } = useLocation();

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(state));
  };

  // ======== Modal Alert ===========
  const { showModal } = useSelector((state) => state.cart);
  const handleClose = () => dispatch(modalClose());

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center pt-5">Product Details</h2>
        <div className="row m-auto py-5">
          <div className="col-sm-6 d-md-flex justify-content-end">
            <img src={state.imgSrc} className="col-8 mx-4" />
          </div>
          <div className="col-sm-6 bg-light pt-5 px-4">
            <h4>{state.title}</h4>
            <p className="my-4 fw-bold">$ {state.price}</p>
            <hr className="col-6" />
            <button
              className="btn btn-success my-3 mx-4 mx-sm-4 mx-lg-4"
              onClick={() => add()}
            >
              Add To Cart
            </button>
            <Link to="/">
              <button className="btn btn-outline-primary">
                Back To Shoping
              </button>
            </Link>
          </div>
        </div>
      </div>

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
