import { useState } from "react";


export default function JournalPage(props) {
   
    return (
        <textarea rows="6" cols="80" id="response" onChange={e=>props.response(e.target.value)} />
    )
}




