# Quizora – Smart Lecture Video Transcription & Quiz Generator

Quizora is an innovative web app designed to convert your video lectures into engaging learning tools. It seamlessly transcribes the audio and creates multiple-choice quizzes for every five-minute segment, helping both teachers and learners study more effectively and interactively.

## Features
- **Easy Video Upload**: Upload MP4 files effortlessly using a drag-and-drop interface  
- **Smart Transcription**: Accurate speech-to-text conversion powered by Whisper AI  
- **AI-Driven Quiz Creation**: Automatically generates relevant multiple-choice questions  
- **Lecture Segmentation**: Breaks videos into 5-minute segments for better organization  
- **Flexible Export Options**: Export transcripts and quizzes as JSON or PDF files  
- **Privacy First**: All processing happens locally on your machine, keeping your data secure  
- **Live Progress Tracking**: Real-time updates on the status of video processing 


## Some SnapShot Of the Project
![image](https://github.com/user-attachments/assets/f30980f6-9a9d-4b46-86a2-3864373ac06f)
![image](https://github.com/user-attachments/assets/271249ba-96f5-42ce-b2a6-e1b7a3953da5)
![image](https://github.com/user-attachments/assets/b9e0ed99-69cb-48d1-bd99-e2c8b1e6aa5d)
![image](https://github.com/user-attachments/assets/cc8e360a-8adb-4ebf-b9c3-513278e0e9a5)









## Tech Stack

### Frontend
- React 18.3 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Query for data fetching
- Lucide React for icons

### Backend
- Node.js with Express
- TypeScript
- Supabase for database
- Multer for file uploads

### AI Components
- Whisper AI for transcription
- Local LLM for question generation

## Getting Started

### Prerequisites
- Node.js 16+
- Supabase account
- Local installation of Whisper and an LLM (e.g., Ollama with Mistral or Gemma)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd lectureiq
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update with your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your-supabase-url
     VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
     SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. In a separate terminal, start the backend server:
   ```bash
   npm run server
   ```

### Database Setup

The application uses Supabase as its database. The schema includes tables for:
- Videos
- Transcripts
- Questions

Run the migrations in `supabase/migrations` to set up your database schema.

## Usage

1. **Upload Video**
   - Drag and drop or click to select an MP4 video file
   - The video will be processed in three stages:
     1. Upload
     2. Transcription
     3. Question Generation

2. **View Results**
   - Browse through 5-minute segments
   - Review transcripts and generated questions
   - Export results in JSON or PDF format

3. **Export Options**
   - JSON Export: Structured data format for programmatic use
   - PDF Export: Formatted document for printing or sharing
   - Copy to Clipboard: Quick access to results

## Project Structure

```
lectureiq/
├── src/
│   ├── api/          # API client functions
│   ├── components/   # React components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility libraries
│   ├── pages/        # Page components
│   ├── server/       # Backend server code
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Helper functions
├── supabase/
│   └── migrations/   # Database migrations
└── public/          # Static assets
```
