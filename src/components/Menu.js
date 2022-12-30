import React, { Component } from 'react'
import { useRef, useState, useEffect, useContext } from 'react';

import { Link } from "react-router-dom"
import { useNavigate } from 'react-router'

import useAxiosArtists from './useAxiosArtists';

<link rel="stylesheet" href="src/fonts/font-awesome.min.css"></link>
const ADD_URL ="http://3.75.38.7:4184/api/artist/add"
const SEARCH_URL = "http://3.75.38.7:4184/api/artist/search"

const Menu = () => {
    const errRef = useRef();
    const navigate = useNavigate()

    //const [artist, setSearch] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const token = localStorage.getItem('token');
    //const userData = localStorage.getItem('userData');
    const {} = useAxiosArtists();
    
    useEffect(() => {
        setErrMsg('');
    }, [])    
    
    let userArtists = JSON.parse(localStorage.getItem("userData"))
    navigate(0)

    //console.log(userRelease)
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
                        <Link to="/News">My News</Link>
                    </button>
                    <button class="sidebar_btn2">
                        <Link to="/Search">Search</Link>
                    </button>
                </aside>
            <container class = "menu">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>


                <div class="disc">
                    <h1>Your artists:</h1>
                </div>
                {userArtists &&userArtists.rows.map((userArtists) => 
                <article class = "post">
                    <div>
                        {userArtists.name}
                    </div>
                </article>
                )}
            </container>
        </div>
    )
}
     export default  Menu