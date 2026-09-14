import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="bg-white px-3 py-5 sm:px-6 sm:py-[100px]">
            <div className="mx-auto flex max-w-[835px] flex-col items-center justify-between gap-4 sm:flex-row sm:gap-10">
                <div className="max-w-[470px] text-center sm:text-left">
                    <h1 className="font-display text-[24px] font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl">
                        Build Your Ideal
                    </h1>
                    <h1 className="bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text font-display text-[24px] font-extrabold leading-none tracking-tight text-transparent sm:text-5xl">
                        Development Stack
                    </h1>
                    <p className="mt-3 text-[10px] leading-[1.55] text-slate-500 sm:mt-5 sm:text-base sm:leading-[1.65]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-2 sm:mt-9 sm:justify-start">
                        <a href="#technologies"
                            className="inline-flex h-[27px] items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-r from-[#f97316] to-[#ec4899] px-3 text-[9px] font-semibold text-white shadow-md shadow-pink-500/20 transition-opacity hover:opacity-90 sm:h-[30px] sm:px-2 sm:text-[10px]">
                            Explore Technologies
                        </a>
                        <a href="#about"
                            className="inline-flex h-[27px] items-center justify-center whitespace-nowrap rounded-md border border-slate-200 px-7 text-[9px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 sm:h-[30px] sm:px-8 sm:text-[10px]">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="shrink-0">
                    <img
                        src={banner}
                        alt="Loading Image..."
                        className="w-[220px] sm:w-[260px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;