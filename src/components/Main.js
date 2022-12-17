import React from 'react'
import Card from './Card'
import { useState } from 'react';
import axios from 'axios';

function Main() {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBrNFXJRFhEDJofPvAhZ7WY9vu0qrIz8mc'+'&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
        
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without book is like <br />a body without soul</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder='search'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="./liab2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}

export default Main
