import Input from "./Input";
import './AutoComplete.css';
import { useEffect, useState } from "react";

export const AutoComplete = ({uid, inputValue, hints, onInputChange}) => {

    const [expand, setExpand] = useState(true);

    const onDocumentClicked = (event) => {
        const toggle = event.target.id.includes('_autocomplete');
        setExpand(toggle);
    }

    useEffect(() => {
        document.addEventListener("click", onDocumentClicked);
        return () => {
            document.removeEventListener("click", onDocumentClicked)
        }
    });

    const onSelected = (event) => {
        console.log(event.target);
    }

    return <div key={uid} className="auto-container">
        <Input 
            uid={uid + '_inner_autocomplete'} 
            clsName="input-search"
            inputValue={inputValue} 
            onInputChange={onInputChange} />
        <div key={uid + '_hints_autocomplete'} className="hint-container">
            {expand && hints.map((item) => <div id={item.id + '_autocomplete'} key={item.id} onClick={onSelected}>{item.title}</div>)}
        </div>
    </div>
}