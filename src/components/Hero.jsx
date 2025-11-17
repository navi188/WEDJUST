import React from 'react';
import logo from '../assets/logo2.webp';
import mainbg from '../assets/mainbg.png';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mainbg})`,
      }}
    >
      <div className="mb-8">
        <img
          src={logo}
          alt="WEDJUST Logo"
          className="max-w-[200px] md:max-w-[250px] lg:max-w-[300px] h-auto rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>

      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center hover:scale-105 transition-all duration-300"
        style={{
          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))',
          textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        One platform, Every celebration
      </h1>
    </section>
  );
};

export default Hero;
