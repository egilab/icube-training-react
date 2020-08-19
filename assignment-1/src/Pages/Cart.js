import React from "react";

function Cart() {
    return (
        <div className="wrapper">
            <h1 className="title">Cart</h1>
            <table className="table-cart">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://dummyimage.com/80x80/000/fff" /></td>
                        <td>Product Abc</td>
                        <td>2 Pcs</td>
                        <td>Rp. 20.000</td>
                        <td>Rp. 40.000</td>
                    </tr>
                    <tr>
                        <td><img src="https://dummyimage.com/80x80/000/fff" /></td>
                        <td>Product Efg</td>
                        <td>2 Pcs</td>
                        <td>Rp. 20.000</td>
                        <td>Rp. 40.000</td>
                    </tr>
                    <tr>
                        <td><img src="https://dummyimage.com/80x80/000/fff" /></td>
                        <td>Product Efg</td>
                        <td>2 Pcs</td>
                        <td>Rp. 20.000</td>
                        <td>Rp. 40.000</td>
                    </tr>
                </tbody>
            </table>
            <div className="center">
                <a className="checkout" href="#">Checkout</a>
            </div>
        </div>
    )
}

export default Cart;