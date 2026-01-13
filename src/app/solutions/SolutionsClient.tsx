'use client';

import { useState } from 'react';
import { VerticalNervousSystem } from '@/components/sections/solutions/VerticalNervousSystem';
import { ArchitectConsultation } from '@/components/sections/solutions/ArchitectConsultation';

export function SolutionsClient() {
    const [isConsultOpen, setIsConsultOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <VerticalNervousSystem onOpenConsult={() => setIsConsultOpen(true)} />
            <ArchitectConsultation isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)} />
        </main>
    );
}
