import React from 'react';
import CategoryHome from '../Components/CategoryHome'


function Homepage() {
    return (
        <>
            <div className="section-banner">
                <img src="https://dummyimage.com/1280x400/000/c91616&text=Main+Banner" />
            </div>


            <div className="wrapper">
                <CategoryHome id="1" />
                <br/><br/>
                <CategoryHome id="2" />
            </div>
        </>
    )
}

export default Homepage;