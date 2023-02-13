import './Input.css';

const Input = ({uid, inputValue, onInputChange, clsName}) => {
    return <input 
        className= {clsName || "input"}
        id={uid} 
        key={uid} 
        value={inputValue} 
        onChange={onInputChange}/>
};
export default Input;