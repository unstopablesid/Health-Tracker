'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/medical-shield.svg"
            alt="Health Tracker Logo"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#212121] mb-6 text-center">About Health Tracker</h1>
        
        {/* Mission Statement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#4CAF50] mb-4">Our Mission</h2>
          <p className="text-[#757575] leading-relaxed">
            Health Tracker is dedicated to empowering individuals to take control of their health through 
            data-driven insights and personalized recommendations. We believe that prevention is better 
            than cure, and our AI-powered analysis helps identify potential health risks before they 
            become serious concerns.
          </p>
        </section>

        {/* Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#4CAF50] mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-[#212121] mb-3">AI-Powered Analysis</h3>
              <p className="text-[#757575]">
                Our advanced AI model analyzes your health habits and provides personalized insights 
                about potential health risks.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-[#212121] mb-3">Comprehensive Tracking</h3>
              <p className="text-[#757575]">
                Track various health metrics including sleep, exercise, diet, water intake, and more 
                to get a complete picture of your health.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-[#212121] mb-3">Personalized Recommendations</h3>
              <p className="text-[#757575]">
                Receive tailored recommendations based on your health data to improve your overall 
                well-being.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <h3 className="text-xl font-medium text-[#212121] mb-3">Easy to Use</h3>
              <p className="text-[#757575]">
                Simple and intuitive interface makes it easy to input your health data and understand 
                the results.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#4CAF50] mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4CAF50] text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#212121] mb-2">Input Your Health Data</h3>
                <p className="text-[#757575]">
                  Fill out our comprehensive health assessment form with your daily habits and routines.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4CAF50] text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#212121] mb-2">AI Analysis</h3>
                <p className="text-[#757575]">
                  Our AI model processes your data to identify potential health risks and patterns.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-[#4CAF50] text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#212121] mb-2">Get Your Report</h3>
                <p className="text-[#757575]">
                  Receive a detailed health report with risk assessments and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#4CAF50] mb-4">Privacy & Security</h2>
          <p className="text-[#757575] leading-relaxed">
            Your health data is important and private. We take data security seriously and ensure that 
            all your information is encrypted and stored securely. We never share your personal health 
            data with third parties without your explicit consent.
          </p>
        </section>
      </div>
    </div>
  );
}
