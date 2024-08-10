// components/AdminExp.jsx
import { useEffect, useState } from 'react';
import ExperienceForm from './ExperienceForm';

export default function AdminExp() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [experienceToEdit, setExperienceToEdit] = useState(null);

  const getAllExperiences = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:3000/api/admin/experiences', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setExperiences(data);
      } else {
        console.error('Error fetching experiences:', response.statusText);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteExperience = async (experienceId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:3000/api/admin/experiences/${experienceId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remove the deleted experience from the state
        setExperiences(experiences.filter(exp => exp._id !== experienceId));
      } else {
        console.error('Error deleting experience:', response.statusText);
      }
    } catch (error) {
      console.log('Delete error:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredExperiences = experiences.filter(exp =>
    exp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddExperience = () => {
    setExperienceToEdit(null);
  };

  const handleSaveExperience = (experience) => {
    if (experienceToEdit) {
      setExperiences(experiences.map(exp => exp._id === experience._id ? experience : exp));
    } else {
      setExperiences([...experiences, experience]);
    }
    setExperienceToEdit(null);
  };

  const handleCancel = () => {
    setExperienceToEdit(null);
  };

  useEffect(() => {
    getAllExperiences();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Experiences List</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleAddExperience}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add Experience
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExperiences.map((exp) => (
            <div key={exp._id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="font-semibold text-lg mb-2">{exp.name}</h2>
              <p className="text-gray-600">Experience: {exp.experience}</p>
              <button
                onClick={() => setExperienceToEdit(exp)}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Edit Experience
              </button>
              <button
                onClick={() => deleteExperience(exp._id)}
                className="mt-4 ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete Experience
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No experiences found.</p>
      )}
      {experienceToEdit && (
        <ExperienceForm
          experienceToEdit={experienceToEdit}
          onSave={handleSaveExperience}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
