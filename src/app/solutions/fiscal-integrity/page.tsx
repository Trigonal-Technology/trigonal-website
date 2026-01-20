'use client';
import React from 'react';
import Link from 'next/link';
import { 
  CreditCard, BarChart3, ShoppingCart, 
  ShieldCheck, ArrowRight, CheckCircle2, 
  Building2, Utensils
} from 'lucide-react';

export default function FiscalIntegrityPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO: THE FINANCIAL OS */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="font-mono text-xs text-orange-400 font-bold tracking-widest uppercase">
              OFFICIAL ODOO LEARNING PARTNER
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Zero Revenue <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Leakage.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            We engineer financial integrity. From <strong>IRD-Compliant Hospital Billing</strong> to 
            high-frequency <strong>Retail POS</strong>, our systems ensure every transaction hits the ledger.
          </p>

          <div className="flex justify-center">
            <Link href="/consult?source=fiscal_core">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-600/25 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Initialize Revenue Cycle
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE ENGINE: ODOO 19 */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-orange-600 font-bold uppercase tracking-widest">
              The Kernel
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">Powered by Odoo 19</h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
              We don't build billing systems from scratch. We deploy the world's most powerful open-source ERP, 
              customized for local tax laws and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* CARD 1: BILLING */}
             <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-500 transition-all group">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Billing</h3>
                <p className="text-sm text-slate-600 mb-4">
                   Consolidate Pharmacy, Lab, and Bed charges into a single invoice. IRD-compliant real-time syncing.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-mono">
                   <li>+ Automatic Tax Calculation</li>
                   <li>+ Insurance Adjudication</li>
                </ul>
             </div>

             {/* CARD 2: INVENTORY */}
             <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-500 transition-all group">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <ShoppingCart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Inventory</h3>
                <p className="text-sm text-slate-600 mb-4">
                   FIFO/FEFO tracking for pharmaceuticals. Auto-reordering based on consumption velocity.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-mono">
                   <li>+ Expiry Alerts</li>
                   <li>+ Multi-Warehouse Sync</li>
                </ul>
             </div>

             {/* CARD 3: CRM */}
             <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-orange-500 transition-all group">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">360° CRM</h3>
                <p className="text-sm text-slate-600 mb-4">
                   Track patient/customer lifetime value. Targeted campaigns and follow-up automation.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 font-mono">
                   <li>+ Patient Outreach</li>
                   <li>+ Customer Loyalty</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CROSS-INDUSTRY PROOF (THE FLEX) */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-6">
                     <ShieldCheck className="w-4 h-4" /> BATTLE-TESTED ARCHITECTURE
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6">
                     Engineered for Hospitals.<br/>
                     Stress-tested in Hospitality.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                     Our financial architectures aren't just for healthcare. We engineer the same high-frequency billing engines for 
                     <strong> Hospitality Chains</strong> and <strong>Retail Networks</strong>.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                     Whether it's a 500-bed hospital or a 5-star hotel, the requirement is the same: 
                     <strong> Real-time inventory and audit-ready ledgers.</strong>
                  </p>
                  
                  <div className="flex gap-4">
                     <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-3">
                        <Utensils className="w-5 h-5 text-slate-400" />
                        <div>
                           <div className="font-bold text-slate-900 text-sm">Restaurants</div>
                           <div className="text-[10px] text-slate-500 uppercase">POS Speed</div>
                        </div>
                     </div>
                     <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-slate-400" />
                        <div>
                           <div className="font-bold text-slate-900 text-sm">Hotels</div>
                           <div className="text-[10px] text-slate-500 uppercase">Booking Logic</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="md:w-1/2">
                  <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-2xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                     <div className="relative z-10">
                        <div className="font-mono text-xs text-orange-400 mb-4">LIVE_TRANSACTION_LOG</div>
                        <div className="space-y-3 font-mono text-xs">
                           <div className="flex justify-between border-b border-slate-800 pb-2">
                              <span>[10:42:01] OPD_BILLING</span>
                              <span className="text-emerald-400">SYNCED (IRD_API)</span>
                           </div>
                           <div className="flex justify-between border-b border-slate-800 pb-2">
                              <span>[10:42:05] RESTAURANT_POS</span>
                              <span className="text-emerald-400">SYNCED (INVENTORY)</span>
                           </div>
                           <div className="flex justify-between border-b border-slate-800 pb-2">
                              <span>[10:42:12] INSURANCE_CLAIM</span>
                              <span className="text-blue-400">PENDING (OPENIMIS)</span>
                           </div>
                           <div className="flex justify-between">
                              <span>[10:42:15] PHARMACY_DISPENSE</span>
                              <span className="text-emerald-400">DEDUCTED (BATCH_A1)</span>
                           </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-slate-400 text-sm">
                           <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                           <span>Unified Ledger Architecture</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. CUSTOM FOOTER (REPLACES GLOBAL BAND) */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
               <span className="font-mono text-xs text-orange-500 font-bold uppercase tracking-widest">
                  Ready to Audit?
               </span>
               <h2 className="text-3xl font-black text-white mt-2">
                  Stop leaking revenue. <br/>
                  <span className="text-slate-400">Start architecting integrity.</span>
               </h2>
            </div>
            
            <Link href="/consult?source=fiscal_core">
               <button className="px-8 py-5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-all flex items-center gap-4 shadow-xl">
                  <span className="font-mono uppercase tracking-wider">Configure Financial Stack</span>
                  <ArrowRight className="w-5 h-5 text-orange-600" />
               </button>
            </Link>
         </div>
      </section>

    </main>
  );
}
