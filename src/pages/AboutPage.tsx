// import { motion } from 'framer-motion';
// import { BookOpen, Code, Shield, Cpu } from 'lucide-react';

// const AboutPage = () => {
//   const features = [
//     {
//       icon: <BookOpen className="w-6 h-6 text-blue-600" />,
//       title: 'Automated Learning',
//       description: 'Transform lecture videos into structured learning materials with AI-generated questions.'
//     },
//     {
//       icon: <Shield className="w-6 h-6 text-blue-600" />,
//       title: 'Privacy First',
//       description: 'All processing happens locally on your machine, ensuring your content remains private.'
//     },
//     {
//       icon: <Cpu className="w-6 h-6 text-blue-600" />,
//       title: 'AI Powered',
//       description: 'Utilizing state-of-the-art AI models for accurate transcription and question generation.'
//     },
//     {
//       icon: <Code className="w-6 h-6 text-blue-600" />,
//       title: 'Open Source',
//       description: 'Built with transparency in mind, allowing for community contributions and improvements.'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-16">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-3xl mx-auto text-center mb-12"
//       >
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">About Quizora</h1>
//         <p className="text-gray-600 text-lg">
//           Quizora turns video lectures into interactive educational content using local AI transcription and MCQ generation.
//         </p>
//       </motion.div>

//       <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
//         {features.map((feature, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-start gap-4"
//           >
//             <div className="bg-blue-100 p-3 rounded-full">{feature.icon}</div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className="mt-16 bg-blue-100 border border-blue-200 rounded-xl p-8 text-center max-w-3xl mx-auto"
//       >
//         <h2 className="text-2xl font-bold text-blue-900 mb-3">Get Started Today</h2>
//         <p className="text-blue-800 mb-5 text-sm">
//           Experience the future of learning by transforming your videos into smart quizzes.
//         </p>
//         <a
//           href="mailto:santoshsaroj0032@gmail.com"
//           className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//         >
//           Contact Us
//         </a>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutPage;




import { motion } from "framer-motion";
import { BookOpen, Code, Shield, Cpu } from "lucide-react";

const blobVariants = {
  animate: {
    rotate: [0, 10, -10, 0],
    scale: [1, 1.05, 0.95, 1],
    transition: {
      repeat: Infinity,
      duration: 15,
      ease: "easeInOut",
    },
  },
};

const AboutPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Automated Learning",
      description:
        "Transform lecture videos into structured learning materials with AI-generated questions.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Privacy First",
      description:
        "All processing happens locally on your machine, ensuring your content remains private.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "AI Powered",
      description:
        "Utilizing state-of-the-art AI models for accurate transcription and question generation.",
    },
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Open Source",
      description:
        "Built with transparency in mind, allowing for community contributions and improvements.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-16 overflow-hidden">
      {/* Animated SVG blobs in background */}
      <motion.svg
        className="absolute -z-20 top-[-15rem] left-[-15rem] w-[40rem] h-[40rem] opacity-20"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        variants={blobVariants}
        animate="animate"
      >
        <g transform="translate(300,300)">
          <path
            fill="#60a5fa"
            d="M120,-160C154,-125,177,-85,186,-39C195,7,189,57,165,90C141,123,98,139,54,165C11,190,-32,225,-66,212C-99,199,-123,138,-154,94C-185,50,-223,23,-228,-20C-233,-63,-205,-121,-159,-156C-114,-192,-57,-204,-8,-193C40,-182,79,-148,120,-160Z"
          />
        </g>
      </motion.svg>

      <motion.svg
        className="absolute -z-20 top-[10rem] right-[-10rem] w-[35rem] h-[35rem] opacity-15"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: "3s" }}
      >
        <g transform="translate(300,300)">
          <path
            fill="#2563eb"
            d="M108,-133C139,-96,153,-48,152,-3C150,42,133,85,102,114C71,143,27,157,-13,170C-52,182,-91,193,-121,172C-152,151,-174,98,-191,50C-208,2,-220,-41,-198,-74C-176,-108,-120,-131,-72,-156C-24,-181,23,-209,62,-195C101,-181,132,-127,108,-133Z"
          />
        </g>
      </motion.svg>

      <motion.svg
        className="absolute -z-20 bottom-[-12rem] left-[-10rem] w-[45rem] h-[45rem] opacity-10"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        variants={blobVariants}
        animate="animate"
        style={{ animationDelay: "6s" }}
      >
        <g transform="translate(300,300)">
          <path
            fill="#93c5fd"
            d="M125,-144C169,-103,200,-53,195,-3C190,47,150,92,110,122C70,152,35,168,-3,178C-40,188,-79,191,-112,172C-145,153,-172,112,-190,69C-209,26,-220,-19,-199,-54C-177,-89,-122,-114,-74,-143C-26,-172,18,-206,61,-195C103,-184,124,-184,125,-144Z"
          />
        </g>
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Quizora</h1>
        <p className="text-gray-600 text-lg">
          Quizora turns video lectures into interactive educational content using local AI transcription and MCQ generation.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 relative z-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-start gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 bg-blue-100 border border-blue-200 rounded-xl p-8 text-center max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-3">Get Started Today</h2>
        <p className="text-blue-800 mb-5 text-sm">
          Experience the future of learning by transforming your videos into smart quizzes.
        </p>
        <a
          href="mailto:santoshsaroj0032@gmail.com"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;