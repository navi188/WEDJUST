import React, { useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = useMemo(
    () => servicesData.find((item) => item.id === serviceId),
    [serviceId],
  );
  const [activeBusinessId, setActiveBusinessId] = useState(
    service?.businesses?.[0]?.id ?? null,
  );
  const detailRef = useRef(null);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
        <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The service you are looking for is unavailable. Please head back and
            try again.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleBusinessClick = (businessId) => {
    setActiveBusinessId(businessId);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const activeBusiness = service.businesses.find(
    (item) => item.id === activeBusinessId,
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-white/80 mb-3">
              Service Spotlight
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {service.tagline}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span aria-hidden="true">←</span> Back to Services
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Featured Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.businesses.map((business) => {
              const isActive = business.id === activeBusinessId;
              return (
                <button
                  key={business.id}
                  type="button"
                  onClick={() => handleBusinessClick(business.id)}
                  className={`group relative rounded-2xl overflow-hidden text-left shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isActive ? 'ring-4 ring-blue-500 ring-offset-4' : ''
                  }`}
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {business.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {business.highlight}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-blue-600">
                      Tap to view details ↓
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section
          ref={detailRef}
          className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {activeBusiness ? (
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 h-80 lg:h-auto">
                <img
                  src={activeBusiness.image}
                  alt={activeBusiness.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-3 p-8 md:p-10">
                <p className="uppercase tracking-[0.3em] text-xs text-blue-600 mb-4">
                  Business Highlight
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeBusiness.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {activeBusiness.highlight}
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                      Starting Price
                    </p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {activeBusiness.startingPrice}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-2xl p-4">
                      <p className="text-sm uppercase tracking-widest text-blue-700">
                        Call
                      </p>
                      <a
                        href={`tel:${activeBusiness.contact.phone.replace(/\s+/g, '')}`}
                        className="text-lg font-medium text-blue-900"
                      >
                        {activeBusiness.contact.phone}
                      </a>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-4">
                      <p className="text-sm uppercase tracking-widest text-blue-700">
                        Email
                      </p>
                      <a
                        href={`mailto:${activeBusiness.contact.email}`}
                        className="text-lg font-medium text-blue-900"
                      >
                        {activeBusiness.contact.email}
                      </a>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-4 md:col-span-2">
                      <p className="text-sm uppercase tracking-widest text-blue-700">
                        Website
                      </p>
                      <a
                        href={activeBusiness.contact.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg font-medium text-blue-900 underline"
                      >
                        {activeBusiness.contact.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-10 text-center">
              <p className="text-lg text-gray-600">
                Select a business to view more details.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ServiceDetail;


