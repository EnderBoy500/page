import {useState} from "react";
import {GoBook} from "react-icons/go";
import "./mod_card.css"

function ModrinthModCard({modId = "", status = "supported", isOpenSource = false, githubRepoName = "", hasWiki = false}) {
    const modUrl = `https://api.modrinth.com/v2/project/${modId}`
    const [iconUrl, setIconUrl] = useState("");
    const [modTitle, setModTitle] = useState("");
    const [modDesc, setModDesc] = useState("");
    const [modDownloads, setModDownloads] = useState(0);

    fetch(modUrl).then(response => response.json()).then(data => {
        setIconUrl(data.icon_url)
        setModTitle(data.title)
        setModDesc(data.description)
        setModDownloads(data.downloads)
    }).catch(error => console.error(error));

    function goToModPage() {
        document.location = `https://modrinth.com/mod/${modId}`
    }

    function supportMe() {
        document.location = "https://www.patreon.com/c/u95057572"
    }

    function goToIssues() {
        document.location = "https://github.com/EnderBoy500/Issues/issues"
    }

    function goToGithubPage() {
        if (isOpenSource) {
            document.location = `https://github.com/EnderBoy500/${githubRepoName}`
        }
    }

    function goToWiki() {
        if (isOpenSource) {
            document.location = `https://github.com/EnderBoy500/${githubRepoName}/wiki`
        }
    }

    function chooseStatusColor() {
        if (status === "supported") return <h5 className="mod-card-status-supported">*</h5>
        else if (status === "onetimespecial") return <h5 className="mod-card-status-onetime">*</h5>
        else if (status === "discontinued") return <h5 className="mod-card-status-discontinued">*</h5>
        else if (status === "unknown") return <h5 className="mod-card-status-unknown">*</h5>
        else if (status === "redesigning") return <h5 className="mod-card-status-redesigning">*</h5>
        else if (status === "replaced") return <h5 className="mod-card-status-replaced">*</h5>
        else return null;
    }

    return(
        <div className="mod-card">
            {chooseStatusColor()}
            <div className="mod-card-header">
                <img className="mod-icon" src={iconUrl} alt="Couldn't find mod icon"/>
                <div className="mod-card-info">
                    <h3>&nbsp; {modTitle}</h3>
                    <div className="mod-card-downloads">
                        <img title="Downloads" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-gray.png" alt="Downloads"/>
                        <h4>{modDownloads}</h4>
                    </div>
                </div>
            </div>
            <p className="mod-desc">{modDesc}</p>
            <div className="mod-card-badges">
                {hasWiki ? <GoBook size={24} className="mod-card-badges-wiki" onClick={goToWiki}/> : null}
                {isOpenSource ? <img title="Go To Source Code" className="mod-card-badges-github" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/github-logo.png" alt="Failed to load icon"
                                     onClick={goToGithubPage}/> : null}
                <img title="Report Bugs" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/issues.png"
                     alt="Failed to load icon" onClick={goToIssues}/>
                <img title="More About This Project" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/info.png"
                     alt="Failed to load icon"/>
                <img title="Support Me!" className="patreon-icon" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/patreon.png"
                     alt="Failed to load icon" onClick={supportMe}/>
                <img title="Download from Modrinth" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-green.png"
                     alt="Download" onClick={goToModPage}/>
            </div>
        </div>
    );
}

export default ModrinthModCard