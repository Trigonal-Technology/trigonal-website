'use client'

import {
    LayoutDashboard,
    Users,
    Calendar,
    FileText,
    Settings,
    BarChart3,
    Activity,
    Search,
    Bell,
    ChevronRight,
    LucideIcon
} from 'lucide-react'

/**
 * Code-based NidanEHR Dashboard Mockup
 * Renders a high-fidelity dashboard visualization using Tailwind and Lucide icons
 * No static images - fully responsive and lightweight
 */
export function NidanDashboardMockup() {
    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-blueprint-line overflow-hidden">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-precision-blue text-white text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono opacity-80">nidanehr.local</span>
                    <div className="w-12" />
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-14 bg-slate-800 py-4 flex flex-col items-center gap-4">
                        <div className="w-8 h-8 relative p-1">
                            <img
                                src="/logos/trigonal.webp"
                                alt="Trigonal"
                                className="w-full h-full object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-2">
                            <SidebarIcon icon={LayoutDashboard} active />
                            <SidebarIcon icon={Users} />
                            <SidebarIcon icon={Calendar} />
                            <SidebarIcon icon={FileText} />
                            <SidebarIcon icon={BarChart3} />
                            <SidebarIcon icon={Settings} />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 bg-slate-50">
                        {/* Search Bar */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white rounded-md border border-slate-200 text-xs text-slate-400">
                                <Search className="w-3 h-3" />
                                <span>Search patients...</span>
                            </div>
                            <div className="w-6 h-6 bg-white rounded-md border border-slate-200 flex items-center justify-center">
                                <Bell className="w-3 h-3 text-slate-400" />
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            <StatCard value="1,247" label="Active Patients" color="blue" />
                            <StatCard value="89" label="Today's Visits" color="green" />
                            <StatCard value="12" label="Pending Labs" color="orange" />
                        </div>

                        {/* Mini Chart */}
                        <div className="bg-white rounded-lg p-3 border border-slate-200 mb-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-slate-700">Weekly Encounters</span>
                                <span className="text-xs text-slate-400">Last 7 days</span>
                            </div>
                            <div className="flex items-end gap-1 h-12">
                                <Bar height={40} />
                                <Bar height={60} />
                                <Bar height={45} />
                                <Bar height={80} />
                                <Bar height={65} />
                                <Bar height={90} />
                                <Bar height={70} active />
                            </div>
                        </div>

                        {/* Recent Patients */}
                        <div className="bg-white rounded-lg p-3 border border-slate-200">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-slate-700">Recent Patients</span>
                                <ChevronRight className="w-3 h-3 text-slate-400" />
                            </div>
                            <div className="space-y-2">
                                <PatientRow name="R. Sharma" id="PT-2081" status="In Queue" />
                                <PatientRow name="S. Thapa" id="PT-2082" status="Lab Pending" />
                                <PatientRow name="K. Basnet" id="PT-2083" status="Completed" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FHIR Badge */}
            <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-precision-blue/10 text-precision-blue text-xs font-mono rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    HL7 FHIR R4 Compliant
                </span>
            </div>
        </div>
    )
}

function SidebarIcon({ icon: Icon, active = false }: { icon: LucideIcon; active?: boolean }) {
    return (
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${active ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'
            }`}>
            <Icon className="w-4 h-4" />
        </div>
    )
}

function StatCard({ value, label, color }: { value: string; label: string; color: 'blue' | 'green' | 'orange' }) {
    const colors = {
        blue: 'text-precision-blue',
        green: 'text-green-600',
        orange: 'text-execution-orange',
    }
    return (
        <div className="bg-white rounded-lg p-2 border border-slate-200">
            <div className={`text-lg font-bold ${colors[color]}`}>{value}</div>
            <div className="text-xs text-slate-500">{label}</div>
        </div>
    )
}

function Bar({ height, active = false }: { height: number; active?: boolean }) {
    return (
        <div
            className={`flex-1 rounded-t transition-colors ${active ? 'bg-execution-orange' : 'bg-precision-blue/60'}`}
            style={{ height: `${height}%` }}
        />
    )
}

function PatientRow({ name, id, status }: { name: string; id: string; status: string }) {
    const statusColors: Record<string, string> = {
        'In Queue': 'bg-yellow-100 text-yellow-700',
        'Lab Pending': 'bg-blue-100 text-blue-700',
        'Completed': 'bg-green-100 text-green-700',
    }
    return (
        <div className="flex items-center justify-between text-xs">
            <div>
                <span className="font-medium text-slate-700">{name}</span>
                <span className="text-slate-400 ml-1">{id}</span>
            </div>
            <span className={`px-1.5 py-0.5 rounded text-xs ${statusColors[status]}`}>
                {status}
            </span>
        </div>
    )
}
