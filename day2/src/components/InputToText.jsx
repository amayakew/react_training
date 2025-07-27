import { useState } from "react";

export default function InputToText({labelText}) {
    const[content, setContent] = useState();

    return(
        <div style={{display: "flex", flexDirection:"column"}}>
            <h1>{content}</h1>
            <div>
                <label htmlFor="headingContent">{labelText}</label>
                <input 
                    id="headingContent" 
                    type="text" 
                    value={content} 
                    placeholder="Enter your text" 
                    onChange={(e)=>setContent(e.target.value)}
                />
            </div>
        </div>
    );
};