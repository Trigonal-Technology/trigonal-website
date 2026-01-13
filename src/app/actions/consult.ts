'use server'

import { z } from 'zod'

// Validation schema
const consultFormSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    organization: z.string().min(2, 'Organization name is required'),
    email: z.string().email('Valid email is required'),
    projectLocation: z.enum(['Nepal', 'India', 'Middle East', 'Africa', 'Other']),
    primaryInterest: z.enum([
        'Interoperability Architecture',
        'Enterprise EMR Deployment',
        'AI & Diagnostic Intelligence',
    ]),
    existingSystems: z.array(z.string()).optional(),
    nepalDirective2081: z.boolean().optional(),
    hl7Fhir: z.boolean().optional(),
    technicalBrief: z.string().max(1000, 'Technical brief must be 1000 characters or less').optional(),
})

export type ConsultFormData = z.infer<typeof consultFormSchema>

export type ConsultFormState = {
    success: boolean
    message: string
    errors?: {
        [K in keyof ConsultFormData]?: string[]
    }
}

export async function submitConsultForm(
    prevState: ConsultFormState,
    formData: FormData
): Promise<ConsultFormState> {
    // Parse form data
    const rawData = {
        fullName: formData.get('fullName') as string,
        organization: formData.get('organization') as string,
        email: formData.get('email') as string,
        projectLocation: formData.get('projectLocation') as string,
        primaryInterest: formData.get('primaryInterest') as string,
        existingSystems: formData.getAll('existingSystems') as string[],
        nepalDirective2081: formData.get('nepalDirective2081') === 'on',
        hl7Fhir: formData.get('hl7Fhir') === 'on',
        technicalBrief: formData.get('technicalBrief') as string,
    }

    // Validate
    const validationResult = consultFormSchema.safeParse(rawData)

    if (!validationResult.success) {
        const errors: ConsultFormState['errors'] = {}
        validationResult.error.issues.forEach((issue) => {
            const path = issue.path[0] as keyof ConsultFormData
            if (!errors[path]) {
                errors[path] = []
            }
            errors[path]!.push(issue.message)
        })

        return {
            success: false,
            message: 'Please fix the errors below.',
            errors,
        }
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log the data (placeholder for email service integration)
    console.log('=== CONSULT FORM SUBMISSION ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Data:', JSON.stringify(validationResult.data, null, 2))
    console.log('================================')

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //     from: 'consult@trigonal.tech',
    //     to: 'architects@trigonal.tech',
    //     subject: `New Consultation Request: ${validationResult.data.organization}`,
    //     html: generateEmailTemplate(validationResult.data),
    // })

    return {
        success: true,
        message: 'An architect will review your technical brief within 24 hours.',
    }
}
