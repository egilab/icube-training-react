import React from 'react';
import { Link } from 'react-router-dom';

const category_newarrival = [
    {
        "id": 1,
        "name": "Product Dummy 1",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 2,
        "name": "Product Dummy 2",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 3,
        "name": "Product Dummy 3",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 4,
        "name": "Product Dummy 4",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    }
]

const category_bestseller = [
    {
        "id": 1,
        "name": "Product Dummy A",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 2,
        "name": "Product Dummy B",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 3,
        "name": "Product Dummy C",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 3,
        "name": "Product Dummy D",
        "price": "Rp. 20.000",
        "img": "https://dummyimage.com/200x200/000/fff"
    }
]

function CategoryHome(props) {
    if (props.id == 1) {
        return (
            <>
                <h2>New Arrivals</h2>
                <div className="section-category">
                    {category_newarrival.map((category, index) => (
                        <div key={index} className="product-item">
                            <img src={category.img} />
                            <div className="item-info">
                                <p>{category.name}</p>
                                <p className="price">{category.price}</p>
                                <Link to={`category/1`}>View More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    } else if (props.id == 2) {
        return (
            <>
                <h2>Best Seller</h2>
                <div className="section-category">
                    {category_bestseller.map((category, index) => (
                        <div key={index} className="product-item">
                            <img src={category.img} />
                            <div className="item-info">
                                <p>{category.name}</p>
                                <p className="price">{category.price}</p>
                                <Link to={`category/2`}>View More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }

}

export default CategoryHome;