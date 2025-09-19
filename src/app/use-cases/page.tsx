import { CTA } from '@/components/CTA';
import { WAITLIST_URL } from '@/lib/links';

const Card = ({ title, children }:{title:string; children:React.ReactNode}) => (
  <div className="rounded-lg border border-slate-800 p-5">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-slate-300 text-sm">{children}</p>
  </div>
);

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <h2 className="text-2xl font-semibold">Use Cases</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Tutor (Education)">
          Real-time practice with small models; LLM for role-play scenarios.
        </Card>
        <Card title="Enterprise Search">
          Graph-anchored Q&A with source paths; fewer hallucinations.
        </Card>
        <Card title="Mission-critical (Offline NPU)">
          Verifiable offline reasoning on NPUs (no Internet/GPS); cloud optional.
        </Card>
      </div>
      <CTA href={WAITLIST_URL}>Start a PoC</CTA>
    </div>
  );
}
