import React from "react";
import { Link } from "react-router-dom";
import { DataDummy } from "../DataDummy";

function CategoryList(props) {
  if (props.id === "1") {
    return (
      <>
        <div className="widget-title">
          <h2>{DataDummy[0].category_name}</h2>
        </div>
        <div className="section-category">
          {DataDummy[0].products.map((category, index) => (
            <div key={index} className="product-item">
              <img src={category.img} alt={category.name} />
              <div className="item-info">
                <p>{category.name}</p>
                <p className="price">{category.price}</p>
                <Link
                  to={`/product?title=${encodeURIComponent(
                    category.name
                  ).replace(/%20/g, "+")}`}
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else if (props.id === "2") {
    return (
      <>
        <div className="widget-title">
          <h2>{DataDummy[1].category_name}</h2>
        </div>
        <div className="section-category">
          {DataDummy[1].products.map((category, index) => (
            <div key={index} className="product-item">
              <img src={category.img} alt={category.name} />
              <div className="item-info">
                <p>{category.name}</p>
                <p className="price">{category.price}</p>
                <Link
                  to={`/product?title=${encodeURIComponent(
                    category.name
                  ).replace(/%20/g, "+")}`}
                >
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CategoryList;
