import "./../styles/modrinth_mod_card.css"
import {useState} from "react";

function ModrinthModCard({modId = ""}) {
    const modUrl = `https://api.modrinth.com/v2/project/${modId}`
    const [modIcon, setModIcon] = useState("");
    const [modTitle, setModTitle] = useState("");
    const [modDescription, setModDescription] = useState("");
    const [modDownloads, setModDownloads] = useState(0);
    const [modLastUpdated, setModLastUpdated] = useState(0);

    fetch(modUrl).then(response => response.json()).then(data => {
        setModIcon(data.icon_url)
        setModTitle(data.title)
        setModDescription(data.description)
        setModDownloads(data.downloads)
        setModLastUpdated(data.updated)
    }).catch(error => console.error(error));

    return(
        <>
            <div className="modrinth-mod-card">
                <img className="modrinth-mod-card-icon" src={modIcon} alt={modTitle}/>
                <div className="modrinth-mod-card-text">
                    <h1 className="modrinth-mod-card-title">{modTitle}</h1>
                    <h3 className="modrinth-mod-card-desc">{modDescription}</h3>
                </div>
            </div>
        </>
    )
}

export default ModrinthModCard