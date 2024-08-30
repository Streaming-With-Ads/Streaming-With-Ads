"use client";

import React, { useState } from 'react';
import styles from './UploadPage.module.css';
import { Video, initialVideos } from './video';

const UploadPage: React.FC = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videos, setVideos] = useState<Video[]>(initialVideos || []);

  const handleUploadButtonClick = () => {
    setShowUploadForm(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile) {
      const newVideo: Video = {
        id: Date.now(), // or any unique ID generator
        title: (event.target as HTMLFormElement).videoTitle.value,
        description: (event.target as HTMLFormElement).videoDescription.value,
        thumbnail: URL.createObjectURL(selectedFile), // Generate URL for the uploaded video
      };

      setVideos([...videos, newVideo]);
      setShowUploadForm(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>Streaming With Ads</span>
        </div>
        <button className={styles.uploadButton} onClick={handleUploadButtonClick}>+ Upload</button>
      </header>
      <div className={styles.bodyContent}>
        <h2 className={styles.title}>Videos</h2>
        {videos.length === 0 ? (
          <div className={styles.content}>
            <div className={styles.instructions}>
              {/* Show instructions when the list is empty */}
              <div className={styles.instructionsIcon}>
                <div className={styles.innerIcon}></div>
              </div>
              <h3 className={styles.instructionsTitle}>How to get started:</h3>
              <ol className={styles.instructionsList}>
                {/* List items */}
                <li>Once your shuttle drive is connected, a pop-up will show up. Click the Upload button or the pop-up to initiate a new upload.</li>
                <li>Camera and sound rolls are recognized via MHL files. Therefore to ensure our system accurately ingests and verifies these rolls, please ensure MHL files are present for each roll.</li>
                <li>All files will be uploaded to Netflix storage and then duplicated to the cloud.</li>
                <li>You'll receive email confirmations once media has been uploaded and verified by the system.</li>
              </ol>
            </div>
          </div>
        ) : (
          <ul className={styles.videoList}>
            {videos.map((video) => (
              <li key={video.id}>
                <div className={styles.videoItem}>
                  <h2>{video.title}</h2>
                  <p>{video.description}</p>
                  <img src={video.thumbnail} alt={video.title} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Upload Form Overlay */}
      {showUploadForm && (
        <div className={styles.overlay}>
          <div className={styles.uploadForm}>
            <h2>Upload Video</h2>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="videoTitle">Title</label>
                <input type="text" id="videoTitle" name="title" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="videoDescription">Description</label>
                <textarea id="videoDescription" name="description" required></textarea>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="videoFile">Video File</label>
                <input
                  type="file"
                  id="videoFile"
                  name="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>Submit</button>
              <button type="button" className={styles.cancelButton} onClick={() => setShowUploadForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
