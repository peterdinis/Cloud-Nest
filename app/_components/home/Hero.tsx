'use client';

import { FC } from 'react';
import Background3D from './Background';
import Features from './Features';
import Navigation from '../shared/Navigation';
import HeroText from './HeroText';

const Hero: FC = () => {
    return (
        <div className='relative min-h-screen'>
            <Background3D />
            <Navigation />
            <HeroText />
            <Features />
        </div>
    );
};

export default Hero;
