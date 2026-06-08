import { useLocation } from "react-router-dom";
import {useState} from "react";

function ModInfo() {
    const location = useLocation();
    const stateData = location.state;

    const modUrl = `https://api.modrinth.com/v2/project/${stateData?.modId}`
    const [iconUrl, setIconUrl] = useState("");
    const [modTitle, setModTitle] = useState("");
    const [modPublishDate, setModPublishDate] = useState("");
    const [modLastUpdatedDate, setModLastUpdatedDate] = useState("");
    const [modSupportedLoaders, setModSupportedLoaders] = useState(["fabric"]);

    fetch(modUrl).then(response => response.json()).then(data => {
        setIconUrl(data.icon_url)
        setModTitle(data.title)
        setModPublishDate(data.published)
        setModLastUpdatedDate(data.updated)
        setModSupportedLoaders(data.loaders)
    }).catch(error => console.error(error));

    return(
        <div className="mod-info-popup">
            <div className="mod-info-popup-sidebar">

            </div>
            <div className="mod-info-popup-panel">
                <div className="mod-info-popup-header">
                    <img className="mod-info-popup-icon" src={iconUrl} alt="Couldn't find mod icon"/>
                    <h3>&nbsp; {modTitle}</h3>
                </div>
                <hr/>
            </div>
        </div>
    );
}

export default ModInfo