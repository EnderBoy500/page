import {useState} from "react";

function ModInfoPopUp({modId = "", status = "supported"}) {
    const modUrl = `https://api.modrinth.com/v2/project/${modId}`
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

    function statusLabels() {
        const supported = {
            color: "greenyellow",
        }
        const onetime = {
            color: "orange",
        }
        const discontinued = {
            color: "red",
        }
        const unknown = {
            color: "darkmagenta",
        }
        const redesigning = {
            color: "darkblue",
        }
        const replaced = {
            color: "magenta",
        }
        const tempOutOrder = {
            color: "yellow",
        }

        if (status === "supported") return <label style={supported} className="mod-info-popup-status">Status: Supported</label>
        else if (status === "onetimespecial") return <label style={onetime} className="mod-info-popup-status">Status: One-time Special</label>
        else if (status === "discontinued") return <label style={discontinued} className="mod-info-popup-status">Status: Discontinued</label>
        else if (status === "unknown") return <label style={unknown} className="mod-info-popup-status">Status: Unknown</label>
        else if (status === "redesigning") return <label style={redesigning} className="mod-info-popup-status">Status: Redesigning</label>
        else if (status === "replaced") return <label style={replaced} className="mod-info-popup-status">Status: Replaced</label>
        else if (status === "tempoutorder") return <label style={tempOutOrder} className="mod-info-popup-status">Status: Temporarily Out of Order</label>
        else return null;
    }

    function supportedLoaders() {
        if (!modSupportedLoaders.includes("neoforge")) {
            return <label className="mod-info-popup-sidebar-loader">Fabric</label>
        }
        return <div className="mod-info-popup-sidebar-loader">
            <label style="mod-info-popup-sidebar-loader">Fabric</label>
            <label style="mod-info-popup-sidebar-loader">Neoforge</label>
        </div>
    }

    return(
        <>
            <div className="blur-overlay"></div>

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
        </>
    );
}

export default ModInfoPopUp