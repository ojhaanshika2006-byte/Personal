// src/components/Toggle/DarkModeToggle.tsx
import { useTheme } from '../context/Themecontext';

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme();
  
  return (
    <button onClick={toggle} className="px-3 py-1 rounded border" >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )};