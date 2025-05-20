'use client';

import { useState } from 'react';
import { HealthFormData, HealthReport } from '@/types/health';
import HealthReportComponent from './HealthReport';

export default function HealthForm() {
  const [formData, setFormData] = useState<HealthFormData>({
    sleepDuration: 0,
    exerciseFrequency: 0,
    dietQuality: 'average',
    waterIntake: 0,
    smokingStatus: 'none',
    alcoholUse: 'none',
    screenTime: 0,
    mentalHealthScore: 0,
  });

  const [report, setReport] = useState<HealthReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze health data');
      }
      
      const data = await response.json();
      setReport(data);
    } catch (error) {
      setError('Failed to analyze health data. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Habits Assessment</h2>
        
        {/* Sleep Duration */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Sleep Duration (hours per day)
          </label>
          <input
            type="number"
            min="0"
            max="24"
            step="0.5"
            value={formData.sleepDuration}
            onChange={(e) => setFormData({ ...formData, sleepDuration: parseFloat(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Exercise Frequency */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Exercise Frequency (times per week)
          </label>
          <input
            type="number"
            min="0"
            max="7"
            value={formData.exerciseFrequency}
            onChange={(e) => setFormData({ ...formData, exerciseFrequency: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Diet Quality */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Diet Quality
          </label>
          <select
            value={formData.dietQuality}
            onChange={(e) => setFormData({ ...formData, dietQuality: e.target.value as HealthFormData['dietQuality'] })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="poor">Poor</option>
            <option value="average">Average</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
          </select>
        </div>

        {/* Water Intake */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Water Intake (liters per day)
          </label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.5"
            value={formData.waterIntake}
            onChange={(e) => setFormData({ ...formData, waterIntake: parseFloat(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Smoking Status */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Smoking Status
          </label>
          <select
            value={formData.smokingStatus}
            onChange={(e) => setFormData({ ...formData, smokingStatus: e.target.value as HealthFormData['smokingStatus'] })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="none">None</option>
            <option value="occasional">Occasional</option>
            <option value="regular">Regular</option>
          </select>
        </div>

        {/* Alcohol Use */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Alcohol Use
          </label>
          <select
            value={formData.alcoholUse}
            onChange={(e) => setFormData({ ...formData, alcoholUse: e.target.value as HealthFormData['alcoholUse'] })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="none">None</option>
            <option value="occasional">Occasional</option>
            <option value="regular">Regular</option>
          </select>
        </div>

        {/* Screen Time */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Screen Time (hours per day)
          </label>
          <input
            type="number"
            min="0"
            max="24"
            value={formData.screenTime}
            onChange={(e) => setFormData({ ...formData, screenTime: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mental Health Score */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Mental Health Score (1-10)
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={formData.mentalHealthScore}
            onChange={(e) => setFormData({ ...formData, mentalHealthScore: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
            isLoading 
              ? 'bg-[#4CAF50] bg-opacity-50 cursor-not-allowed' 
              : 'bg-[#4CAF50] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2'
          }`}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Health Data'}
        </button>

        {error && (
          <div className="text-[#F44336] text-center mt-4">
            {error}
          </div>
        )}
      </form>

      {report && <HealthReportComponent report={report} />}
    </div>
  );
} 