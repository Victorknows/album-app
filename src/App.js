import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import PhotosPage from './pages/PhotosPage';
import PhotoDetails from './pages/PhotoDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import { onAuthStateChangedListener } from './services/firebase';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './styles/global.css';

function App() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]); // Centralized state for all photos

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((currentUser) => {
      setUser(currentUser ? currentUser : null);
    });
    return () => unsubscribe();
  }, []);

  // Update a photo's title in the centralized state
  const updatePhotoTitle = (id, newTitle) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, title: newTitle } : photo
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage setUser={setUser} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/:userId/albums"
          element={
            <ProtectedRoute user={user}>
              <AlbumsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/albums/:albumId/photos"
          element={
            <ProtectedRoute user={user}>
              <PhotosPage photos={photos} setPhotos={setPhotos} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/photos/:id"
          element={
            <ProtectedRoute user={user}>
              <PhotoDetails photos={photos} updatePhotoTitle={updatePhotoTitle} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer /> {/* Add ToastContainer */}
    </Router>
  );
}

export default App;
