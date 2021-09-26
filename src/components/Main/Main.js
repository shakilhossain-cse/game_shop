import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Game from "../Game/Game";

export default function Main() {
  const [games, setGames] = useState([]);
  const [carts, setCarts] = useState([]);
  const [cartotal , setCartotal] = useState(0)

  const handelClick = (cart) => {
    const newCart = [...carts, cart];
    setCarts(newCart);
    let amount = 0;
    for (const cart of newCart) {
        amount =parseFloat(cart.price) + amount
    }
    setCartotal(amount)
  };
  // const [newcalculation, setNewcalculation] = useState(0);

  // for (const cart of carts) {
  //   const newcal = cart.price + newcalculation
  //   setNewcalculation(newcal)
  // }

  // console.log(calculation);
  useEffect(() => {
    fetch("./game.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 bg-light">
          <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
            {games.map((game) => (
              <Game game={game} key={game.id} handelClick={handelClick} />
            ))}
          </div>
        </div>
        <div className="col-md-4 bg-light">
          <div className="py-3">
            <div className="card p-2">
              <h2>Total Added {carts.length}</h2>
              {carts.map((cart,index) => (
                <Cart cart={cart} key={index} />
              ))}
              <div className=" d-flex justify-content-between border-top p-3">
                <h5>Total Price </h5>
                <h5>
                  {cartotal}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
