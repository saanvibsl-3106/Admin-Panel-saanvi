import homeImage from '../../assets/home.png'; // Ensure this path is correct
import ExperienceList from './ExpList';

export default function Home() {
  return (
    <>
    <div className="flex items-center justify-between min-h-screen bg-green-50">
      <div className="flex-shrink-0 w-1/2 p-8">
        <img
          src={homeImage}
          alt="Welcome"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
        <p className="text-gray-700">We are delighted to have you here. Explore our site to find various content and links to different sections.</p>
      </div>
      
    </div>
    <ExperienceList/>
    </>
  );
}
