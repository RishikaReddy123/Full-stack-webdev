import { useState } from "react"
import "./Lottery.css"
import "./helper"
import { genTicket, sum } from "./helper";

export default function Lottery() {
    const [ticket, setTicket] = useState(genTicket(3));
    const isWinning = sum(ticket) === 15;

    let newTicket = () => {
        setTicket(genTicket(3));
    };

    return( 
        <div>
        <h1>Lottery Game</h1>
        <div className = "ticket">
            <span>{ticket[0]}</span>
            &nbsp;
            <span>{ticket[1]}</span>
            &nbsp;
            <span>{ticket[2]}</span>
        </div><br/>
        <button onClick={newTicket}>New Ticket</button>
        {isWinning ? (<h2>Congrats!! You've won Lottery!</h2>) : (<h2>Try Again!</h2>)}
        </div>  
    );
};

