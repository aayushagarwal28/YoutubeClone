const API_KEY= "{REPLACE_WITH GOOGLE API KEY}";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${API_KEY}`;
export const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=oCcks-fwq2c&key=${API_KEY}`;

export const YOUTUBE_CHATS_API = "";

export const CHAT_LENGTH = 25;