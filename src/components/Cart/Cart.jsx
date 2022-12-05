import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseAmount,
  decreaseAmount,
  removeFromCart,
} from "../../redux/cartSlice";

import empty from "../../assets/images/products/empty_cart.webp";

export default function Cart() {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increase = (title) => {
    dispatch(increaseAmount(title));
  };

  const decrease = (title) => {
    dispatch(decreaseAmount(title));
  };

  const remove = (title) => {
    dispatch(removeFromCart(title));
  };

  return (
    <section className="section container">
      <div className="text-center">
        {(selectedItems.length != 0 && (
          <div className="col-8 m-auto">
            <span className="section-subtitle mt-4">Cart</span>
            <h2 className="section-title mb-5">Your Order</h2>
            <div className="row table-responsive">
              <Table striped>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Decrease</th>
                    <th>Count</th>
                    <th>Increase</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedItems.map((item) => (
                    <tr key={item.title}>
                      <td>{item.title}</td>
                      <td>
                        <button
                          href="#"
                          className="btn btn-outline-success"
                          onClick={() => decrease(item.title)}
                        >
                          <i className="bx bx-minus" />
                        </button>
                      </td>
                      <td>{item.count}</td>
                      <td>
                        <button
                          href="#"
                          className="btn btn-success"
                          onClick={() => increase(item.title)}
                        >
                          <i className="bx bx-plus" />
                        </button>
                      </td>
                      <td>${item.orderPrice}</td>
                      <td>
                        <button
                          href="#"
                          className="btn btn-danger"
                          onClick={() => remove(item.title)}
                        >
                          <i class="bx bxs-trash-alt" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        )) || (
          <div className="fs-3 rounded bg-light col-8 m-auto py-3 my-4 emptyCart">
            <p className="text-success fw-bold mb-4 py-1">Your Cart is Empty</p>
            <Link to="/">
              <button className="btn btn-outline-success mb-5">
                Go Back and Shoping
              </button>
              <br />
            </Link>
            <img src={empty} className="col-4" />
          </div>
        )}
      </div>
    </section>
  );
}
