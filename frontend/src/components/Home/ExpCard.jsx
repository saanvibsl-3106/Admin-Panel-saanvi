import React from 'react';

const ExpCard = ({ experience }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm w-full">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{experience.name}</h2>
      <p className="text-gray-600">{experience.experience}</p>
    </div>
  );
};

export default ExpCard;