'use client';

import { FC, useState } from 'react';
import { HardDrive, ArrowRight, Menu, X } from 'lucide-react';

const Navigation: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <>
            <div
                className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
                    isSidebarOpen
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setIsSidebarOpen(false)}
            >
                <div
                    className={`fixed inset-y-0 left-0 w-64 transform bg-gray-900/95 backdrop-blur-lg transition-transform duration-300 ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='p-6'>
                        <div className='mb-8 flex items-center justify-between'>
                            <div className='flex items-center space-x-2'>
                                <HardDrive className='h-8 w-8 text-blue-400' />
                                <span className='text-xl font-bold text-white'>
                                    CloudStore
                                </span>
                            </div>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className='text-blue-200 hover:text-white'
                            >
                                <X className='h-6 w-6' />
                            </button>
                        </div>
                        <nav className='space-y-6'>
                            <a
                                href='#features'
                                className='block text-blue-200 transition-colors hover:text-white'
                            >
                                Features
                            </a>
                            <a
                                href='#pricing'
                                className='block text-blue-200 transition-colors hover:text-white'
                            >
                                Pricing
                            </a>
                            <button className='w-full transform rounded-full bg-blue-500/80 px-6 py-2 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-600'>
                                Get Started
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='relative overflow-hidden'>
                <nav className='relative z-10 flex items-center justify-between p-6'>
                    <div className='flex items-center space-x-2'>
                        <HardDrive className='h-8 w-8 text-blue-400' />
                        <span className='text-xl font-bold text-white'>
                            CloudNest
                        </span>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className='text-blue-200 hover:text-white'
                        >
                            <Menu className='h-6 w-6' />
                        </button>
                    </div>
                    <div className='hidden items-center space-x-8 md:flex'>
                        <a
                            href='#features'
                            className='text-blue-200 transition-colors hover:text-white'
                        >
                            Features
                        </a>
                        <a
                            href='#pricing'
                            className='text-blue-200 transition-colors hover:text-white'
                        >
                            Pricing
                        </a>
                        <button className='transform rounded-full bg-blue-500/80 px-6 py-2 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-600'>
                            Get Started
                        </button>
                    </div>
                </nav>

                <div className='relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h1 className='animate-fade-in mb-6 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
                            Store everything.
                            <br />
                            Access anywhere.
                        </h1>
                        <p className='animate-fade-in-delay mx-auto mb-8 max-w-2xl text-xl text-blue-200'>
                            Secure cloud storage with seamless sharing and
                            collaboration features. Start storing your files
                            today.
                        </p>
                        <button className='animate-bounce-subtle inline-flex transform items-center rounded-full bg-blue-500/80 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-600'>
                            Try it free <ArrowRight className='ml-2 h-5 w-5' />
                        </button>
                    </div>

                    <div className='mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3'>
                        {[
                            { label: 'Active Users', value: '2M+' },
                            { label: 'Files Stored', value: '1B+' },
                            { label: 'Data Secured', value: '10PB+' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className='rounded-2xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-lg'
                            >
                                <div className='mb-2 text-3xl font-bold text-blue-400'>
                                    {stat.value}
                                </div>
                                <div className='text-blue-200'>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
