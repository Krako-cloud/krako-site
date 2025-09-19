import { CTA } from '@/components/CTA';
import { WAITLIST_URL } from '@/lib/links';

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <header>
        <h2 className="text-2xl font-semibold">Developers — Quickstart</h2>
        <p className="mt-2 text-slate-300 max-w-3xl">
          OpenAI-compatible endpoints. Drop-in SDKs. Time-to-first-job &lt; 10 minutes.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Node.js</h3>
          <pre className="bg-slate-900 p-4 rounded-md text-xs overflow-auto">{`npm i axios
# .env: KRAKO_API_KEY=...
import axios from 'axios';

const res = await axios.post(
  'https://api.krako.example/v1/chat/completions', /* OpenAI-compatible */
  { model: 'slm-7b', messages: [{ role: 'user', content: 'Hello Krako' }] },
  { headers: { Authorization: \`Bearer \${process.env.KRAKO_API_KEY}\` } }
);
console.log(res.data.choices[0].message.content);`}</pre>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Python</h3>
          <pre className="bg-slate-900 p-4 rounded-md text-xs overflow-auto">{`pip install requests
# export KRAKO_API_KEY=...
import os, requests
url = "https://api.krako.example/v1/chat/completions"
payload = {"model":"slm-7b","messages":[{"role":"user","content":"Hello Krako"}]}
headers = {"Authorization": f"Bearer {os.environ['KRAKO_API_KEY']}"}
r = requests.post(url, json=payload, headers=headers)
print(r.json()["choices"][0]["message"]["content"])`}</pre>
        </div>
      </section>

      <p className="text-sm text-slate-400">
        *Endpoints are OpenAI-compatible; swap the base URL and key.
      </p>

      <div className="mt-6">
        <CTA href={WAITLIST_URL}>Request pilot access</CTA>
      </div>
    </div>
  );
}
