'use client';
import { useState } from 'react';
import { X, Send, Terminal, Loader2, Github } from 'lucide-react';

export function CareerApplicationForm({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<'FORM' | 'SUCCESS'>('FORM');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request (In real app, call a Server Action)
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep('SUCCESS');
  }

  if (step === 'SUCCESS') {
    return (
      <div className="p-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Terminal className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Transmission Complete.</h3>
        <p className="text-slate-500 mt-2 mb-6 max-w-xs mx-auto">
          Our unit commanders will review your dossier. If your code matches our frequency, we will signal you.
        </p>
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
        >
          Return to Base
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-600" /> Join the Unit
          </h3>
          <p className="text-xs text-slate-500 font-mono mt-1">ENLISTMENT_PROTOCOL_V2</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
          <X className="w-5 h-5 text-slate-400" />
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Codename</label>
            <input required type="text" placeholder="e.g. Alex Dev" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Frequency (Email)</label>
            <input required type="email" placeholder="alex@dev.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm" />
          </div>
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Target Role</label>
            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm">
                <option>Frontend Architect (React/Next.js)</option>
                <option>Backend Engineer (Python/Java)</option>
                <option>Systems Engineer (DevOps/Infrastructure)</option>
                <option>Odoo Specialist</option>
                <option>Clinical Analyst</option>
            </select>
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
               Dossier Link <span className="text-slate-400 font-normal normal-case">(GitHub / Portfolio)</span>
            </label>
            <div className="relative">
                <input required type="url" placeholder="https://" className="w-full p-3 pl-10 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm" />
                <div className="absolute left-3 top-3 text-slate-400">
                    <Github className="w-4 h-4" />
                </div>
            </div>
        </div>

        <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Why Trigonal?</label>
            <textarea required rows={3} placeholder="Tell us why you want to build sovereign infrastructure..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm resize-none"></textarea>
        </div>

        <div className="pt-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> Transmit Application</>}
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-3 font-mono">
               SECURE_UPLINK_ESTABLISHED
            </p>
        </div>

      </form>
    </div>
  );
}
