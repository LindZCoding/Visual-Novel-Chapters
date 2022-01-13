import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Home.css"

const Home = (props) => {


    return (
        <div className='home-page'>
        <div className='title'>
        <h1>The choices you make throughout the story will determine how the story plays out.</h1>
        </div>
        <Link to='/story'>
        <button className='start-button'>Start your journey</button>
        </Link>
        <div>
            <img className="tahnya-img" src='https://i.imgur.com/1ZPrwam.png' alt="tahnya-image" />
            </div>
        </div>
    )
}

export default Home;
