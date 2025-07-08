# QuizSync

A real-time quiz web application with synchronized timers, live waiting rooms, and instant results. Teachers create MCQ quizzes with secure codes, students join and compete, featuring anti-cheating measures and detailed analytics.
A modern, real-time quiz platform that synchronizes teachers and students for interactive MCQ assessments.

## ✨ Key Features
- **Real-time Synchronization** - Live waiting rooms and synchronized countdown timers
- **Secure Quiz Access** - Unique codes for each quiz session
- **Multiple Question Types** - Single/multiple correct, all/none of the above
- **Anti-Cheating Measures** - Right-click disabled, question shuffling, auto-submit
- **Instant Results** - Pie charts and detailed answer reviews
- **Role-Based Access** - Separate dashboards for teachers and students
- **Mobile Responsive** - Optimized for all devices

## 🛠️ Tech Stack
- **Frontend**: React, CSS, JavaScript, Tailwind CSS (planned), Chart.js (planned)
- **Backend**: Node.js, Express.js (planned)
- **Database**: MySQL (planned)
- **Real-time**: Socket.io (planned)
- **Authentication**: bcrypt, Express sessions (planned)

## 🎓 Perfect For
Educational institutions, training centers, and anyone conducting timed assessments with real-time participation tracking.

Built as part of internship project demonstrating full-stack development and real-time web technologies.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/quizsync.git
cd quizsync
```

2. Install dependencies
```bash
# Install client dependencies
cd client
npm install

# Return to root and install server dependencies (when backend is ready)
cd ..
npm install
```

3. Create a `.env` file in the root directory and add your environment variables

4. Start the development server
```bash
# Run client (React) only
cd client
npm start

# Run full stack app (when backend is ready)
npm run dev
```

## 📁 Project Structure
```
quizsync/
├── client/                       # Frontend (React App)
│   ├── public/                   # Static files
│   └── src/
│       ├── assets/              # Images, logos, icons
│       ├── components/          # Reusable UI components
│       ├── pages/               # Full pages
│       ├── features/            # Feature-specific components
│       ├── services/            # API service functions
│       ├── utils/               # Helper functions
│       ├── contexts/            # Context API files
│       ├── App.jsx
│       ├── index.js
│       └── styles/              # Global styles
│
├── server/                      # Backend (Coming soon)
│   ├── controllers/            
│   ├── models/                 
│   ├── routes/                 
│   ├── middlewares/           
│   ├── services/              
│   ├── config/                
│   ├── app.js                 
│   └── server.js              
│
├── .env                        # Environment variables
├── package.json
├── README.md
└── .gitignore
```

## 👥 Contributors
- Team members from Vivekanand Institute of Technology, Mumbai 