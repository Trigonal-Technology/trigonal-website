import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://trigonal.technology'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: `${baseUrl}/architecture`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9
        },
        {
            url: `${baseUrl}/solutions/nidanehr`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/compliance`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: `${baseUrl}/company`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6
        },
    ]
}
