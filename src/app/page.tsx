import { CTA } from '@/components/CTA';
import { WAITLIST_URL, TOKEN_UPDATES_URL } from '@/lib/links';

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
        Krako 2.0 — AI that runs where it’s cheapest and fastest
      </h1>
      <p className="mt-4 text-slate-300 max-w-2xl">
        We split AI jobs into micro-tasks and run small models on devices (PC/Mobile/MEC),
        using the cloud only when needed.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <CTA href={WAITLIST_URL}>Join the PoC waitlist</CTA>
        <a
          href={TOKEN_UPDATES_URL}
          target="_blank" rel="noreferrer"
          className="inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-900"
        >
          Get token updates
        </a>
      </div>

      <ul className="mt-10 grid gap-3 text-sm text-slate-300">
        <li>• <b>SLM-first at the edge</b> → <b>10× cheaper</b> inference</li>
        <li>• <b>Graph-powered context</b> → fewer hallucinations, explainable paths</li>
        <li>• <b>Hybrid edge–cloud</b> → performance without trade-offs</li>
      </ul>
    </section>
  );
}
