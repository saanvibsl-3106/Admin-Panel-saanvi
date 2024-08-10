import { useEffect, useState } from "react";
import UserForm from "./UserForm"; // Import the UserForm component

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const getAllUsers = async () => {
        const token = localStorage.getItem('token');
        
        try {
            const response = await fetch('http://localhost:3000/api/admin/users', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                console.error('Error fetching users:', response.statusText);
            }
        } catch (error) {
            console.log('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (userId) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                // Remove the deleted user from the state
                setUsers(users.filter(user => user._id !== userId));
            } else {
                console.error('Error deleting user:', response.statusText);
            }
        } catch (error) {
            console.log('Delete error:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleAddUser = () => {
        setSelectedUser(null);
        setShowForm(true);
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowForm(true);
    };

    const handleSaveUser = () => {
        setShowForm(false);
        getAllUsers(); // Refresh the user list
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Users List</h1>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button 
                onClick={handleAddUser}
                className="mb-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
                Add User
            </button>
            {loading ? (
                <p>Loading...</p>
            ) : filteredUsers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredUsers.map((user) => (
                        <div key={user._id} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="font-semibold text-lg mb-2">{user.name}</h2>
                            <p className="text-gray-600">Roll Number: {user.rollNo}</p>
                            <p className="text-gray-600">Email: {user.email}</p>
                            <p className="text-gray-600">Branch: {user.branch}</p>
                            <p className="text-gray-600">Year: {user.year}</p>
                            <p className="text-gray-600">Role: {user.role}</p>
                            <p className="text-gray-500">Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
                            {user.createdAt && (
                                <p className="text-gray-500 text-sm mt-2">
                                    Joined: {new Date(user.createdAt).toLocaleDateString()}
                                </p>
                            )}
                            <div className="mt-4 flex space-x-2">
                                <button 
                                    onClick={() => handleEditUser(user)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => deleteUser(user._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No users found.</p>
            )}
            {showForm && (
                <UserForm 
                    userToEdit={selectedUser} 
                    onSave={handleSaveUser} 
                    onCancel={() => setShowForm(false)} 
                />
            )}
        </div>
    );
}
