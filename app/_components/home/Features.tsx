import { FC } from 'react';
import { Shield, Share2, Users } from 'lucide-react';

const Features: FC = () => {
    return (
        <div className='py-20' id='features'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-12 md:grid-cols-3'>
                    <div className='rounded-2xl border border-blue-500/20 bg-white/5 p-8 text-center backdrop-blur-lg transition-all hover:scale-105 hover:bg-white/10'>
                        <Shield className='mx-auto mb-4 h-12 w-12 text-blue-400' />
                        <h3 className='mb-2 text-xl font-semibold text-white'>
                            Secure Storage
                        </h3>
                        <p className='text-blue-200'>
                            Your files are encrypted and stored safely in the
                            cloud.
                        </p>
                    </div>
                    <div className='rounded-2xl border border-blue-500/20 bg-white/5 p-8 text-center backdrop-blur-lg transition-all hover:scale-105 hover:bg-white/10'>
                        <Share2 className='mx-auto mb-4 h-12 w-12 text-blue-400' />
                        <h3 className='mb-2 text-xl font-semibold text-white'>
                            Easy Sharing
                        </h3>
                        <p className='text-blue-200'>
                            Share files and folders with anyone, anywhere.
                        </p>
                    </div>
                    <div className='rounded-2xl border border-blue-500/20 bg-white/5 p-8 text-center backdrop-blur-lg transition-all hover:scale-105 hover:bg-white/10'>
                        <Users className='mx-auto mb-4 h-12 w-12 text-blue-400' />
                        <h3 className='mb-2 text-xl font-semibold text-white'>
                            Collaboration
                        </h3>
                        <p className='text-blue-200'>
                            Work together with your team in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
