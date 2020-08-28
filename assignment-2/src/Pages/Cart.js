import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Cart() {
  const data = useSelector((state) => state.cart);
  const [datacart, setDataCart] = useState([]);

  useEffect(() => {
    const getData = () => {
      for (let key in data.cartitem) {
        setDataCart(prevArray => [...prevArray,
          {
            name: data.cartitem[key].data.name,
            price: data.cartitem[key].data.price,
            qty: data.cartitem[key].count,
          },
        ]);
      }
    };
    getData();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Cart</h1>
      {datacart.length > 0 ? (
        <>
          <table className="table-cart">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {datacart.map((val, index) => (
                <tr key={index}>
                  <td>{val.name}</td>
                  <td>{val.qty}</td>
                  <td>{val.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="center">
            <button className="checkout">Checkout</button>
          </div>
        </>
      ) : (
        <p>Cart Empty</p>
      )}
    </div>
  );
}

export default Cart;
