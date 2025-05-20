export interface HealthFormData {
  sleepDuration: number;      // in hours
  exerciseFrequency: number;  // times per week
  dietQuality: 'poor' | 'average' | 'good' | 'excellent';
  waterIntake: number;        // in liters
  smokingStatus: 'none' | 'occasional' | 'regular';
  alcoholUse: 'none' | 'occasional' | 'regular';
  screenTime: number;         // in hours per day
  mentalHealthScore: number;  // 1-10
}

export interface HealthReport {
  risks: {
    disease: string;
    riskLevel: number;  // percentage
  }[];
  recommendations: string[];
  timestamp: string;
} 