import {useState} from "react";

function ModDropdownElement({modId="", fontsize = "22px"}) {
    const modUrl = `https://api.modrinth.com/v2/project/${modId}`
    const [modTitle, setModTitle] = useState("");

    fetch(modUrl).then(response => response.json()).then(data => {
        setModTitle(data.title)
    }).catch(error => console.error(error));

    const elementTitleSize = {
        fontSize: fontsize,
    }

    return(
        <div className="mod-dropdown-box-element">
            <label className="mod-dropdown-box-element-title" style={elementTitleSize}>&nbsp; {modTitle}</label>
        </div>
    )
}

export default ModDropdownElement