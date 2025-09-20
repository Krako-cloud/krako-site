export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">How Krako 2.0 works</h2>
      <p className="mt-3 text-slate-300 max-w-3xl">
        CHUNKs + small-model-first at the edge + graph context + selective LLM fallback.
      </p>

      <div className="mt-8 space-y-10">
        <figure>
          <img src="/krako2_architecture.svg" alt="Krako 2.0 architecture" width={1200} height={700} />
          <figcaption className="mt-2 text-xs text-slate-400">
            Architecture — hybrid edge–cloud with validation & synthesis.
          </figcaption>
        </figure>

        <figure>
          <img src="/krako2_cost_chart.svg" alt="Cost chart: AWS $30 vs Krako $3 per 1K inferences" width={1200} height={700} />
          <figcaption className="mt-2 text-xs text-slate-400">
            Cost — SLM-first routing keeps light work on devices → ~10× cheaper.
          </figcaption>
        </figure>

        <figure>
          <img src="/krako2_table.svg" alt="Krako 1.0 vs 2.0 comparison" width={1200} height={700} />
          <figcaption className="mt-2 text-xs text-slate-400">
            Evolution — 1.0 to 2.0 in one glance.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
