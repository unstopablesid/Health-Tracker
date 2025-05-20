'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HealthReport } from '@/types/health';

// Mock data for demonstration
const mockReports: HealthReport[] = [
 
];

export default function Dashboard() {
  const [reports] = useState<HealthReport[]>(mockReports);
  const [selectedReport, setSelectedReport] = useState<HealthReport | null>(null);

  const getRiskColor = (riskLevel: number) => {
    if (riskLevel >= 70) return 'text-[#F44336]';
    if (riskLevel >= 50) return 'text-[#03A9F4]';
    return 'text-[#4CAF50]';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Image
          src="/medical-shield.svg"
          alt="Health Tracker Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reports List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#212121] mb-6">Your Reports</h2>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedReport(report)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedReport?.timestamp === report.timestamp
                      ? 'bg-[#4CAF50] text-white'
                      : 'bg-[#F5F5F5] hover:bg-[#4CAF50] hover:bg-opacity-10'
                  }`}
                >
                  <div className="font-medium">
                    Report {reports.length - index}
                  </div>
                  <div className="text-sm opacity-75">
                    {new Date(report.timestamp).toLocaleDateString()}
                  </div>
                  <div className="mt-2 text-sm">
                    {report.risks.length} risks identified
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Report Details */}
        <div className="lg:col-span-2">
          {selectedReport ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#212121]">Health Report</h2>
                <span className="text-[#757575]">
                  {new Date(selectedReport.timestamp).toLocaleString()}
                </span>
              </div>

              {/* Risks Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#212121] mb-4">Health Risks</h3>
                <div className="space-y-4">
                  {selectedReport.risks.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg">
                      <span className="font-medium text-[#212121]">{risk.disease}</span>
                      <span className={`font-bold ${getRiskColor(risk.riskLevel)}`}>
                        {risk.riskLevel}% Risk
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#212121] mb-4">Recommendations</h3>
                <ul className="space-y-3">
                  {selectedReport.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#4CAF50] mr-2">•</span>
                      <span className="text-[#757575]">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 bg-[#03A9F4] text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Share Report
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-medium text-[#757575] mb-2">No Report Selected</h3>
                <p className="text-[#757575]">Select a report from the list to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 