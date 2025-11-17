import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { servicesIndex } from '../data/services';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // 🔥 ADD THIS MAP (THIS IS WHAT YOU WANTED)
  const iconMap = {
    photographer: "camicon",
    catering: "cateringicon",
    "dj-music": "djicon",
    decor: "decoicon",
    "banquet-hall": "hallicon",
    rentals: "rentalicon",
  };

  const getImageSrc = (serviceId) => {
    const iconName = iconMap[serviceId]; // pick correct icon based on service
    try {
      return new URL(`../assets/${iconName}.jpg`, import.meta.url).href;
    } catch {
      return `../assets/${iconName}.jpg`;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    const matchedService = servicesIndex.find(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.id.toLowerCase().includes(query)
    );

    if (matchedService) {
      navigate(`/services/${matchedService.id}`);
      setSearchQuery('');
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Let's get you started
        </h2>
      </div>

      <div className="bg-[#2585FB] rounded-2xl pt-16 pb-12 px-6 md:px-10 mb-12 shadow-lg max-w-6xl mx-auto">

        <p className="text-center text-white text-base md:text-lg mb-6 font-medium">
          From Birthdays to Big Days — Find Every Service You Need to Celebrate Right.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 lg:gap-6 justify-items-center">
          {servicesIndex.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="w-full max-w-[150px]"
            >
              <div className="relative aspect-square rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <img
                  src={getImageSrc(service.id)}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/120x120/F5F5DC/6B7280?text=${service.name}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-sm font-semibold text-center px-3">
                    {service.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-700 mb-6 text-lg font-medium">
          Not sure where to find what you're looking for? Just search below!
        </p>
        <form onSubmit={handleSearch}>
          <div className="flex items-center bg-white border-2 border-gray-200 rounded-full overflow-hidden shadow-lg hover:shadow-xl focus-within:border-blue-600 focus-within:shadow-xl transition-all duration-300">
           
            <div className="pl-5 pr-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for services (e.g., Photographer, DJ, Catering)..."
              className="flex-1 py-4 px-4 outline-none text-gray-700 placeholder-gray-400 text-base"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-colors duration-300 rounded-r-full shadow-md"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Services;
