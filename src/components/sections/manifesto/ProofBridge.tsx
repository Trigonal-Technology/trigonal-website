'use client';

import Link from 'next/link';

export const ProofBridge = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Principles are theory. <br/>
        <span className="text-blue-600">Production is truth.</span>
      </h2>
      <Link
        href="/solutions"
        className="inline-block px-8 py-4 bg-slate-900 text-white font-mono font-bold rounded hover:bg-blue-600 transition-colors"
      >
        [ EXAMINE_THE_PROOF: LAB_BRIDGE ]
      </Link>
    </section>
  );
};
