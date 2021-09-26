import React from "react";

export default function Cart(props) {
  const {image,name,price}=props.cart;
  return (
    <div className="my-2 bg-light">
      <div className="d-flex align-items-center justify-content-center">
          <div className="w-25">
            <img src={image} className="w-50 h-50" alt="" />
          </div>
          <div className="w-75">
            <h5>{name}</h5>
            <p>price : ${price}</p>
          </div>
      </div>
    </div>
  );
}
