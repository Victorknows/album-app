import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/PhotosPage.module.css';

const PhotosPage = ({ photos, setPhotos }) => {
  const { albumId } = useParams(); // Get the album ID from the URL
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (photos.length === 0) {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
          );
          const data = await response.json();
          setPhotos(data); // Save the photos in the centralized state
        } catch (error) {
          setError('Failed to fetch photos.');
        }
      }
    };

    fetchPhotos();
  }, [albumId, photos, setPhotos]);

  const handlePhotoClick = (id) => {
    navigate(`/photos/${id}`); // Navigate to the PhotoDetails page
  };

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (photos.length === 0) {
    return <p className={styles.loading}>Loading photos...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Photos</h1>
      <div className={styles.photoGrid}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={styles.photoCard}
            onClick={() => handlePhotoClick(photo.id)}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className={styles.photo}
            />
            <p className={styles.photoTitle}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
