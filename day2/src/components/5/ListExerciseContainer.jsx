import Button from "./Button";
import ElementList from "./ElementList";
import Input from "./Input";
import { useState } from "react";

// export default function ListExerciseContainer() {
//     const [itemContent, setItemContent] = useState('');
//     const [buttonIsClicked, setButtonIsClicked] = useState(false);
//     const [list, setList] = useState([]);

//     if(buttonIsClicked){
//         setList([...list,itemContent]);
//         setItemContent('');
//         setButtonIsClicked(false);
//     }

//     return(
//         <div style={{display: "flex", flexDirection: "column", gap: "1.5em"}}>
//             <ElementList listContent={list}/>
//             <Input content={itemContent} changeInput={(e)=>setItemContent(e.target.value)}/>
//             <Button buttonIsDisabled={itemContent === ''} buttonClick = {() => setButtonIsClicked(true)}/>
//         </div>
//     );
// };




export default function ListExerciseContainer() {
    const [itemContent, setItemContent] = useState('');
    const [list, setList] = useState([]);

    const handleClick = () => {
        setList([...list,itemContent]);
        setItemContent('');
    }

    return(
        <div style={{display: "flex", flexDirection: "column", gap: "1.5em"}}>
            <ElementList listContent={list}/>
            <Input content={itemContent} changeInput={(e)=>setItemContent(e.target.value)}/>
            <Button buttonIsDisabled={itemContent === ''} buttonClick = {() => handleClick()}/>
        </div>
    );
};