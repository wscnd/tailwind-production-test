import React, { useEffect, useState } from "react";

const DestinationCard = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className="mt-6 lg:grid lg:gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {/* <div className="mt-6 lg:grid lg:gap-6 lg:grid-areas-card-lg xl:grid-areas-card-xl"> */}
      {data.map((destination, key) => (
        <div
          className="my-6 lg:my-0 flex items-center rounded-lg bg-white shadow-lg overflow-hidden "
          // className={`my-6 lg:my-0 flex items-center rounded-lg bg-white shadow-lg overflow-hidden lg:grid-in-card-${Number(
          //   key % 2 === 0,
          // )}`}
          key={destination.city}
        >
          <img
            src={destination.imageUrl}
            className="h-32 w-32 flex-shrink-0"
            alt={destination.imageAlt}
          />
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-800 uppercase ">
              {destination.city}
            </h3>
            <p className="text-gray-600 ">{destination.averagePrice}</p>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-400 font-semibold text-sm"
              >
                Explore {destination.propertyCount} properties
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationCard;
