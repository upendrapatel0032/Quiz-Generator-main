import { useState } from "react";
import { motion } from "framer-motion";
import FileUploader from "../components/FileUploader";
import { VideoFile } from "../types";
import { Upload, VideoIcon, BrainCircuit } from "lucide-react";

interface UploadPageProps {
  onUploadStart: (videoId: string) => void;
}

const blobVariants = {
  animate: {
    rotate: [0, 10, -10, 0],
    scale: [1, 1.1, 0.9, 1],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
    },
  },
};

const UploadPage = ({ onUploadStart }: UploadPageProps) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelected = async (videoFile: VideoFile) => {
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("video", videoFile.file);
      formData.append("title", videoFile.title);
      formData.append("duration", videoFile.duration.toString());

      setTimeout(() => {
        const mockVideoId = "video_" + Math.random().toString(36).substr(2, 9);
        onUploadStart(mockVideoId);
        setIsUploading(false);
      }, 1500);
    } catch (error) {
      console.error("Error uploading file:", error);
      setIsUploading(false);
    }
  };

  const features = [
    {
      icon: <VideoIcon className="text-blue-600" size={24} />,
      title: "Smart Transcription",
      description: "Turn any lecture into readable text using Whisper AI.",
    },
    {
      icon: <BrainCircuit className="text-purple-600" size={24} />,
      title: "AI Question Builder",
      description: "Automatically generate intelligent MCQs from content.",
    },
    {
      icon: <Upload className="text-yellow-600" size={24} />,
      title: "Private Local Processing",
      description: "We process everything on your system. Your data stays yours.",
    },
  ];

  return (
    <div className="relative max-w-6xl mx-auto p-6 overflow-hidden min-h-screen bg-gray-50">
      {/* Animated Blob SVG Background */}
      <motion.svg
        variants={blobVariants}
        animate="animate"
        className="absolute top-[-15rem] left-[-15rem] w-[40rem] h-[40rem] opacity-30"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            fill="#a78bfa"
            d="M120,-160C154,-125,177,-85,186,-39C195,7,189,57,165,90C141,123,98,139,54,165C11,190,-32,225,-66,212C-99,199,-123,138,-154,94C-185,50,-223,23,-228,-20C-233,-63,-205,-121,-159,-156C-114,-192,-57,-204,-8,-193C40,-182,79,-148,120,-160Z"
          />
        </g>
      </motion.svg>

      {/* Existing blur circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[40rem] h-[40rem] bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-0 left-0"></div>
        <div className="absolute w-[40rem] h-[40rem] bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-ping bottom-0 right-0"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text mb-4">
          Upload Your Lecture & Let AI Do the Magic
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto text-base">
          Quiz-ready learning from any video. Upload your MP4 and let offline AI
          extract knowledge and test your understanding.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FileUploader onFileSelected={handleFileSelected} />
          {isUploading && (
            <div className="mt-4 p-4 bg-blue-50 rounded-xl flex items-center justify-center space-x-3">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-blue-700 font-medium text-sm">
                Uploading video...
              </span>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 rounded-lg bg-gray-100">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-sm text-gray-700 relative z-10"
      >
        <p className="font-semibold mb-2">📋 Upload Checklist:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Only MP4 files supported</li>
          <li>Audio must be in English</li>
          <li>Ensure clear audio for accurate results</li>
          <li>Minimum lecture length: 5 minutes</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default UploadPage;
