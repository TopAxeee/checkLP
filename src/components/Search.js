import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
const ADD_URL = "http://3.75.38.7:4184/api/artist/add";
const SEARCH_URL = "http://3.75.38.7:4184/api/artist/search";
const Search = () => {
  const [artist, setSearch] = useState("");
  const [artistId, setId] = useState("");
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);

  const fetchData = async () => {
    try {
      var config = {
        method: "get",
        url: SEARCH_URL + "?name=" + artist,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios(config).then(function (response) {
        const searchData = JSON.stringify(response.data);
        setData(searchData);
        console.log(searchData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchAdd = async (artistId) => {
    try {
      var config = {
        method: "post",
        url: ADD_URL,
        data: { artistId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios(config).then(function (response) {
        const searchData = JSON.stringify(response.data);
        setData(searchData);
        console.log(searchData);
        setSuccess(true);

      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAdd = (e, artistId) => {

    e.preventDefault();
    fetchAdd(artistId);
    setSuccess(true);

  };
  let search = JSON.parse(data)

  return (         
  <>
    {success ? (
        <section>
            <h1>Artist added</h1>
            <br />
            <p>
                <Link to="/menu">Go to Artists</Link>
            </p>
        </section>
    ) : (
    <div class="main_menu">
      <container class="menu">
        <aside>
               <button class="sidebar_btn1">
                   <Link to="/News">My News</Link>
               </button>
               <button class="sidebar_btn2">
                   <Link to="/Menu">My Artists</Link>
               </button>
           </aside>
          <h1>Search artist</h1>
          <div class="new-search">
            <input
              type="text"
              maxLength="250"
              placeholder="Search"
              class="searchbar"
              id="search"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
              value={artist}
              required
            />
            <button onClick={handleSubmit} class="searchbtn"></button>
          </div>

          <span>
            {search &&
              search.array.map((searchArtists) => (
                <article class="post">
                  <div class="post_content">
                    <div class="post-name">{searchArtists.name} </div>
                    <img src= {searchArtists.img} width = "250"></img>

                    <button onClick={(e) => handleAdd(e, searchArtists.id) } class="post-plus">Add</button>
                  </div>
                </article>
              ))}
          </span>
      </container>
    </div>)}
    </>
  );
};
export default Search;
