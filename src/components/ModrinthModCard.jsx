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

        if (status === "supported") return <label title="Status: Supported" style={supported} className="mod-card-status">*</label>
        else if (status === "onetimespecial") return <label title="Status: One-time Special" style={onetime} className="mod-card-status">*</label>
        else if (status === "discontinued") return <label title="Status: Discontinued" style={discontinued} className="mod-card-status">*</label>
        else if (status === "unknown") return <label title="Status: Unknown" style={unknown} className="mod-card-status">*</label>
        else if (status === "redesigning") return <label title="Status: Redesigning" style={redesigning} className="mod-card-status">*</label>
        else if (status === "replaced") return <label title="Status: Replaced" style={replaced} className="mod-card-status">*</label>
        else if (status === "tempoutorder") return <label title="Status: Temporarily Out of Order" style={tempOutOrder} className="mod-card-status">*</label>
        else return null;
    }

    function setModCard() {
        if (window.screen.width <= 768) {
            const scale = {
                scale: "80%",
                marginRight: "auto",
            }

            return (
                <div className="mod-card" style={scale}>
                    {chooseStatusColor()}
                    <div className="mod-card-header">
                        <img className="mod-icon" src={iconUrl} alt="Couldn't find mod icon"/>
                        <div className="mod-card-info">
                            <h3>&nbsp; {modTitle}</h3>
                            <div className="mod-card-downloads">
                                <img title="Downloads"
                                     src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-gray.png"
                                     alt="Downloads"/>
                                <h4>{modDownloads}</h4>
                            </div>
                        </div>
                    </div>
                    <p className="mod-desc">{modDesc}</p>
                    <div className="mod-card-badges">
                        {hasWiki ? <GoBook size={24} className="mod-card-badges-wiki" onClick={goToWiki}/> : null}
                        {isOpenSource ? <img title="Go To Source Code" className="mod-card-badges-github"
                                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/github-logo.png"
                                             alt="Failed to load icon"
                                             onClick={goToGithubPage}/> : null}
                        <img title="Report Bugs"
                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/issues.png"
                             alt="Failed to load icon" onClick={goToIssues}/>
                        <img title="More About This Project"
                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/info.png"
                             alt="Failed to load icon"/>
                        <img title="Support Me!" className="patreon-icon"
                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/patreon.png"
                             alt="Failed to load icon" onClick={supportMe}/>
                        <img title="Download from Modrinth"
                             src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-green.png"
                             alt="Download" onClick={goToModPage}/>
                    </div>
                </div>
            );
        }
        return (
            <div className="mod-card">
                {chooseStatusColor()}
                <div className="mod-card-header">
                    <img className="mod-icon" src={iconUrl} alt="Couldn't find mod icon"/>
                    <div className="mod-card-info">
                        <h3>&nbsp; {modTitle}</h3>
                        <div className="mod-card-downloads">
                            <img title="Downloads"
                                 src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-gray.png"
                                 alt="Downloads"/>
                            <h4>{modDownloads}</h4>
                        </div>
                    </div>
                </div>
                <p className="mod-desc">{modDesc}</p>
                <div className="mod-card-badges">
                    {hasWiki ? <GoBook size={24} className="mod-card-badges-wiki" onClick={goToWiki}/> : null}
                    {isOpenSource ? <img title="Go To Source Code" className="mod-card-badges-github"
                                         src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/github-logo.png"
                                         alt="Failed to load icon"
                                         onClick={goToGithubPage}/> : null}
                    <img title="Report Bugs"
                         src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/issues.png"
                         alt="Failed to load icon" onClick={goToIssues}/>
                    <img title="More About This Project"
                         src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/info.png"
                         alt="Failed to load icon"/>
                    <img title="Support Me!" className="patreon-icon"
                         src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/patreon.png"
                         alt="Failed to load icon" onClick={supportMe}/>
                    <img title="Download from Modrinth"
                         src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/download-green.png"
                         alt="Download" onClick={goToModPage}/>
                </div>
            </div>
        );
    }

    return(setModCard());
}

export default ModrinthModCard