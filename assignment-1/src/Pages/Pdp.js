import React from "react";
import { NotFound } from "../Pages/Index"
import { useLocation } from "react-router-dom";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    let isQueryExist = query && query.get("title");
    return (
        <div className="wrapper">
            {!isQueryExist && (
                <NotFound />
            )}
            {isQueryExist && (
                <Detail />
            )}
        </div>
    )
}

function Detail() {
    let query = new URLSearchParams(useLocation().search);
    return (
        <>
            <div className="section-pdp">
                <img src="https://dummyimage.com/400x400/000/fff" />
                <div className="product-info">
                    <h1 className="title">{query.get("title").replace("+", " ")}</h1>
                    <p class="price-2">Rp. 20.000</p>
                    <div className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                    <div class="actions">
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pdp;