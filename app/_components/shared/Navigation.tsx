'use client';

import { FC, useState } from 'react';
import { HardDrive, Menu, X } from 'lucide-react';

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
            </div>
        </>
    );
};

export default Navigation;
