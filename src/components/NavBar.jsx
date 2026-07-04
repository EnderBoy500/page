import {useState} from "react";

function NavBar() {
    const [isDropdownSelected, setDropdownSelected] = useState(false);

    function goToAboutMe() {
        document.location = "https://enderboy500.github.io/page/#/about"
    }

    function returnHome() {
        document.location = "https://enderboy500.github.io/page/#/"
    }

    function switchDropdownArrow() {
        setDropdownSelected(!isDropdownSelected);
    }

    return(
        <div className="nav-main">
            <img className="home-icon" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/enderboy.icon.png"
                 alt="Failed to load icon" onClick={returnHome}/>

            <div className="central-nav-buttons">
                <button onMouseEnter={switchDropdownArrow} onMouseLeave={switchDropdownArrow}>{<div className="central-nav-buttons-mods">
                    Mods
                    {isDropdownSelected ? <img className="central-nav-buttons-dropdown-arrow" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/dropdown_arrow_up.png" alt="Failed to load icon"/> :
                    <img className="central-nav-buttons-dropdown-arrow" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/dropdown_arrow_down.png" alt="Failed to load icon"/>}
                </div>}</button>
                <button>Updates</button>
                <button onClick={goToAboutMe}>About</button>
            </div>
        </div>
    );
}

export default NavBar