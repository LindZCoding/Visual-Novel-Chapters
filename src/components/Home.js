import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Home.css"

const Home = () => {

    const startButton = () => {

    }

    return (
        <div className='home-page'>
        <div className='title'>
        <h1>Welcome to the world of this visual novel or is this a dating sim?</h1>
        </div>
        <Link to='/story'>
        <button className='start-button' onClick={startButton}>Start your journey</button>
        </Link>
        </div>
    )
}

export default Home;
