import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Home.css"

const Home = (props) => {

    return (
        <div className='home-page'>
        <div className='title'>
        <h1>You walk into a coffee shop only to be bombarded with questions from some guy! But you like to be challenged so you go ahead and try to answer all that you can! Your answers will determine where the story leads to..</h1>
        </div>
        <Link to='/story'>
        <button className='start-button'>Start your journey</button>
        </Link>
        <br></br>
        <Link to='/sign-up'>
        <button className="start-button">Sign-Up</button>
        </Link>
        <Link to='/sign-in'>
        <button className="start-button">Sign-In</button>
        </Link>
        <div>
            <img className="tahnya-img" src='https://i.imgur.com/1ZPrwam.png' alt="tahnya-image" />
            </div>
        </div>
    )
}

export default Home;
