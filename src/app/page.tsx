import { Hero } from '@/components/sections/Hero'
import { TechMarquee } from '@/components/sections/TechMarquee'
import { SovereignTechStack } from '@/components/sections/SovereignTechStack'
import { NidanEHRSection } from '@/components/sections/NidanEHRSection'
import { ArchitectVision } from '@/components/sections/ArchitectVision'
import { FirePinnedScroll } from '@/components/sections/FirePinnedScroll'
import { ConsultCTA } from '@/components/sections/ConsultCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <SovereignTechStack />
      <NidanEHRSection />
      <ArchitectVision />
      <FirePinnedScroll />
      <ConsultCTA />
    </>
  )
}
