import React, { useState } from "react";
import { PropertyProps } from "../../interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const tabs = ["Overview", "What we offer", "About host", "Reviews"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<string>("Overview");

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold">{property.name}</h1>
            <div className="flex items-center space-x-3 text-sm text-gray-600 mt-2">
              <span className="text-yellow-500">★ {property.rating}</span>
              <span>·</span>
              <span>{property.address.city}, {property.address.country}</span>
            </div>
          </header>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <img src={property.images[0]} alt={property.name} className="col-span-2 w-full h-72 sm:h-96 object-cover rounded-lg" />
            {property.images.slice(1, 4).map((img, i) => (
              <img key={i} src={img} alt={`${property.name}-${i}`} className="w-full h-48 object-cover rounded-lg" />
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <nav className="flex space-x-2 border-b">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`py-2 px-3 -mb-px ${activeTab === t ? "border-b-2 border-green-600 font-semibold" : "text-gray-600"}`}
                >
                  {t}
                </button>
              ))}
            </nav>

            <div className="mt-4">
              {activeTab === "Overview" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                  <p className="text-gray-700">{property.description}</p>
                </div>
              )}

              {activeTab === "What we offer" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">What this place offers</h2>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                    {property.category.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-gray-100 p-2 rounded">
                        <span className="text-xl">🏷️</span>
                        <span className="text-sm">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "About host" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">About the host</h2>
                  <div className="flex items-center gap-4">
                    <img src={property.host.avatar} alt={property.host.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold">{property.host.name}</p>
                      <p className="text-sm text-gray-600">{property.host.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Reviews" && (
                <div>
                  <ReviewSection reviews={property.reviews} />
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Booking Section (sticky on large screens) */}
        <aside className="w-full lg:w-96">
          <div className="lg:sticky lg:top-24">
            <BookingSection price={property.price} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PropertyDetail;
