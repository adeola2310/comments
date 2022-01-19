import './App.scss';
import "./styles/main.scss"
import CommentCard from "./components/CommentCard/CommentCard";
import {useEffect, useState} from "react";
import {data} from "./data";
import SendMessage from "./components/sendMessage/SendMessage";

function App() {
    const [responses, setResponses] = useState([]);


    useEffect(()=>{
        setResponses(data);
    }, []);

  return (
    <div className="App">
        {responses?.comments?.map((comm)=>(
            <CommentCard
                comm={comm}
            />
        ))}
        <SendMessage
            response={responses}
        />
    </div>
  );
}

export default App;
