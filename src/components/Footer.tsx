import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white px-3 py-7 text-slate-500 sm:px-6 sm:py-10">
            <div className="mx-auto grid max-w-[835px] gap-8 text-center sm:grid-cols-2 sm:text-left md:grid-cols-[2fr_1fr_1fr_1fr]">
                <div className="sm:col-span-2 md:col-span-1">
                    <img className="mx-auto w-[78px] sm:mx-0" src={Logo} alt="Dev Stack" />
                    <p className="mx-auto mt-3 max-w-[250px] text-[9px] leading-relaxed text-slate-400 sm:mx-0">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="mt-4 flex justify-center gap-4 text-[9px] text-slate-600 sm:justify-start">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#d91b7e]">GitHub</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#d91b7e]">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#d91b7e]">LinkedIn</a>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <h3 className="text-[9px] font-bold uppercase text-slate-900">Product</h3>
                    <a href="#home" className="mt-3 block text-[9px] hover:text-[#d91b7e]">Home</a>
                    <a href="#technologies" className="mt-2 block text-[9px] hover:text-[#d91b7e]">Technologies</a>
                    <a href="#projects" className="mt-2 block text-[9px] hover:text-[#d91b7e]">Projects</a>
                </div>
                <div className="hidden sm:block">
                    <h3 className="text-[9px] font-bold uppercase text-slate-900">Company</h3>
                    <a href="#about" className="mt-3 block text-[9px] hover:text-[#d91b7e]">About</a>
                    <a href="#contact" className="mt-2 block text-[9px] hover:text-[#d91b7e]">Contact</a>
                    <a href="#careers" className="mt-2 block text-[9px] hover:text-[#d91b7e]">Careers</a>
                </div>
                <div className="hidden sm:block">
                    <h3 className="text-[9px] font-bold uppercase text-slate-900">Legal</h3>
                    <a href="#privacy" className="mt-3 block text-[9px] hover:text-[#d91b7e]">Privacy Policy</a>
                    <a href="#terms" className="mt-2 block text-[9px] hover:text-[#d91b7e]">Terms of Service</a>
                </div>
            </div>
            <div className="mx-auto mt-7 flex max-w-[835px] flex-wrap justify-between gap-3 border-t border-slate-100 pt-4 text-[8px] text-slate-400 sm:mt-8 sm:text-[9px]">
                <span>© 2026 Dev Stack. All rights reserved.</span>
                <span className="flex gap-4">
                    <a href="#privacy" className="hover:text-[#d91b7e]">Privacy</a>
                    <a href="#terms" className="hover:text-[#d91b7e]">Terms</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
