"use client";

import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Video, initialVideos } from './video';
import Header from './Header';
import Content from './Content';
import UploadForm from './UploadForm';

const UploadPage: React.FC = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [videos, setVideos] = useState<Video[]>(initialVideos || []);

  const handleUploadButtonClick = () => {
    setShowUploadForm(true);
  };

  const handleFormSubmit = (newVideo: Video) => {
    setVideos([...videos, newVideo]);
    setShowUploadForm(false);
  };

  return (
    <Box minH="100vh" bg="gray.900" color="white" position="relative">
      <Header onUploadClick={handleUploadButtonClick} />
      <Content videos={videos} />
      {showUploadForm && (
        <UploadForm
          onSubmit={handleFormSubmit}
          onCancel={() => setShowUploadForm(false)}
        />
      )}
    </Box>
  );
};

export default UploadPage;
