// UploadPage.tsx
import React from 'react';
import styles from './UploadPage.module.css';
import videos from './video';

const UploadPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>Streaming With Ads</span>
        </div>
        <button className={styles.uploadButton}>+ Upload</button>
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
    </div>
  );
};

export default UploadPage;