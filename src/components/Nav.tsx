import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-20 h-[58px] border-b border-slate-100 bg-white sm:h-[34px]">
            <div className="relative mx-auto flex h-full max-w-[835px] items-center justify-between px-3 sm:px-4">
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="text-sm text-slate-500 sm:hidden"
                >
                    {isMenuOpen ? "×" : "☰"}
                </button>
                <div className="shrink-0 sm:static sm:order-first">
                    <img className="w-[72px] sm:w-[98px]" src={Logo} alt="Dev Stack" />
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
                <div className="flex items-center gap-2 sm:gap-4">
                    <p className="text-[8px] text-slate-700 sm:text-[10px]">Sign In</p>
                    <button className="h-[20px] rounded-full bg-[#d91b7e] px-2.5 text-[8px] font-medium text-white transition-opacity hover:opacity-90 sm:h-[29px] sm:px-4 sm:text-[10px]">
                        Sign Up
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute left-0 right-0 top-full border-b border-slate-100 bg-white px-4 py-4 shadow-md sm:hidden">
                    <ul className="flex flex-col gap-3 text-sm text-slate-600">
                        <li className="text-[#d91b7e]">Home</li>
                        <li><a href="#technologies" onClick={() => setIsMenuOpen(false)}>Technologies</a></li>
                        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav >
    );
};

export default Nav;