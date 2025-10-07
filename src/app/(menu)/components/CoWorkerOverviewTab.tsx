"use client";
import { CoWorker } from "@/app/types/profile";
import { getStatusColor } from "@/app/_lib/co-worker.utils";

interface CoWorkerOverviewTabProps {
    coWorker: CoWorker;
}

export default function CoWorkerOverviewTab({ coWorker }: CoWorkerOverviewTabProps) {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Department</label>
                    <p className="mt-1 text-sm text-gray-900">{coWorker.department || 'Not specified'}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="mt-1 text-sm text-gray-900">{coWorker.phone || 'Not provided'}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Join Date</label>
                    <p className="mt-1 text-sm text-gray-900">{coWorker.joinDate || 'Unknown'}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <div className="mt-1 flex items-center">
                        <div className={`w-2 h-2 ${getStatusColor(coWorker.status)} rounded-full mr-2`}></div>
                        <span className="text-sm text-gray-900 capitalize">{coWorker.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
