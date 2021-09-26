import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Game from "../Game/Game";

export default function Main() {

    const [games, setGames] = useState([])
    const [carts , setCarts] = useState([])

    const handelClick = cart => {
      const newCart = [...carts,cart];
      setCarts(newCart);
    } 

    useEffect(() => {
        fetch('./game.json')
        .then(res => res.json())
        .then(data => setGames(data))
    }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 bg-light">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
            {
                games.map(game =>  <Game game={game} key={game.id} handelClick={handelClick}/>)
            }
        </div>
        </div>
        <div className="col-md-4 bg-light">
          <div className="py-3">
            <Cart carts={carts}/>
          </div>
        </div>
      </div>
    </div>
  );
}
