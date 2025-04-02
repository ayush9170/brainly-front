import { Logo } from "../icons/logo";

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
     
      <div className="flex items-center">
      <Logo /> 
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-white">Brainly</Link>
        </h1>
      </div>
      <div>
        <Link to="/signin" className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2 hover:bg-gray-200">Sign In</Link>
        <Link to="/signup" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; 2025 Notebook. All rights reserved.</p>
    </footer>
  );
};

export const Front = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-center p-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Welcome to Brainly</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Capture your thoughts, ideas, and notes in one place. Organize everything efficiently and access it anytime, anywhere.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};


