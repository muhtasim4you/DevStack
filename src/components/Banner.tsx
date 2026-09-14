import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="bg-white px-6 py-[100px]">
            <div className="mx-auto flex max-w-[835px] items-center justify-between gap-10">
                <div className="max-w-[470px]">
                    <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight text-slate-900">
                        Build Your Ideal
                    </h1>
                    <h1 className="bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text font-display text-5xl font-extrabold leading-none tracking-tight text-transparent">
                        Development Stack
                    </h1>
                    <p className="mt-5 text-base leading-[1.65] text-slate-500">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-9 flex items-center gap-2">
                        <a href="#technologies"
                            className="inline-flex h-[30px] items-center justify-center whitespace-nowrap rounded-md bg-gradient-to-r from-[#f97316] to-[#ec4899] px-2 text-[10px] font-semibold text-white shadow-md shadow-pink-500/20 transition-opacity hover:opacity-90">
                            Explore Technologies
                        </a>
                        <a href="#about"
                            className="inline-flex h-[30px] items-center justify-center whitespace-nowrap rounded-md border border-slate-200 px-8 text-[10px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="shrink-0">
                    <img
                        src={banner}
                        alt="Loading Image..."
                        className="w-[260px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;