// import { useTheme } from '../context/Themecontext';
// export default function DarkModeToggle() {
//   const { theme, toggle } = useTheme();

//   return (
//     <button
//       onClick={toggle}
//       className={`px-4 py-2 rounded transition-colors duration-300
//         ${theme === 'dark'
//           ? 'bg-gray-800 text-white border border-gray-600 hover:bg-gray-700'
//           : 'bg-gray-200 text-black border border-gray-400 hover:bg-gray-300'}
//       `}
//     >
//       {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
//     </button>
//   );
// }