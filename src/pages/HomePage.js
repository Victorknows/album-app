// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';
import { FaUserAlt } from 'react-icons/fa';  // Importing a user icon

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleViewAlbums = (userId) => {
    navigate(`/users/${userId}/albums`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meet Our Users</h1>
        <p className={styles.subtitle}>Explore users and their awesome albums.</p>
      </div>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <div className={styles.userGrid}>
          {users.map((user) => (
            <div key={user.id} className={styles.userCard}>
              <div className={styles.userInfo}>
                <FaUserAlt className={styles.userIcon} />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <button
                className={styles.viewAlbumsBtn}
                onClick={() => handleViewAlbums(user.id)}
              >
                View Albums
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
