// import { motion } from 'framer-motion';
// import { BookOpen, LogOut } from 'lucide-react';

// interface HeaderProps {
//   onNavigate: (page: 'home' | 'about') => void;
//   onLogout: () => void;
// }

// const Header = ({ onNavigate, onLogout }: HeaderProps) => {
//   return (
//     <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <motion.div 
//           className="flex items-center space-x-2 cursor-pointer"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           onClick={() => onNavigate('home')}
//         >
//           <div className="bg-primary-600 text-white p-2 rounded-md">
//             <BookOpen size={24} />
//           </div>
//           <div>
//             <h1 className="text-xl font-bold text-gray-900">Quizora</h1>
//             {/* <p className="text-xs text-gray-500">Video to MCQ Generator</p> */}
//           </div>
//         </motion.div>
        
//         <motion.nav 
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="flex items-center space-x-6"
//         >
//           <ul className="flex space-x-6">
//             <li>
//               <button 
//                 onClick={() => onNavigate('home')}
//                 className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => onNavigate('about')}
//                 className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
//               >
//                 About
//               </button>
//             </li>
//           </ul>
//           <button
//             onClick={onLogout}
//             className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
//           >
//             <LogOut size={16} />
//             <span>Logout</span>
//           </button>
//         </motion.nav>
//       </div>
//     </header>
//   );
// };

// export default Header;




import { motion } from 'framer-motion';
import { BookOpen, LogOut } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about') => void;
  onLogout: () => void;
}

const Header = ({ onNavigate, onLogout }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-purple-600 shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onClick={() => onNavigate('home')}
        >
          <div className="bg-white rounded-full p-3 shadow-lg">
            <BookOpen size={28} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-wide select-none">Quizora</h1>
            <p className="text-sm text-white/80 font-light">Smart Video to MCQ Generator</p>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="flex items-center space-x-8"
        >
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="text-white hover:text-yellow-300 transition-colors text-md font-semibold tracking-wide"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="text-white hover:text-yellow-300 transition-colors text-md font-semibold tracking-wide"
              >
                About
              </button>
            </li>
          </ul>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full shadow-md transition-all text-sm font-medium"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
