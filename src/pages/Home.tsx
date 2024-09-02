import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ImageCarousel from "../components/ImageCarousel";
import YtHome from "../images/yt_home.svg";
import youtubeService from "../services/youtubeService";
import "../styles/Home.css";

const Home: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const imageUrls = [
    "https://storage.cloud.google.com/icb-web-bucket/photo1.JPG",
    "https://storage.cloud.google.com/icb-web-bucket/photo2.JPG",
  ];

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await youtubeService.getLatestVideos();
      setVideos(fetchedVideos);
    };
    fetchVideos();
  }, []);

  const getVideoUrl = (video: any) =>
    `https://www.youtube.com/watch?v=${video.id.videoId}`;
  const getThumbnailUrl = (videoId: string) =>
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const cultoVideo = videos.find((video) =>
    video.snippet.title.toLowerCase().includes("culto de celebração"),
  );
  const otherVideos = videos.filter(
    (video) =>
      !video.snippet.title.toLowerCase().includes("culto de celebração"),
  );

  return (
    <div>
      <div id="carousel">
        <ImageCarousel imageUrls={imageUrls} />
      </div>
      <div id="livestream">
        <Link
          to="/"
          className="yt_home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YtHome} alt="Youtube" />
        </Link>
      </div>
      <div id="messages">
        <div>
          {cultoVideo && (
            <a
              href={getVideoUrl(cultoVideo)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={getThumbnailUrl(cultoVideo.id.videoId)} alt="Culto" />
            </a>
          )}
        </div>
        <div>
          {otherVideos[0] && (
            <div>
              <a
                href={getVideoUrl(otherVideos[0])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getThumbnailUrl(otherVideos[0].id.videoId)}
                  alt="Video"
                />
              </a>
            </div>
          )}
          {otherVideos[1] && (
            <div>
              <a
                href={getVideoUrl(otherVideos[1])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getThumbnailUrl(otherVideos[1].id.videoId)}
                  alt="Video"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
