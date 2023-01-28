const Input = ({uid, inputValue, onInputChange}) => {
    return <input 
        id={uid} 
        key={uid} 
        value={inputValue} 
        onChange={onInputChange}/>
};
export default Input;