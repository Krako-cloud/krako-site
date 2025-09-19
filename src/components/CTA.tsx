import { ReactNode } from 'react';

export function CTA({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded-md bg-teal-500 px-4 py-2 text-sm font-medium
                 text-slate-900 hover:bg-teal-400 transition"
    >
      {children}
    </a>
  );
}
