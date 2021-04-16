import React from "react";

const App = () => {
  return (
    <div class="lg:grid-areas-lg lg:grid-cols-lg lg:grid 2xl:grid-cols-2xl 2xl:grid-areas-2xl">
      <div class="relative hidden grid-in-image lg:block">
        <img
          class="absolute inset-0 object-cover object-center w-full h-full "
          src="./src/img/beach-work.jpg"
          alt="Woman workcationning on the Beach"
        />
      </div>

      <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl grid-in-content lg:max-w-full xl:mr-0 ">
        <div className="xl:max-w-xl">
          <img className="h-10" src="./src/img/logo.svg" alt="Workcation" />
          <img
            className="mt-6 shadow-xl sm:object-cover sm:object-center sm:w-full rounded-xl sm:mt-8 sm:h-64 md:h-72 md:object-cover md:object-center lg:hidden "
            src="./src/img/beach-work.jpg"
            alt="Woman workcationning on the Beach"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br className="hidden lg:inline" />
            <span className="text-indigo-500 ">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-lg font-light text-gray-600 sm:mt-5 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div className="mt-4 s:mt-6">
            <a
              className="inline-block px-4 py-3 text-sm font-semibold tracking-normal text-white uppercase bg-indigo-500 rounded-lg sm:text-base hover:bg-indigo-400 transform hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 "
              href="$"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
