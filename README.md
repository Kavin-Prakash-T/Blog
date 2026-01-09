# React Blog

A modern, full-featured blog application built with React and Firebase. Users can create, view, and manage blog posts with real-time data synchronization.

## 🚀 Features

- **Create Posts**: Authenticated users can create new blog posts with titles and descriptions
- **View Posts**: Browse all blog posts on the home page
- **Firebase Integration**: Real-time database with Firestore for post storage
- **User Authentication**: Firebase Authentication for user management
- **Protected Routes**: Secure routes that require authentication
- **Responsive Design**: Mobile-friendly interface
- **Loading Skeletons**: Smooth loading experience with skeleton screens
- **Dynamic Page Titles**: Custom page titles using custom hooks
- **Netlify Ready**: Pre-configured for Netlify deployment

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM v6.30.1
- **Backend**: Firebase 9.23.0 (Firestore & Authentication)
- **UI Components**: React Loading Skeleton
- **Deployment**: Netlify
- **Testing**: Jest & React Testing Library

## 📁 Project Structure

```
blog/
├── public/              # Static files
├── src/
│   ├── Components/      # Reusable UI components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── PostCard.js
│   │   └── SkeletonCard.js
│   ├── Pages/           # Page components
│   │   ├── HomePage.js
│   │   ├── CreatePost.js
│   │   └── PageNotFound.js
│   ├── Routes/          # Route configuration
│   │   ├── AllRoutes.js
│   │   └── ProtectedRoutes.js
│   ├── Hooks/           # Custom React hooks
│   │   └── useTitle.js
│   ├── firebase/        # Firebase configuration
│   │   └── config.js
│   ├── assets/          # Images and static assets
│   ├── App.js
│   └── index.js
├── netlify.toml         # Netlify configuration
└── package.json
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Enable Authentication (Email/Password or other providers)
   - Copy your Firebase configuration
   - Update `src/firebase/config.js` with your credentials:
   ```javascript
   // Example config structure
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Features in Detail

### Components
- **Header**: Navigation and app branding
- **Footer**: Footer information
- **PostCard**: Displays individual blog posts
- **SkeletonCard**: Loading placeholder

### Pages
- **HomePage**: Displays all blog posts
- **CreatePost**: Form to create new posts (protected route)
- **PageNotFound**: 404 error page

### Custom Hooks
- **useTitle**: Dynamically updates page title

## 🧪 Testing

Run tests with:
```bash
npm test
```

Testing libraries included:
- Jest DOM
- React Testing Library
- User Event Testing

## 📦 Dependencies

Key dependencies:
- `react` & `react-dom`: UI library
- `react-router-dom`: Client-side routing
- `firebase`: Backend services
- `react-loading-skeleton`: Loading animations
- `react-scripts`: Build tooling

## 👤 Author

Created with ❤️ using React and Firebase

