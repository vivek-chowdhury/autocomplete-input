import { useEffect, useState } from "react";
import fileList from "../../services/fileService";
import File from "./File";
import './Explorer.css';

const Explorer = () => {
    const [explorerList, setExplorerList] = useState({files: []});
    useEffect(() => {
        setExplorerList({ files: fileList.files });
        console.log(fileList)
    }, []);

    return <div className="explorer-container">
        <span className="explorer">Explorer</span>
        <div>
         {explorerList.files.map((node) => <File key={node.uid} {...node}/>)}
        </div>
    </div>
};

export default Explorer;