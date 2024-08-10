import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [role, setRole] = useState('Mentor');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isGeneratingOtp, setIsGeneratingOtp] = useState(false);
  
  const navigate = useNavigate();

  const handleGenerateOtp = async () => {
    setIsGeneratingOtp(true);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/generate-otp', { email });
      setMessage(response.data.message);
      setShowOtpInput(true);
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to generate OTP');
    } finally {
      setIsGeneratingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/verify-otp', { email, otp });
      if (response.data.message === 'OTP verified successfully') {
        handleSubmit();
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to verify OTP');
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        rollNo,
        email,
        name,
        branch,
        year,
        role,
        password,
        confirmPassword
      });

      if (response.status === 201) {
        setMessage(response.data.message);
        setError('');
        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        setMessage('');
        setError(response.data.message || 'Unexpected error occurred');
      }
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={(e) => {
          e.preventDefault();
          if (!showOtpInput) {
            handleGenerateOtp();
          } else {
            handleVerifyOtp();
          }
        }}>
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
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="Mentor">Mentor</option>
              <option value="Mentee">Mentee</option>
            </select>
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {showOtpInput && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
            disabled={isGeneratingOtp}
          >
            {isGeneratingOtp ? 'Generating OTP...' : (showOtpInput ? 'Verify OTP and Register' : 'Generate OTP')}
          </button>
        </form>
      </div>
    </div>
  );
}