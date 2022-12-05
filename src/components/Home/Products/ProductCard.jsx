import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../redux/cartSlice";

export default function ProductCard(props) {
  const { product } = props;
  const { title, price, imgSrc } = product;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="menu__content">
        <img src={imgSrc} className="menu__img" />
        <h3 className="menu__name">{title}</h3>
        <span className="menu__preci">${price}</span>

        <div className="mt-4">
          <Link to={`/products/${title}`} state={product}>
            <button href="#" className="btn btn-primary details__button">
              <i class="bx bx-info-square"></i>
            </button>
          </Link>

          <button
            href="#"
            className="button menu__button"
            onClick={() => add()}
          >
            <i className="bx bx-cart-alt" />
          </button>
        </div>
      </div>
    </>
  );
}
