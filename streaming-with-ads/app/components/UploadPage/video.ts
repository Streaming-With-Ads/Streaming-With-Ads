interface Video {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
  }
  
  const videos: Video[] = [
    {
      id: 1,
      title: "Video 1",
      description: "This is a description of video 1",
      thumbnail: "https://example.com/video1-thumbnail.jpg"
    },
    {
      id: 2,
      title: "Video 2",
      description: "This is a description of video 2",
      thumbnail: "https://example.com/video2-thumbnail.jpg"
    },
    {
      id: 3,
      title: "Video 3",
      description: "This is a description of video 3",
      thumbnail: "https://example.com/video3-thumbnail.jpg"
    },
    // Add more videos here...
  ];
  
  export default videos;