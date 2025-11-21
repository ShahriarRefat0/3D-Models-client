# 3D Models Client

A frontend web application for browsing, uploading, and downloading 3D models, built with React, Vite, and Firebase Authentication.  
This client works together with the backend API repository at [3D-Models-server](https://github.com/ShahriarRefat0/3D-Models-server).

---

## 🚀 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Environment Variables](#environment-variables)  
6. [Folder Structure](#folder-structure)  
7. [Authentication & API Flow](#authentication-api-flow)  
8. [Deployment](#deployment)  
9. [Contributing](#contributing)  
10. [License](#license)  
11. [Author](#author)

---

## ✨ Features

- Browse all available 3D models.  
- Search models by name (live search).  
- View details of a model (name, creator, downloads, created date).  
- User authentication (login/register) via Firebase.  
- Protected routes: upload, edit, my-models, my-downloads.  
- Upload your own 3D models (if implemented on backend).  
- Track your models and download activities.  
- Responsive UI for desktop and mobile.

---

## 🛠 Tech Stack

- **Frontend**: React.js, Vite  
- **UI**: Tailwind CSS + DaisyUI (or other UI library)  
- **Authentication**: Firebase Auth  
- **HTTP Client**: Axios  
- **Backend API**: Express.js & MongoDB (from separate server repo)  
- **Hosting/Deployment**: Vercel, Netlify, or similar (optional)

---

## 📥 Installation

```bash
# Clone the repo
git clone https://github.com/ShahriarRefat0/3D-Models-client.git
cd 3D-Models-client

# Install dependencies
npm install

# Start development server
npm run dev  

# Build for production
npm run build

---  
##Environment Variables
VITE_API_KEY=AIzaSyXXXX…
VITE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_MESSAGING_SENDER_ID=XXXXXXXXXXXX
VITE_APP_ID=1:XXXXXXXXXXXX:web:XXXXXXXXXXXX

VITE_SERVER_URL=https://your-backend-url.com  # e.g., http://localhost:3000 for local

```
 
## 📂 Folder Structure
3D-Models-client/  
│  
├─ public/  
│  
├─ src/  
│   ├─ components/     # Reusable UI components  
│   ├─ pages/          # Route pages  
│   ├─ hooks/          # Custom React hooks  
│   ├─ contexts/       # React context providers  
│   ├─ firebase/       # Firebase initialization  
│   ├─ utils/          # Utility functions  
│   └─ App.jsx         # Main app component  
│  
├─ .env  
├─ package.json  
└─ README.md
