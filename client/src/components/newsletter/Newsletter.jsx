import React from 'react';
import "./newsletter.scss";
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className="news__container">
            <h1 className="title">NewsLetter</h1>
            <div className="desc">
                Get timely updates on your favorite products.
            </div>
            <div className="inputContainer">
                <input 
                    type="email" 
                    placeholder="Your email"
                />
                <SendIcon className="newsIcon" />
            </div>
        </div>
    )
}

export default Newsletter