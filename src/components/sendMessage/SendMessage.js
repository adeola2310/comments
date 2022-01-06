import React from "react";
import "./SendMessage.scss";


const SendMessage = ({response})=>{
    console.log(response)
    return(
        <div className="card">
            <div className="card__message">
                <img src={response?.currentUser?.image.png} alt="profile" className="user"/>
                <textarea name="comment" className="card__message-comment" placeholder="Add a comment"/>
                <button className="card__message-btn">send</button>
            </div>
        </div>
    )
}

export default SendMessage
