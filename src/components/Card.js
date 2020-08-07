import React from "react";

const Card = () => {
  return (
    <>
      <div className="md:flex bg-white py-2 px-4 rounded-lg">
        <div className="md:flex-shrink-0">
          <img className="md:rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df" alt="Woman paying for a purchase" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
      <div className="flex justify-center mt-4 bg-white py-10">
        <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-lg">
          button
        </button>
      </div>
    </>
  );
};
export default Card;
