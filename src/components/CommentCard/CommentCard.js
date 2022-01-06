import React, {useState} from "react";
import "./CommentCard.scss";
import reply from "../../images/icon-reply.svg";


const CommentCard = ({comm})=>{
    const [showReply, setShowReply] = useState(false);

    const showResplies = ()=>{
        setShowReply(true);
    }

    console.log(comm)

    return (
        <>
            <div className="card" key={comm.id}>
                <div className="card__content">
                    <div className="card__upvote">
                        <span className="increase">+</span>
                        <span className="value">{comm.score}</span>
                        <span className="decrease">-</span>
                    </div>
                    <div className="card__details">
                        <div className="card__details-header">
                            <div className="title">
                                <img src={comm.user.image.png} alt="user" className="profile"/>
                                <h5>{comm.user.username}</h5>
                                <p>{comm.createdAt}</p>
                            </div>
                            <div className="card__details-action">
                                <img src={reply} alt='reply'/><p onClick={()=>showResplies()}>Reply</p>
                            </div>
                        </div>
                        <div className="card__details-note">
                            <p>{comm.content}</p>
                        </div>
                    </div>
                </div>
            </div>

            {comm.replies == 0 ? null :
             comm.replies.map((res)=>(
                 <div className="scroll-replies">
                     <div className="card" key={res.id}>
                         <div className="card__content">
                             <div className="card__upvote">
                                 <span className="increase">+</span>
                                 <span className="value">{res.score}</span>
                                 <span className="decrease">-</span>
                             </div>
                             <div className="card__details">
                                 <div className="card__details-header">
                                     <div className="title">
                                         <img src={res.user.image.png} alt="user" className="profile"/>
                                         <h5>{res.user.username}</h5>
                                         {res.user.username === "juliusomo" ? <span>you</span> : ""}
                                         <p>{res.createdAt}</p>
                                     </div>
                                     <div className="card__details-action">
                                         <img src={reply} alt='reply'/><p onClick={()=>showResplies()}>Reply</p>
                                     </div>
                                 </div>
                                 <div className="card__details-note">
                                     <p><span className="replyto">{'@'}{res.replyingTo} {' '}</span>{res.content}</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

             ))
            }
        </>
    )
}

export default CommentCard
