import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav>
            <div className="flex justify-between items-center container mx-auto">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <ul className="flex gap-4 items-center">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <p>Sign In</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </nav >
    );
};

export default Nav;