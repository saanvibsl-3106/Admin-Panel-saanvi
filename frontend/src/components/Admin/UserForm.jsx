import { useState, useEffect } from 'react';

export default function UserForm({ userToEdit, onSave, onCancel }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (userToEdit) {
            setName(userToEdit.name);
            setEmail(userToEdit.email);
            setRollNo(userToEdit.rollNo);
            setBranch(userToEdit.branch);
            setYear(userToEdit.year);
            setRole(userToEdit.role);
            setPassword(''); // Reset password field on edit
            setIsEditing(true);
        } else {
            setName('');
            setEmail('');
            setRollNo('');
            setBranch('');
            setYear('');
            setRole('');
            setPassword('');
            setIsEditing(false);
        }
    }, [userToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing
            ? `http://localhost:3000/api/admin/users/${userToEdit._id}`
            : 'http://localhost:3000/api/admin/users';

        const userData = {
            name,
            email,
            rollNo,
            branch,
            year,
            role,
            ...(isEditing && password ? { password } : {}) // Include password only if editing and it's not empty
        };

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                onSave(data.user);
            } else {
                console.error('Error saving user:', response.statusText);
            }
        } catch (error) {
            console.log('Save error:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit User' : 'Add User'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Roll Number</label>
                        <input
                            type="text"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Branch</label>
                        <input
                            type="text"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Year</label>
                        <input
                            type="text"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Role</label>
                        <input
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    {!isEditing && (
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                    )}
                    <div className="flex justify-end space-x-4">
                        <button 
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            {isEditing ? 'Update' : 'Add'}
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
        </div>
    );
}
