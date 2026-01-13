import { Hero } from '@/components/sections/Hero'
import { StandardsBar } from '@/components/sections/StandardsBar'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { NidanEHRSection } from '@/components/sections/NidanEHRSection'
import { TheNidanStack } from '@/components/sections/TheNidanStack'
import { EngineeringProof } from '@/components/sections/EngineeringProof'
import { ArchitectVision } from '@/components/sections/ArchitectVision'
import { FireProtocol } from '@/components/sections/FireProtocol'
import { ArchitectSection } from '@/components/sections/ArchitectSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StandardsBar />
      <ExpertiseSection />
      <NidanEHRSection />
      <TheNidanStack />
      <EngineeringProof />
      <ArchitectVision />
      <FireProtocol />
      <ArchitectSection />
    </>
  )
}
