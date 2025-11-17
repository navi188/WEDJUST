import React from 'react';
import bb1 from '../assets/bb1.png';
import bb2 from '../assets/bb2.png';
import bb3 from '../assets/bb3.png';

const Benefits = () => {
  const highlights = [
    {
      id: 1,
      image: bb1,
      imageAlt: 'Joyful wedding moments',
      headline: '“From vibrant Haldi functions to romantic post-wedding portraits”',
      description:
        'Capturing every emotion, every color, and every candid smile that makes your wedding journey unforgettable.',
    },
    {
      id: 2,
      image: bb2,
      imageAlt: 'Baby milestones captured',
      headline: "“From 'Birth day' to 'Birthday' and 'First cry' to 'First cake'”",
      description:
        "Preserving the tiniest milestones and the biggest joys of your child's beautiful story, one precious memory at a time.",
    },
    {
      id: 3,
      image: bb3,
      imageAlt: 'Celebratory gatherings',
      headline: '“From office parties to party at home”',
      description:
        'Adding spark, laughter, and togetherness to every gathering, no matter where the celebration takes place.',
    },
  ];

  return (
    <section className="bg-[#FDECCF] py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight">
          Turn Every Occasion Into a Celebration
        </h2>

        <div className="mt-16 space-y-14">
          {highlights.map(({ id, image, imageAlt, headline, description }, index) => {
            const isEvenRow = index % 2 === 1;

            return (
              <div
                key={id}
                className={`flex flex-col ${
                  isEvenRow ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center lg:items-stretch gap-10 lg:gap-16`}
              >
                <div className="w-full max-w-md flex-1">
                  <div
                    className="relative rounded-[28px] bg-white border border-[#F8D9A6] shadow-[0_24px_50px_rgba(192,141,62,0.18)] overflow-hidden"
                    style={{ paddingTop: '66%' }}
                  >
                    <img
                      src={image}
                      alt={imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`flex-1 text-lg md:text-xl text-gray-800 leading-relaxed text-center ${
                    isEvenRow ? 'lg:text-right' : 'lg:text-left'
                  }`}
                >
                  <span className="block font-semibold text-gray-900">
                    {headline}
                  </span>
                  <span className="block mt-4 text-base md:text-lg text-gray-700">
                    {description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-20 text-center text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold">
          Make every moment a celebration to remember with{' '}
          <span className="text-[#1A3AA9]">"Wedjust"</span>
        </p>
      </div>
    </section>
  );
};

export default Benefits;


