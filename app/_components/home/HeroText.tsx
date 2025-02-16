import { ArrowRight } from "lucide-react";
import { FC } from "react";

const HeroText: FC = () => {
    return (
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
    )
}

export default HeroText