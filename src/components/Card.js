import React from 'react'
import Modal from './Modal';
import { useState } from "react";

const Card = ({ book }) => {
const [show, setShow] = useState(false);
const [bookItem, setItem] = useState();
console.log(book);
    return (
        <>
            {
                book.map((items) => {
                    let thumbnails = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
                    let amount = items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
                    let title = items.volumeInfo && items.volumeInfo.title
                    if (thumbnails !== undefined && amount !== undefined) {
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(items)}}>
                                <img src={thumbnails} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                        <Modal show={show} items={bookItem} onClose={()=>setShow(false)}/>
                        </>
                        )
                    }
                })
            }

        </>
    )
}
export default Card