import axios from "axios";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

const youtubeService = {
  getLatestVideos: async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
        &channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`,
      );
      return response.data.items;
    } catch (error) {
      return [];
    }
  },
};

export default youtubeService;
