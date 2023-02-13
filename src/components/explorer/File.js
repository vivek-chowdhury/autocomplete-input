import { useState } from 'react';
import './File.css';

const File = ({
    uid, 
    icon, 
    name, 
    type, 
    parent_uid,
    children}) => {
    
    const [isExpanded, setIsExpanded] = useState(false);
    const onSelected = (event) => {
        setIsExpanded(!isExpanded);
    }

    return <div id={'explorer-' + uid}>
                <span id={uid} key={uid} onClick={onSelected} className="file-container">
                    <span>{name}</span>
                </span>
                <div key={'inner-explorer-' + uid} className="child-container">
                    {isExpanded && children && children.map((node) => <File key={node.uid} {...node}/>)}
                </div>
            </div>
}

export default File;