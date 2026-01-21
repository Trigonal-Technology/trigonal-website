'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Terminal, Shield, Users, Globe, 
  ArrowRight, HeartPulse, CheckCircle2 
} from 'lucide-react';
import { Hero, Section } from '@/components/ui/trigonal';
import { teamMembers } from '@/config/team';

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`group bg-white border ${member.highlight ? 'border-orange-200 ring-2 ring-orange-50' : 'border-slate-200'} rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col`}>
      
      {/* Photo Area */}
      <div className="h-72 w-full bg-slate-100 relative grayscale group-hover:grayscale-0 transition-all duration-500">
         {/* Fallback Initials (shown behind image, only visible if image fails) */}
         {imageError || !member.photo ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center text-slate-300 font-black text-6xl opacity-20 z-0">
               {member.initials}
            </div>
         ) : null}
         
         {/* Image (shown if photo exists and no error) */}
         {member.photo && !imageError ? (
            <Image 
               src={member.photo} 
               alt={member.name}
               fill
               className={`object-cover object-top transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
               onError={() => setImageError(true)}
               onLoad={() => setImageLoaded(true)}
               unoptimized
               priority={member.highlight}
            />
         ) : null}
         
         {/* Floating Role Badge */}
         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 pt-12">
            <div className="text-white font-bold text-lg">{member.name}</div>
            <div className="text-orange-400 text-xs font-mono font-bold uppercase tracking-wide">
               {member.role}
            </div>
         </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
         
         {/* Expertise & Experience */}
         <div className="mb-6">
            <p className="text-sm text-slate-600 font-medium mb-3 min-h-[40px]">
               {member.expertise}
            </p>
            <div className="flex flex-wrap gap-2">
               <span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded border border-blue-100">
                  {member.yearsExp}
               </span>
               <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded border border-emerald-100">
                  {member.healthExp}
               </span>
            </div>
         </div>

         {/* Mastery List */}
         <div className="mt-auto pt-6 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">
               Technical Mastery
            </span>
            <ul className="space-y-2">
               {member.mastery.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                     <CheckCircle2 className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                     {skill}
                  </li>
               ))}
            </ul>
            {/* Certifications (if exists) */}
            {member.certifications && (
               <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                     Certifications
                  </span>
                  <div className="flex flex-wrap gap-1">
                     {member.certifications.map((cert, i) => (
                        <span key={i} className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[9px] font-bold uppercase rounded border border-purple-100">
                           {cert}
                        </span>
                     ))}
                  </div>
               </div>
            )}
         </div>

      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. HERO */}
      <Hero
        badge="THE UNIT"
        badgeColor="orange"
        title="We are the Engineers behind Sovereign Health."
        subtitle="Trigonal Technology is not just a software vendor. We are a specialized infrastructure unit dedicated to digitizing national health systems."
      />

      {/* 2. THE SQUAD (Updated to support detailed Dossier cards) */}
      <Section variant="white">
         <div className="text-center mb-16">
            <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-widest">
               Command Structure
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">The Architects</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, idx) => (
               <TeamMemberCard key={idx} member={member} />
            ))}
         </div>
      </Section>

      {/* 3. PHILOSOPHY SECTION (Dark mode manifesto) */}
      <Section variant="dark" className="relative overflow-hidden">
         {/* Background accent */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
         
         <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
            <div className="md:w-1/2">
                <span className="text-orange-500 font-mono text-xs font-bold tracking-widest uppercase mb-4 block">
                   Our Code
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                   We Build With Fire.
                </h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                   <p>
                      Healthcare technology is usually cold, corporate, and disconnected. 
                      We believe in the opposite. We believe software should have a 
                      <strong className="text-white"> heartbeat</strong>.
                   </p>
                   <p>
                      "Building with Fire" means we bring intensity, passion, and engineering rigor 
                      to every line of code. We don't just ship tickets; we solve 
                      human problems in critical environments.
                   </p>
                </div>
            </div>
            
            {/* The "Values" Grid */}
            <div className="md:w-1/2 grid grid-cols-1 gap-4">
                <ValueCard 
                   icon={Shield} 
                   title="Sovereignty First" 
                   desc="We build systems that YOU own. No vendor lock-in. No hidden data mining. Open source at the core."
                />
                <ValueCard 
                   icon={Terminal} 
                   title="Engineering Rigor" 
                   desc="We test for the edge cases. Bad connectivity? Power cuts? High load? Our systems are designed to survive."
                />
                <ValueCard 
                   icon={HeartPulse} 
                   title="Clinical Empathy" 
                   desc="We sit with doctors. We watch nurses. We write code that respects the complexity of their work."
                />
            </div>
         </div>
      </Section>

      {/* 4. GLOBAL FOOTPRINT (Textual Map) */}
      <Section variant="slate" className="border-t border-slate-200">
         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
               <Globe className="w-12 h-12 text-blue-600 mb-6" />
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Deployed Globally.</h2>
               <p className="text-slate-600 mb-8">
                  While our HQ is in Nepal, our code runs in hospitals across continents. 
                  We are part of the global OpenMRS and Odoo communities.
               </p>
               <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">🇳🇵 Nepal (HQ)</span>
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">🇳🇬 Nigeria</span>
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">🇻🇪 Venezuela</span>
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">🇺🇬 Uganda</span>
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">🇮🇳 India</span>
                  <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">🇬🇹 Guatemala</span>
               </div>
            </div>
            
            {/* Visual Abstract Map */}
            <div className="md:w-1/2 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[200px] text-slate-50 opacity-20 font-black leading-none -mt-10 -mr-10 select-none">
                   NEPAL
                </div>
                <div className="relative z-10 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="font-mono text-sm">
                         <strong className="text-slate-900">SYSTEM STATUS:</strong> <span className="text-emerald-600">OPERATIONAL</span>
                      </div>
                   </div>
                   <div className="space-y-2 font-mono text-xs text-slate-500">
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                         <span>NODES ACTIVE</span>
                         <span className="text-slate-900 font-bold">12+</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                         <span>PATIENTS SERVED</span>
                         <span className="text-slate-900 font-bold">150,000+</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1">
                         <span>CODE COMMITS</span>
                         <span className="text-slate-900 font-bold">4,500+</span>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </Section>

      {/* 5. CTA */}
      <Section variant="dark" className="text-center">
         <h2 className="text-3xl font-bold mb-6">Join the Mission.</h2>
         <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether you are a hospital needing infrastructure or an engineer wanting to build with fire.
         </p>
         <div className="flex justify-center gap-4">
            <Link href="/consult">
               <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-500 transition-colors shadow-lg">
                  Partner with Us
               </button>
            </Link>
            <Link href="mailto:careers@trigonal.com">
               <button className="px-8 py-4 bg-transparent border border-slate-600 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                  Join the Team
               </button>
            </Link>
         </div>
      </Section>

    </main>
  );
}

// Sub-component for Values
function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
   return (
      <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors group">
         <div className="flex items-start gap-4">
            <div className="p-2 bg-slate-900 rounded-lg group-hover:text-orange-500 transition-colors">
               <Icon className="w-6 h-6 text-slate-400 group-hover:text-orange-500" />
            </div>
            <div>
               <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
               <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
         </div>
      </div>
   );
}
