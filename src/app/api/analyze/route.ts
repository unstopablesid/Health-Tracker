import { NextResponse } from 'next/server';
import { HealthFormData, HealthReport } from '@/types/health';

// Dummy function to simulate AI analysis
function analyzeHealthData(data: HealthFormData): HealthReport {
  const risks = [];
  
  // Simple risk calculations based on input data
  if (data.sleepDuration < 6) {
    risks.push({ disease: 'Sleep Disorders', riskLevel: 70 });
  }
  
  if (data.exerciseFrequency < 2) {
    risks.push({ disease: 'Cardiovascular Disease', riskLevel: 60 });
  }
  
  if (data.dietQuality === 'poor') {
    risks.push({ disease: 'Type 2 Diabetes', riskLevel: 65 });
  }
  
  if (data.waterIntake < 1.5) {
    risks.push({ disease: 'Kidney Stones', riskLevel: 40 });
  }
  
  if (data.smokingStatus === 'regular') {
    risks.push({ disease: 'Lung Cancer', riskLevel: 80 });
  }
  
  if (data.alcoholUse === 'regular') {
    risks.push({ disease: 'Liver Disease', riskLevel: 75 });
  }
  
  if (data.screenTime > 8) {
    risks.push({ disease: 'Eye Strain', riskLevel: 50 });
  }
  
  if (data.mentalHealthScore < 5) {
    risks.push({ disease: 'Depression', riskLevel: 45 });
  }

  const recommendations = [
    'Maintain a consistent sleep schedule',
    'Exercise regularly for at least 30 minutes',
    'Stay hydrated throughout the day',
    'Take regular breaks from screen time',
    'Practice stress management techniques'
  ];

  return {
    risks,
    recommendations,
    timestamp: new Date().toISOString()
  };
}

export async function POST(request: Request) {
  try {
    const data: HealthFormData = await request.json();
    const report = analyzeHealthData(data);
    
    return NextResponse.json(report);
  } catch (err) {
    console.error('Error analyzing health data:', err);
    return NextResponse.json(
      { error: 'Failed to analyze health data' },
      { status: 500 }
    );
  }
} 