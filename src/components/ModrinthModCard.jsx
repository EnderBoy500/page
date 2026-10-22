import "./../styles/modrinth_mod_card.css"
import {useState} from "react";
import {GoBook} from "react-icons/go";

function ModrinthModCard({modId = "", isOpenSource = false, githubId = "", hasWiki = false}) {
    const modUrl = `https://api.modrinth.com/v2/project/${modId}`
    const [modIcon, setModIcon] = useState("");
    const [modTitle, setModTitle] = useState("");
    const [modDescription, setModDescription] = useState("");
    const [modDownloads, setModDownloads] = useState(0);

    fetch(modUrl).then(response => response.json()).then(data => {
        setModIcon(data.icon_url)
        setModTitle(data.title)
        setModDescription(data.description)
        setModDownloads(data.downloads)
    }).catch(error => console.error(error));

    function goToModrinthPage() {
        window.open(`https://modrinth.com/mod/${modId}`, "_blank", "noreferrer");
    }
    function goToIssuesPage() {
        window.open(`https://github.com/EnderBoy500/Issues/issues`, "_blank", "noreferrer");
    }
    function goToSourcesPage() {
        window.open(`https://github.com/${githubId}`, "_blank", "noreferrer");
    }
    function goToWikiPage() {
        window.open(`https://github.com/${githubId}/wiki`, "_blank", "noreferrer");
    }

    return(
        <>
            <div className="modrinth-mod-card">
                <img className="modrinth-mod-card-icon" src={modIcon} alt={modTitle}/>
                <div className="modrinth-mod-card-text">
                    <h1 className="modrinth-mod-card-title">{modTitle}</h1>
                    <h3 className="modrinth-mod-card-desc">{modDescription}</h3>
                </div>
                <div className="modrinth-mod-card-numbers-icons">
                    <div className="modrinth-mod-card-numbers-download">
                        <img className="modrinth-mod-card-numbers-downloads-icon" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-gray.png" alt="Downloads"/>
                        <h1 className="modrinth-mod-card-numbers-downloads">{modDownloads}</h1>
                    </div>
                    <div className="modrinth-mod-card-icons">
                        {hasWiki ? <GoBook size={20} className="modrinth-mod-card-icons-icon-wiki" onClick={goToWikiPage}/> : null}
                        {isOpenSource ? <img className="modrinth-mod-card-icons-icon-github" onClick={goToSourcesPage}
                                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/github-logo.png"
                                             alt="Sources"/>
                            : null}
                        <img className="modrinth-mod-card-icons-icon-issues" onClick={goToIssuesPage}
                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/issues.png"
                             alt="Issues"/>
                        <img className="modrinth-mod-card-icons-icon-modrinth" onClick={goToModrinthPage}
                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/modrinth.png"
                             alt="Modrinth"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModrinthModCard