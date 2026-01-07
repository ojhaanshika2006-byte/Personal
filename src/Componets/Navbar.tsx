// import { Link } from "react-router-dom";
// import DarkModeToggle from "./Darkmode";

// export default function Navbar() {
//   return (
//     <nav
//       className="relative w-full h-50 bg-cover bg-center"
//       // style={{
//       //   backgroundImage:
//       //     "url('https://img.freepik.com/free-photo/particle-lines-futuristic-gradient-background_53876-104053.jpg?semt=ais_hybrid&w=740&q=80')",
//       // }}
//     >
//       {/* Gradient + Blur Overlay */}
//       <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-indigo-900/70 to-purple-900/80 backdrop-blur-md"></div>

//       {/* Navbar Content */}
//       <div className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
//         {/* Left: Logo + Links */}
//         < div className="flex items-center gap-10">
//            <div className="flex items-center gap-3 bg-white/10 px-3 py-2 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
//             <img
//               src="data:image/jpeg;base64,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"
//               alt="User Profile"
//               className="w-10 h-10 rounded-full object-cover border-2 border-amber-400"
//             />
//             <span className="hidden sm:block text-white font-semibold">
//               Anshika Ojha
//             </span>
//           </div>

//           <div className="hidden md:flex gap-8 text-lg font-medium text-white">
//             <Link
//               to="/"
//               className="hover:text-blue-700 hover:bg-white transition duration-300"
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/tasks"
//               className="hover:text-blue-700 hover:bg-white transition duration-300"
//             >
//               Tasks
//             </Link>
//             <Link
//               to="/tasks/new"
//               className="hover:text-blue-700 hover:bg-white transition duration-300"
//             >
//               Add Task
//             </Link>
//           </div>
//         </div>

//         {/* Right: Dark Mode + Profile */}
//         <div className="flex items-center gap-6 text-2xl text-green-100 hover:bg-white hover:text-black border-2 ">
//           <DarkModeToggle />

//           {/* Profile */}
         
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link } from 'react-router-dom';
import { useState } from 'react';
import DarkModeToggle from './Darkmode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl h-30 mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold tracking-wide">
          Productivity Dashboard
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-blue-700 hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="hover:text-blue-700 hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            Tasks
          </Link>
          <Link
            to="/tasks/new"
            className="hover:text-blue-700 hover:bg-white px-3 py-1 rounded transition duration-300"
          >
            Add Task
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-lg font-medium">
          <Link
            to="/"
            className="block hover:text-blue-700 hover:bg-white px-3 py-2 rounded transition duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="block hover:text-blue-700 hover:bg-white px-3 py-2 rounded transition duration-300"
          >
            Tasks
          </Link>
          <Link
            to="/tasks/new"
            className="block hover:text-blue-700 hover:bg-white px-3 py-2 rounded transition duration-300"
          >
            Add Task
          </Link>
        </div>
      )}
    </nav>
  );
}