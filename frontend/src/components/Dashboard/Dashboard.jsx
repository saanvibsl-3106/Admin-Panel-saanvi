import React from 'react';

export default function Dashboard({ user }) {
  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">User Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-gray-700"><span className="font-semibold">Roll Number:</span> {user.rollNo}</p>
          <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-gray-700"><span className="font-semibold">Name:</span> {user.name}</p>
          <p className="text-gray-700"><span className="font-semibold">Branch:</span> {user.branch}</p>
          <p className="text-gray-700"><span className="font-semibold">Year:</span> {user.year}</p>
          <p className="text-gray-700"><span className="font-semibold">Role:</span> {user.role}</p>
          <p className="text-gray-700"><span className="font-semibold">Admin:</span> {user.isAdmin ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}