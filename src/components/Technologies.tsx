import { useState } from "react";
import { technologies } from "../data/technologies";

const Technologies = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [duplicateMessage, setDuplicateMessage] = useState("");

    const selectedTechnologies = technologies.filter((technology) =>
        selectedIds.includes(technology.id),
    );

    const addTechnology = (id: string) => {
        if (selectedIds.includes(id)) {
            setDuplicateMessage("This technology is already in your stack.");
            return;
        }

        setDuplicateMessage("");
        setSelectedIds((currentIds) => [...currentIds, id]);
    };

    const removeTechnology = (id: string) => {
        setSelectedIds((currentIds) => currentIds.filter((currentId) => currentId !== id));
    };

    return (
        <section id="technologies" className="bg-white px-6 pb-20 pt-4">
            <div className="mx-auto max-w-[835px]">
                <div className="mb-5">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                        Explore the <span className="text-[#d93c9b]">Technologies</span>
                    </h2>
                    <p className="mt-1 text-[10px] text-slate-400">
                        Pick one technology per category to build your ideal stack.
                    </p>
                    {duplicateMessage && (
                        <p role="alert" className="mt-2 text-[10px] font-medium text-rose-500">
                            {duplicateMessage}
                        </p>
                    )}
                </div>

                <div className="grid items-start gap-4 lg:grid-cols-[1fr_150px]">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => {
                            const isSelected = selectedIds.includes(technology.id);

                            return (
                                <article
                                    key={technology.id}
                                    className={`group flex min-h-[154px] flex-col rounded-lg border bg-white p-3 shadow-[0_3px_12px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(217,27,126,0.12)] ${isSelected ? "border-[#d91b7e]" : "border-slate-100"}`}
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <img
                                            src={technology.icon}
                                            alt=""
                                            className="h-5 w-5 object-contain"
                                        />
                                        <span
                                            className="rounded-full px-2 py-0.5 text-[7px] font-medium"
                                            style={{
                                                backgroundColor: `${technology.accent}18`,
                                                color: technology.accent,
                                            }}
                                        >
                                            {technology.badge}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-[11px] font-bold text-slate-900">
                                        {technology.name}
                                    </h3>
                                    <p className="mt-1 line-clamp-3 text-[8px] leading-[1.45] text-slate-400">
                                        {technology.description}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between pt-2 text-[7px] text-slate-500">
                                        <span className="rounded bg-slate-50 px-1.5 py-1">
                                            {technology.category}
                                        </span>
                                        <span>{technology.difficulty}</span>
                                        <span className="text-amber-500">&#9733; {technology.rating}</span>
                                    </div>
                                    <button
                                        type="button"
                                        disabled={isSelected}
                                        onClick={() => addTechnology(technology.id)}
                                        className={`mt-2 h-7 rounded text-[9px] font-semibold transition-colors ${isSelected ? "cursor-not-allowed border border-[#d91b7e]/20 bg-[#d91b7e]/5 text-[#7f174f]" : "bg-slate-950 text-white hover:opacity-85"}`}
                                    >
                                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                                    </button>
                                </article>
                            );
                        })}
                    </div>

                    <aside className="rounded-lg border border-slate-100 p-3 shadow-[0_3px_12px_rgba(15,23,42,0.04)]">
                        <h3 className="text-[10px] font-bold text-slate-900">Your Stack</h3>
                        <p className="mt-1 text-[8px] text-slate-400">
                            {selectedTechnologies.length === 0
                                ? "No technologies selected yet."
                                : `${selectedTechnologies.length} Technology Selected.`}
                        </p>
                        <div className="mt-3 flex min-h-[76px] flex-col gap-1 rounded-md border border-dashed border-slate-100 p-2">
                            {selectedTechnologies.length === 0 ? (
                                <span className="m-auto text-[8px] text-slate-300">Your stack is empty.</span>
                            ) : (
                                selectedTechnologies.map((technology) => (
                                    <div
                                        key={technology.id}
                                        className="flex items-center gap-2 rounded border border-slate-100 px-1.5 py-1"
                                    >
                                        <img src={technology.icon} alt="" className="h-4 w-4 object-contain" />
                                        <span className="min-w-0 flex-1">
                                            <span className="block truncate text-[8px] font-semibold text-slate-700">
                                                {technology.name}
                                            </span>
                                            <span className="block text-[7px] text-slate-400">{technology.category}</span>
                                        </span>
                                        <button
                                            type="button"
                                            aria-label={`Remove ${technology.name}`}
                                            onClick={() => removeTechnology(technology.id)}
                                            className="text-sm leading-none text-slate-300 hover:text-rose-500"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        {selectedTechnologies.length > 0 && (
                            <button
                                type="button"
                                onClick={() => setSelectedIds([])}
                                className="mt-3 h-7 w-full rounded-md border border-rose-200 bg-rose-50/30 text-[9px] font-semibold text-[#7f174f] transition-colors hover:bg-rose-50"
                            >
                                Remove All
                            </button>
                        )}
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
