import { useState } from "react";


export default function JournalPage() {
    const [response, setResponse]=useState();
    return (
        <textarea rows="6" cols="80" id="response" onChange={e=>setResponse(e.target.value)} />
    )
}




