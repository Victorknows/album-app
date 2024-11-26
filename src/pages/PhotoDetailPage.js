import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast function
import styles from '../styles/PhotoDetails.module.css';

const PhotoDetails = ({ photos, updatePhotoTitle }) => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(
    photos.find((p) => p.id === parseInt(id)) || null
  );
  const [newTitle, setNewTitle] = useState(photo ? photo.title : '');
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      if (!photo) {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos/${id}`
          );
          const data = await response.json();
          setPhoto(data);
          setNewTitle(data.title); // Set initial title for editing
        } catch (err) {
          setError('Failed to fetch photo details.');
        }
      }
    };

    fetchPhoto();
  }, [id, photo]);

  const handleSave = () => {
    updatePhotoTitle(parseInt(id), newTitle); // Persist changes to the centralized state
    setPhoto({ ...photo, title: newTitle }); // Update local state
    setIsEditing(false); // Exit editing mode
    toast.success('Title edited successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    }); // Show success toast
  };

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!photo) {
    return <p className={styles.loading}>Loading photo details...</p>;
  }

  return (
    <div className={styles.container}>
      <img src={photo.url} alt={photo.title} className={styles.photo} />
      {isEditing ? (
        <div className={styles.editContainer}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleSave} className={styles.saveButton}>
            Save
          </button>
        </div>
      ) : (
        <div className={styles.details}>
          <h2>{photo.title}</h2>
          <button onClick={() => setIsEditing(true)} className={styles.editButton}>
            Edit Title
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoDetails;
