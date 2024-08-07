import { useState, useEffect } from 'react';
import axios from 'axios';
import ExpCard from './ExpCard';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data/experince');
        console.log(response.data.message);
        setExperiences(response.data.message);
      } catch (error) {
        setError('Failed to fetch experiences');
        console.error('Error fetching experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div className="p-8 bg-gray-100">
    <h1 className="text-7xl">Experinces</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.length > 0 ? (
          experiences.map(exp => (
            <ExpCard key={exp._id} experience={exp} />
          ))
        ) : (
          <p className="text-gray-500">No experiences found</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceList;