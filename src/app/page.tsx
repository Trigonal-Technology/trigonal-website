import { Hero } from '@/components/sections/Hero'
import { TechMarquee } from '@/components/sections/TechMarquee'
import { FirePinnedScroll } from '@/components/sections/FirePinnedScroll'
import { EngineeringProof } from '@/components/sections/EngineeringProof'
import { ProjectLaunchBand } from '@/components/sections/ProjectLaunchBand'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechMarquee />
      <FirePinnedScroll />
      <EngineeringProof />
      <ProjectLaunchBand />
    </main>
  )
}
