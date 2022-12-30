import React, { Component } from 'react'
import { useRef, useState, useEffect, useContext } from 'react';

import { Link } from "react-router-dom"
import useAxiosRelease from './useAxiosRelease';

<link rel="stylesheet" href="src/fonts/font-awesome.min.css"></link>
const NEWS_URL ="http://3.75.38.7:4184/api/release"
//const SEARCH_URL = "http://3.75.38.7:4184/api/artist/search"

const News = () => {
    const errRef = useRef();
    
    const [artist, setSearch] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const token = localStorage.getItem('token');
    //const userData = localStorage.getItem('userData');
    const {} = useAxiosRelease();

    useEffect(() => {
        setErrMsg('');
    }, [artist])    
    let userRelease = JSON.parse(localStorage.getItem("releaseData"))
    console.log(userRelease)
    return ( 
        <div class="main_menu">
            <div class="exit">
                <Link to="/login">Logout</Link> 
            </div>
                <aside>
                <div class="checkLP">
                    <h1>CheckLP</h1>
                </div>
                    <button class="sidebar_btn1">
                        <Link to="/Menu">My Artists</Link>
                    </button>
                    <button class="sidebar_btn2">
                        <Link to="/Search">Search</Link>
                    </button>
                </aside>
            <container class = "menu">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>                    
                {userRelease&&userRelease.result.map((userRelease) => 
                <article class = "post">
                    <div class ="releaseName">
                        {userRelease.name}
                    </div>
                    <img src= {userRelease.img} width = "250"></img>

                    <div class ="releaseTitle">
                        {userRelease.title}
                    </div>
                    
                </article>
                )}
            </container>
        </div>
    )
}
     export default  News