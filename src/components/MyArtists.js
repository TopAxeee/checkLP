import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class MyArtists extends Component {
  render() {
    return (
        <div class="main_menu">
        <button class="sidebar_btn">
            <Link to="/MyArtists">My Artists</Link>
        </button>
    <container class = "menu">
        <button onClick class="sidebar_btn">
            <Link to="/MyArtist">MyArtists</Link>
        </button>
        <div class="checkLP">
            <h1>CheckLP</h1>
        </div>
        <div class="new-search">
            <input type="text" maxlength= "250" placeholder="Search" class="searchbar"></input>
        </div>

        <article class="post">
            <div class="post__header  post__header--preview">
                <a href="post.html">
                </a>
            </div>

            <div class="post__content">
                <h2 class="post__title">
                    <p href="post.html">Track name</p>
                </h2>
                <p class="post__description">ARTIST NAME</p>
            </div>
        </article>

        <article class="post">
            <div class="post__header  post__header--preview">
                <a href="post.html">
                </a>
            </div>

            <div class="post__content">
                <h2 class="post__title">
                    <p href="post.html">Track name</p>
                </h2>
                <p class="post__description">ARTIST NAME</p>
            </div>
        </article>

        <article class="post">
            <div class="post__header  post__header--preview">
                <a href="post.html">
                </a>
            </div>

            <div class="post__content">
                <h2 class="post__title">
                    <p href="post.html">Track name</p>
                </h2>
                <p class="post__description">ARTIST NAME</p>
            </div>
        </article>

        <article class="post">
            <div class="post__header  post__header--preview">
                <a href="post.html">
                </a>
            </div>

            <div class="post__content">
                <h2 class="post__title">
                    <p href="post.html">Track name</p>
                </h2>
                <p class="post__description">ARTIST NAME</p>
            </div>
        </article>
    </container>
</div>
    )
  }
}
