'use server'

import { z } from 'zod'
import { headers } from 'next/headers'

// 1. ADD HONEYPOT & SECURITY FIELDS TO SCHEMA
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
    technicalBrief: z.string().max(1000).optional(),
    
    // SECURITY: This field must be empty. If a bot fills it, we reject.
    website: z.string().max(0).optional(), 
})

export type ConsultFormData = z.infer<typeof consultFormSchema>

export type ConsultFormState = {
    success: boolean
    message: string
    errors?: {
        [K in keyof ConsultFormData]?: string[]
    }
}

// SIMPLE IN-MEMORY RATE LIMIT (Resets on server restart, but good enough for now)
const rateLimitMap = new Map<string, { count: number, lastReset: number }>();

function checkRateLimit(ip: string) {
    const now = Date.now();
    const window = 60 * 1000; // 1 minute
    const limit = 5; // Max 5 requests per minute

    const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - record.lastReset > window) {
        record.count = 0;
        record.lastReset = now;
    }

    if (record.count >= limit) return false;

    record.count++;
    rateLimitMap.set(ip, record);
    return true;
}

export async function submitConsultForm(
    prevState: ConsultFormState,
    formData: FormData
): Promise<ConsultFormState> {
    
    // 1. SECURITY: RATE LIMIT
    const ip = (await headers()).get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
        return { success: false, message: 'Too many requests. Please try again later.' };
    }

    // 2. PARSE DATA
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
        website: formData.get('website') as string, // Honeypot field
    }

    // 3. SECURITY: HONEYPOT CHECK
    // If 'website' has a value, it's a bot. We fail silently or return success to trick them.
    if (rawData.website && rawData.website.length > 0) {
        // Return fake success so the bot thinks it worked and leaves
        return { success: true, message: 'Request received.' };
    }

    // 4. VALIDATE
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

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log(`[${ip}] Valid Submission from ${validationResult.data.email}`);

    return {
        success: true,
        message: 'An architect will review your technical brief within 24 hours.',
    }
}
