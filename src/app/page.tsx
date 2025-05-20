import HealthForm from '@/components/HealthForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Health Tracker
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Track your health habits and get AI-powered insights about potential health risks.
          Fill out the form below to get started.
        </p>
        <HealthForm />
      </div>
    </main>
  );
}
