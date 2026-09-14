import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="h-[58px] border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-full max-w-[835px] items-center justify-between px-4">
                <div className="shrink-0">
                    <img className="w-[98px]" src={Logo} alt="Dev Stack" />
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center gap-6 text-[10px] text-slate-600">
                        <li className="text-[#d91b7e]">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-[10px] text-slate-700">Sign In</p>
                    <button className="h-[29px] rounded-full bg-[#d91b7e] px-4 text-[10px] font-medium text-white transition-opacity hover:opacity-90">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default Nav;