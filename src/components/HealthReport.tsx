'use client';

import { HealthReport as HealthReportType } from '@/types/health';

interface HealthReportProps {
  report: HealthReportType;
}

export default function HealthReport({ report }: HealthReportProps) {
  const getRiskColor = (riskLevel: number) => {
    if (riskLevel >= 70) return 'text-[#F44336]';
    if (riskLevel >= 50) return 'text-[#03A9F4]';
    return 'text-[#4CAF50]';
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#212121] mb-6">Health Analysis Report</h2>
      
      {/* Risks Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#212121] mb-4">Potential Health Risks</h3>
        {report.risks.length > 0 ? (
          <div className="space-y-4">
            {report.risks.map((risk, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#F5F5F5] rounded-lg">
                <span className="font-medium text-[#212121]">{risk.disease}</span>
                <span className={`font-bold ${getRiskColor(risk.riskLevel)}`}>
                  {risk.riskLevel}% Risk
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#009688] font-medium">No significant health risks detected!</p>
        )}
      </div>

      {/* Recommendations Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#212121] mb-4">Recommendations</h3>
        <ul className="space-y-3">
          {report.recommendations.map((recommendation, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#4CAF50] mr-2">•</span>
              <span className="text-[#757575]">{recommendation}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Timestamp */}
      <div className="text-sm text-[#757575]">
        Report generated on: {new Date(report.timestamp).toLocaleString()}
      </div>
    </div>
  );
} 