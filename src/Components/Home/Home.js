import React from 'react';
import ReactSVG from '../../img/DoctoR (2).gif'
import Service from '../Service/Service';
const Home = () => {
    return (
        <div className="hero max-w-7xl mx-auto">
            <div className='py-28 px-5 block lg:flex items-center justify-between'>
                <div className="hero-text w-full lg:w-6/12 text-left">
                    <h1 className='lg:text-8xl md:text-7xl text-5xl font-mono font-bold mb-8'>HealthCare <br /><span className=' text-sky-600 lg:text-7xl md:text-6xl text-4xl font-sans'> For All</span></h1>
                    <p style={{ color: '#515151' }} className=' text-xl text-justify'>“A doctor, like anyone else who has to deal with human beings, each of them unique, cannot be a scientist; he is either, like the surgeon, a craftsman, or, like the physician and the psychologist, an artist. This means that in order to be a good doctor a man must also have a good character, that is to say, whatever weaknesses and foibles he may have, he must love his fellow human beings in the concrete and desire their good before his own.”</p>
                    <button className=' py-2 px-12 rounded my-10 bg-sky-500 text-xl text-white hover:bg-green-200 hover:text-black'>Learn more</button>
                </div>
                <img className='mx-auto' src={ReactSVG} alt="Svg doctro image" />
            </div>
            <Service></Service>
        </div>
    );
};

export default Home;