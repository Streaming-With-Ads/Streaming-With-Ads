import React, { ReactNode } from 'react';
import styles from './UploadPage.module.css';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
