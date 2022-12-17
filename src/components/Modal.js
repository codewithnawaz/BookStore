import React from "react";
import { useState } from "react";

const Modal = ({show,items,onClose}) => {
    if(!show){
        return null;
    }
    let thumbnails = items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
    return (
        <div className="overlay">
            <div className="overlay-inner">
                <button  onClick={onClose} className="close"><i class="fa-solid fa-xmark"></i></button>
                <div className="inner-box">
                   <img src={thumbnails} alt="" />
                    <div className="info">
                        <h1>{items.volumeInfo.title}</h1>
                        <h3>{items.volumeInfo.authors}</h3>
                        <h4>{items.volumeInfo.publisher}<span>{items.volumeInfo.publishedDate}</span></h4><br />
                        <a href={items.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <h4 className="discription">{items.volumeInfo.description}</h4>
            </div>
        </div>
    )
}
export default Modal;