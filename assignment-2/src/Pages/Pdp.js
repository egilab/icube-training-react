import React, { useState, useEffect } from "react";
import { NotFound } from "../Pages/Index";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action_mincart, action_addcart } from "../actions/action_cart";
import { DataDummy } from "../DataDummy";

function Pdp() {
  let query = new URLSearchParams(useLocation().search);
  let isQueryExist = query && query.get("title");
  return (
    <div className="wrapper">
      {!isQueryExist && <NotFound />}
      {isQueryExist && <Detail />}
    </div>
  );
}

function Detail(props) {
  let query = new URLSearchParams(useLocation().search);
  const [qty, setQty] = useState(0);
  const [productDetail, setProductDetail] = useState("");
  const dispatch = useDispatch();
  const title = query.get("title").replace("+", " ");

  useEffect(() => {
    const getData = () => {
      for (let i = 0; i < 2; i++) {
        DataDummy[i].products.forEach((val) => {
          if (val.name === title) {
            setProductDetail({
              id: val.id,
              name: val.name,
              price: val.price,
              description: val.description,
            });
          }
        });
      }
    };
    getData();
  }, []);

  const handleAdd = () => {
    dispatch(
      action_addcart({
        id: productDetail.id,
        name: productDetail.name,
        price: productDetail.price
      })
    );
    setQty(qty + 1);
  };

  const handleMin = () => {
    if (qty > 0) {
      dispatch(
        action_mincart({
          id: productDetail.id,
          name: productDetail.name,
          price: productDetail.price
        })
      );
      setQty(qty - 1);
    }
  };
  return (
    <>
      <div className="section-pdp">
        <img src="https://dummyimage.com/400x400/000/fff" alt="My Product" />
        <div className="product-info">
          <h1 className="title">{productDetail.name}</h1>
          <p className="price-2">{productDetail.price}</p>
          <div className="desc">{productDetail.description}</div>
          <div className="actions">
            <button className="qty-action" onClick={handleMin}>
              -
            </button>
            <input type="text" name="input-qty" value={qty} readOnly />
            <button className="qty-action" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pdp;
