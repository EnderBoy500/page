import NavBar from "./components/NavBar.jsx";
import ModrinthModCard from "./components/ModrinthModCard.jsx";

function Home() {
    return(<>
        <NavBar isHome={true}/>
        <br/>
        <div className="mod-card-list">
            <ModrinthModCard modId="netherandend"/>
            <br/>
            <ModrinthModCard modId="enderlib" isOpenSource={true} githubRepoName="Enderlib" hasWiki={true}/>
        </div>
    </>);
}

export default Home