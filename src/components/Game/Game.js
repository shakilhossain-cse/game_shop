import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

export default function Game(props) {
  const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />;
  const { name, rating, price, image, relicedate, creator } = props.game;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="text-muted">Relise Date : {relicedate}</p>
          <p className="text-muted">Creator : {creator}</p>
          <p className="text-muted">
            Rating :
            <Rating
              initialRating={rating}
              emptySymbol="far fa-star text-warning"
              fullSymbol="fas fa-star text-warning"
              readonly
            />
          </p>
          <p>Price : {price}</p>
          <button
            className="btn btn-primary w-100"
            onClick={() => props.handelClick(props.game)}
          >
            {cartIcon} Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
