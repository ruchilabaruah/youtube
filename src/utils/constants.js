const YT_API_KEY = "AIzaSyCuc6QoZoBUAp5UoxX_ZVLHEmRHKkgnKXk";

export const YT_POPULAR_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YT_API_KEY;
