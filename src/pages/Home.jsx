import NavBar from "../components/NavBar.jsx";
import ModrinthModCard from "../components/ModrinthModCard.jsx";

function Home() {
    function goToGithub() {
        window.open("https://github.com/Enderboy500", "_blank", "noreferrer");
    }

    function goToModrinth() {
        window.open("https://modrinth.com/user/EnderBoy", "_blank", "noreferrer");
    }

    function goToYouTube() {
        window.open("https://www.youtube.com/@enderboy5OO", "_blank", "noreferrer");
    }

    return(<>
        <NavBar isHome={true}/>
        <br/>
        <div className="info">
            <p className="info-title">Enderboy</p>
            <p className="info-desc">Welcome to my website! Take a look at my mods and other things I've made</p>
            <div className="links">
                <div className="link-github" onClick={goToGithub}>
                    <img className="link-logo" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/github-logo.png" alt="Github"></img>
                    <p className="link-github-text">
                        Github
                    </p>
                </div>
                <div className="link-modrinth" onClick={goToModrinth}>
                    <img className="link-logo" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/modrinth.png" alt="Modrinth"></img>
                    <p className="link-modrinth-text">
                        Modrinth
                    </p>
                </div>
                <div className="link-youtube" onClick={goToYouTube}>
                    <img className="link-logo" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/youtube-logo.png" alt="YouTube"></img>
                    <p className="link-youtube-text">
                        YouTube
                    </p>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="mod-card-list">
            <ModrinthModCard modId="netherandend" githubId="Ciph3rJ/NetherAndEnd" isOpenSource={true}/>
            <ModrinthModCard modId="ironandsteel"/>
            <ModrinthModCard modId="tricks-and-traps"/>
            <ModrinthModCard modId="lootbundles"/>
            <ModrinthModCard modId="stains-and-colors"/>
            <ModrinthModCard modId="allay-vex-conversion" githubId="Ciph3rJ/AllayVexConversion" isOpenSource={true}/>
            <ModrinthModCard modId="bellum" githubId="EnderBoy500/Bellum" isOpenSource={true}/>
            <ModrinthModCard modId="cipherlib" githubId="EnderBoy500/Bellum" isOpenSource={true}/>
            <ModrinthModCard modId="raven-mail" githubId="EnderBoy500/RavenMail" isOpenSource={true} hasWiki={true}/>
        </div>
    </>);
}

export default Home