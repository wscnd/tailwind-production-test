import React from "react";

import data from "./data/data";
import DestinationCard from "./DestionationCard";

const App = () => {
  return (
    <div>
      <div className="bg-gray-100 lg:grid-areas-lg lg:grid-cols-lg lg:grid 2xl:grid-cols-2xl 2xl:grid-areas-2xl ">
        <div className="relative hidden grid-in-image lg:block">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full "
            src="img/beach-work.jpg"
            alt="Woman workcationning on the Beach"
          />
        </div>
        <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl grid-in-content lg:max-w-full xl:mr-0 lg:py-24 lg:px-12 ">
          <div className="xl:max-w-xl">
            <img className="h-10" src="img/logo-brand.svg" alt="Workcation" />
            <img
              className="mt-6 shadow-xl sm:object-cover object-center sm:w-full rounded-xl sm:mt-8 sm:h-64 md:h-72 md:object-cover md:object-center lg:hidden "
              src="img/beach-work.jpg"
              alt="Woman workcationning on the Beach"
            />
            <h1 className="mt-6 text-2xl font-headline font-semibold trakcing-tight text-gray-900 sm:mt-8 lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br />
              <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-lg font-light text-gray-600 sm:mt-5 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 s:mt-6">
              <a
                className="inline-block px-4 py-3 text-sm font-semibold tracking-normal text-white uppercase bg-brand rounded-lg sm:text-base hover:bg-brand-light transform hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-brand focus:ring-opacity-50 active:bg-brand-dark "
                href="$"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-md px-8 pb-8 mx-auto lg:pt-5 sm:max-w-xl lg:max-w-6xl lg:px-12">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <DestinationCard data={data} />
      </div>
    </div>
  );
};

export default App;
