import React from "react";

export default function Cart(props) {
  console.log(props.carts);
  return (
    <div>
      <div className="card p-2">
        <h2>Total Added {props.carts.length}</h2>
      </div>
    </div>
  );
}
