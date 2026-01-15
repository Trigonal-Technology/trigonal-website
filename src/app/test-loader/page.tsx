'use client';

import { TrigonalLoader } from '@/components/layout/TrigonalLoader';

export default function TestLoaderPage() {
    return (
        <div className="min-h-screen bg-white">
            <TrigonalLoader />
            
            {/* Simple content behind the loader */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Loader Test Page
                    </h1>
                    <p className="text-slate-600 mb-8">
                        The loader should appear for 4 seconds, then fade out.
                    </p>
                    <div className="space-y-2 text-sm text-slate-500">
                        <p>• Phase 1 (0-1s): Nodes fade in</p>
                        <p>• Phase 2 (1-2s): Lines connect</p>
                        <p>• Phase 3 (2-3s): 360° rotation</p>
                        <p>• Phase 4 (3-4s): Speed up + zoom</p>
                    </div>
                    <button
                        onClick={() => {
                            sessionStorage.removeItem('trigonal_loader_seen');
                            window.location.reload();
                        }}
                        className="mt-8 px-6 py-3 bg-precision-blue text-white rounded-lg font-mono text-sm hover:bg-blue-700 transition-colors"
                    >
                        Replay Loader
                    </button>
                </div>
            </div>
        </div>
    );
}
