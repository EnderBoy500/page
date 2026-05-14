import NavBar from "./components/NavBar.jsx";
import ModrinthModCard from "./components/ModrinthModCard.jsx";

function Home() {
    return(<>
        <NavBar isHome={true}/>
        <br/>
        <div className="mod-card-list">
            <ModrinthModCard modId="netherandend"/>
            <br/>
            <ModrinthModCard modId="ironandsteel" status="discontinued"/>
            <br/>
            <ModrinthModCard modId="enderlib" isOpenSource={true} githubRepoName="Enderlib" hasWiki={true}/>
            <br/>
            <ModrinthModCard modId="tricksandtraps" status="discontinued"/>
            <br/>
            <ModrinthModCard modId="lootbundles" status="discontinued"/>
            <br/>
            <ModrinthModCard modId="stains-and-colors" status="unknown"/>
            <br/>
            <ModrinthModCard modId="allay-vex-conversion"/>
            <br/>
            <ModrinthModCard modId="bellum"/>
        </div>
    </>);
}

export default Home