// src/pages/AlbumPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/AlbumPage.module.css';

const AlbumPage = () => {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };
    fetchAlbums();
  }, [userId]);

  const handleViewPhotos = (albumId) => {
    navigate(`/albums/${albumId}/photos`);
  };

  return (
    <div className={styles['container']}>
      <h1>Albums</h1>
      {albums.length === 0 ? (
        <p>Loading albums...</p>
      ) : (
        <div className={styles['album-grid']}>
          {albums.map((album) => (
            <div key={album.id} className={styles['album-card']}>
              <h3>{album.title}</h3>
              <button
                className={styles['view-photos-btn']}
                onClick={() => handleViewPhotos(album.id)}
              >
                View Photos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumPage;
