import { useState, useEffect } from 'react';

export default function ExperienceForm({ experienceToEdit, onSave, onCancel }) {
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (experienceToEdit) {
            setName(experienceToEdit.name);
            setExperience(experienceToEdit.experience);
            setIsEditing(true);
        } else {
            setName('');
            setExperience('');
            setIsEditing(false);
        }
    }, [experienceToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing
            ? `http://localhost:3000/api/admin/experiences/${experienceToEdit._id}`
            : 'http://localhost:3000/api/admin/experiences';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name, experience }),
            });

            if (response.ok) {
                const data = await response.json();
                onSave(data.experience);
            } else {
                console.error('Error saving experience:', response.statusText);
            }
        } catch (error) {
            console.log('Save error:', error);
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Experience' : 'Add Experience'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Experience</label>
                    <input
                        type="text"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        {isEditing ? 'Update Experience' : 'Add Experience'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
