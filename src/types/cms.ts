/**
 * CMS Type Definitions
 * Structured to match WPGraphQL response format for easy migration
 */

export interface ImpactMetrics {
    patientsServed?: string
    facilitiesConnected?: string
    testsProcessedDaily?: string
    timeToDeployment?: string
    uptimePercentage?: string
    reportingAccuracy?: string
    dataPointsDaily?: string
    monthlyReports?: string
    resultTurnaround?: string
    errorReduction?: string
    integrationPoints?: string
}

export interface CaseStudy {
    id: string
    title: string
    slug: string
    excerpt: string
    impactMetrics: ImpactMetrics
    techStack: string[]
    compliance: string[]
    featuredImage: string | null
    date: string
}

export interface CaseStudiesResponse {
    data: {
        caseStudies: {
            nodes: CaseStudy[]
        }
    }
}

// Navigation types
export interface NavLink {
    href: string
    label: string
}

// Architecture types
export interface StackLayer {
    id: string
    name: string
    system: string
    tooltip: string
    color: string
}

// FIRE Protocol types
export interface FireValue {
    letter: string
    title: string
    description: string
}
