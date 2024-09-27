import React, { useEffect, useState } from "react";

import youtubeService from "../services/youtubeService";
import "../styles/Messages.css";

interface Video {
  id: string;
  snippet: {
    title: string,
    thumbnails: {
      high: {
        url: string,
      },
    },
  };
}

const Messages: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [recommendedVideos] = useState<Video[]>([
    {
      id: "RECOMMENDED_VIDEO_ID_1",
      snippet: {
        title: "AMADO TIMÓTEO - A MENSAGEM DO EVANGELHO",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/6g3QlcS5Bbo/maxresdefault.jpg",
          },
        },
      },
    },
    {
      id: "RECOMMENDED_VIDEO_ID_2",
      snippet: {
        title: "Pr. Edson Gouveia - 25/04/2021",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/7v5DBntgEZU/maxresdefault.jpg",
          },
        },
      },
    },
    {
      id: "RECOMMENDED_VIDEO_ID_3",
      snippet: {
        title: "Seu Nome é JESUS - Especial de Páscoa",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/XndkrMccoJ8/maxresdefault.jpg",
          },
        },
      },
    },
  ]);

  useEffect(() => {
    const fetchVideos = async () => {
      const latestVideos = await youtubeService.getLatest12Videos();
      setVideos(latestVideos);
    };

    fetchVideos();
  }, []);

  return (
    <div className="messages-page">
      {/* <div className="video-player">
        <video width="100%" height="500" controls autoPlay>
          <source src="../videos/IMG_4705.mp4" type="video/mp4" />
          <track
            src="path_to_your_captions.vtt"
            kind="captions"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="recommended-videos">
        {recommendedVideos.map((video) => (
          <div key={video.id} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <h3 className="video-title">{video.snippet.title}</h3>
            </a>
          </div>
        ))}
      </div>
      <h2>Mensagens</h2>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
              <h3 className="video-title">{video.snippet.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
