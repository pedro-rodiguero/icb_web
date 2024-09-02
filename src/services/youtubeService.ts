// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const API_KEY = "AIzaSyDsGNrosqtTjNGEOLS87N2cwdItw3AuxXY";
const CHANNEL_ID = "UCGRWMUV-tU2z32Wz9K02Y9g";

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
