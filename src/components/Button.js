const Button = ({uid, onSearchClick, label}) => {
    return <button 
        id={uid} 
        key={uid} 
        onClick={onSearchClick}>{label}</button>
};
export default Button;