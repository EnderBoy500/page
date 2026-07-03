import {useState} from "react";

function NavBar() {
    const [isDropdownSelected, setDropdownSelected] = useState(false);

    function goToAboutMe() {
        document.location = "https://enderboy500.github.io/page/#/about"
    }

    function returnHome() {
        document.location = "https://enderboy500.github.io/page/#/"
    }

    function changeDropdownArrow() {
        setDropdownSelected(!isDropdownSelected);
    }

    return(
        <div className="nav-main">
            <img title="About Me!" className="home-icon" src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/enderboy.icon.png"
                 alt="Failed to load icon" onClick={returnHome}/>

            <div className="central-nav-buttons">
                <button onMouseEnter={changeDropdownArrow} onMouseLeave={changeDropdownArrow}>Mods {isDropdownSelected ?
                    <img src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/dropdown_arrow_up.png" alt="Failed to load icon"/> :
                    <img src="https://raw.githubusercontent.com/EnderBoy500/Data/main/assets/page/dropdown_arrow_down.png" alt="Failed to load icon"/>}</button>
                <button>Updates</button>
                <button onClick={goToAboutMe}>About</button>
            </div>
        </div>
    );
}

export default NavBar