import style from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const fontKrona = style.div`
  fontFamily: 'Krona One';
  `;

export default function Register() {
  const [formData, setFormData] = useState({
    rollNo: '',
    email: '',
    name: '',
    branch: '',
    year: '',
    role: 'Mentor',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isGeneratingOtp, setIsGeneratingOtp] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'branch' ? value.toUpperCase() : value
    }));
  };

  const handleGenerateOtp = async () => {
    setIsGeneratingOtp(true);
    try {
      const response = await axios.post('http://localhost:3000/api/auth/generate-otp', { email: formData.email });
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
      const response = await axios.post('http://localhost:3000/api/auth/verify-otp', { email: formData.email, otp });
      if (response.data.message === 'OTP verified successfully') {
        handleSubmit();
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to verify OTP');
    }
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', formData);

      if (response.status === 201) {
        setMessage(response.data.message);
        setError('');
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
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-screen-sm w-full">
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
        }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            key !== 'confirmPassword' && (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                {key === 'role' ? (
                  <select
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="Mentor">Mentor</option>
                    <option value="Mentee">Mentee</option>
                  </select>
                ) : (
                  <input
                    type={key === 'password' ? 'password' : 'text'}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    placeholder={key === 'password' ? 'Enter your password' : `Enter your ${key}`}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                )}
              </div>
            )
          ))}
          <div className="w-full mb-4 flex gap-4">
            <div className="w-full">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          {showOtpInput && (
            <div className="w-full mb-4">
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
          <div className="w-full flex justify-center mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
              disabled={isGeneratingOtp}
            >
              {isGeneratingOtp ? 'Generating OTP...' : (showOtpInput ? 'Verify OTP and Register' : 'Generate OTP')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// Registration Page

{/* <div class="flex flex-col h-dvh w-screen">
    <div class="w-screen h-[95px] bg-[#2F3DBD] flex text-white items-center">
        <img src="../img/nitj_logo2.png" alt="" class="h-[72px] ml-[12px]">
        <span class="text-2xl">Dr. BR AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY , JALANDHAR</span>
    </div>
    <div class="w-screen h-screen flex items-center justify-center flex-col fontKrona">
        <div class="h-[60px] w-[345px] bg-[#FAB953] mb-5 text-black flex item-center justify-center">
            <p class="text-xl md:text-2xl mt-[4%]">Registration</p>
        </div>
        <form action="post" class="bg-[#E7E7E7] py-10 px-12 md:text-2xl text-lg">
            <div class="mb-4">
                <label class="block font-bold mb-2" for="username">
                    Username
                </label>
                <input class="w-[600px] bg-[#E7E7E7] border border-black py-2 px-3" id="username" type="text">
            </div>
            <div class="mb-4">
                <label class="block font-bold mb-2" for="email">
                    Email
                </label>
                <input class="w-[600px] bg-[#E7E7E7] border border-black py-2 px-3" id="email" type="text">
            </div>
            <div class="mb-4">
                <label class="block font-bold mb-2" for="pass">
                    Password
                </label>
                <input class="w-[600px] bg-[#E7E7E7] border border-black py-2 px-3" id="password" type="text">
            </div>
        </form>
        <button class="text-2xl mt-4 transition ease-in-out duration-300 text-white w-[600px] px-15 py-4 bg-[#5A6AFE] hover:bg-[#4355f1] block rounded-md">Register</button>
    </div>
</div> */}
    