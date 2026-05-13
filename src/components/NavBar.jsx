function NavBar({isHome = true}) {
    function goToAboutMe() {
        document.location = "../../about_me.html"
    }

    function supportMe() {
        document.location = "https://www.patreon.com/c/u95057572"
    }

    function returnHome() {
        document.location = "../../index.html"
    }


    return(
        <div className="nav-main">
            {!isHome ? <h2 className="home" onClick={returnHome}>Home</h2> : null}
            <img title="Support Me!" className="patreon-icon" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/patreon.png"
                 alt="Failed to load icon" onClick={supportMe}/>
            <img title="About Me!" className="about-me-icon" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/enderboy.icon.png"
                 alt="Failed to load icon" onClick={goToAboutMe}/>
        </div>
    );
}

export default NavBar