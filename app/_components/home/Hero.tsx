"use client"

import { FC, useState } from 'react';
import { 
  HardDrive, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import Background3D from './Background';
import Features from './Features';

const Hero: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Background3D />
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 left-0 w-64 bg-gray-900/95 backdrop-blur-lg transform transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white">CloudStore</span>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="text-blue-200 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-6">
              <a href="#features" className="block text-blue-200 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="block text-blue-200 hover:text-white transition-colors">
                Pricing
              </a>
              <button className="w-full bg-blue-500/80 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <HardDrive className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">CloudNest</span>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-blue-200 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-blue-200 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-blue-200 hover:text-white transition-colors">Pricing</a>
            <button className="bg-blue-500/80 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-6 animate-fade-in">
              Store everything.
              <br />
              Access anywhere.
            </h1>
            <p className="text-xl text-blue-200 mb-8 animate-fade-in-delay max-w-2xl mx-auto">
              Secure cloud storage with seamless sharing and collaboration features.
              Start storing your files today.
            </p>
            <button className="bg-blue-500/80 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-all transform hover:scale-105 animate-bounce-subtle inline-flex items-center">
              Try it free <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Active Users', value: '2M+' },
              { label: 'Files Stored', value: '1B+' },
              { label: 'Data Secured', value: '10PB+' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-blue-500/20"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
}

export default Hero