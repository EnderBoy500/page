import "./../styles/modrinth_mod_card.css"
import {useState} from "react";

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
                        {hasWiki ? <svg onClick={goToWikiPage} data-component="Octicon" aria-hidden="true" focusable="false"
                                        className="modrinth-mod-card-icons-icon-wiki"  viewBox="0 0 16 16" width="16" height="16"
                                        fill="currentColor" display="inline-block" overflow="visible"
                                        style="vertical-align:text-bottom">
                                <path
                                    d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
                            </svg>
                            : null}
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