"use client"

import { FC} from 'react';
import Background3D from './Background';
import Features from './Features';
import Navigation from '../shared/Navigation';

const Hero: FC = () => {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Navigation />
      <Features />
    </div>
  );
}

export default Hero