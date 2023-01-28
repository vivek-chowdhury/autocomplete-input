import Input from "./Input";
import './AutoComplete.css';

export const AutoComplete = ({uid, inputValue, hints, onInputChange}) => {
    return <div key={uid} className="auto-container">
        <Input 
            uid={uid + '_inner'} 
            inputValue={inputValue} 
            onInputChange={onInputChange} />
        <div key={uid + '_hints'} className="hint-container">
            {hints.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
    </div>
}