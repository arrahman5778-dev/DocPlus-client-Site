import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/outline'
import DoctorsImage from '../../img/my-pic.jpg'

const About = () => {
    const naviget = useNavigate();
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <div className='p-3'>
                <button onClick={() => naviget(-1)} className='py-2 px-10  bg-sky-300 rounded font-xl font-semibold flex items-center justify-between text-white'> <ArrowLeftIcon className='w-5 mr-4 text-white'></ArrowLeftIcon>Go Back</button>
            </div>
            <div className=' flex py-24'>

                <img className=' w-96 h-96' src={DoctorsImage} alt="" />

                <div className='md:px-10 order-2 md:order-none py-24'>
                    <h1 className='text-sky-400 font-mono text-3xl font-bold py-7'>This is a my dream </h1>
                    <h1 className='text-slate-400 font-mono text-2xl font-bold'>Professional Software engineers</h1>
                    <h1 className='text-slate-400 font-mono text-2xl font-bold'>My goal is to be a good full stack developer</h1>
                </div>
            </div>

        </div>
    );
};

export default About;