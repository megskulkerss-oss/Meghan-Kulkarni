export type Project = {
  id: string;
  title: string;
  year?: string;
  role?: string;
  client?: string;
  tags: string[];
  highlight?: string;
  youtubeId: string;
  embedUrl: string;
  thumbUrl: string;
};

export const projects: Project[] = [
  {
    "id": "taylor-swift-bbc-radio-1",
    "title": "Taylor Swift \u2014 BBC Radio 1",
    "year": "2025",
    "role": "Videographer",
    "client": "BBC Radio 1",
    "tags": [
      "Music",
      "Interview",
      "Broadcast"
    ],
    "videoUrl": "https://youtu.be/Cqw8fZhggbQ?si=6ZwVnUXDRWK5dw_8",
    "youtubeId": "Cqw8fZhggbQ",
    "embedUrl": "https://www.youtube.com/embed/Cqw8fZhggbQ?autoplay=1&rel=0&modestbranding=1",
    "thumbUrl": "https://i.ytimg.com/vi/Cqw8fZhggbQ/hqdefault.jpg"
  },
  {
    "id": "hugh-jackman-ryan-reynolds-bbc-radio-1",
    "title": "Hugh Jackman & Ryan Reynolds \u2014 BBC Radio 1",
    "year": "2024",
    "role": "Videographer & Video Editor",
    "client": "BBC Radio 1",
    "tags": [
      "Interview",
      "Broadcast"
    ],
    "highlight": "Highest-watched video on BBC Radio 1 YouTube (2024)",
    "videoUrl": "https://youtu.be/iQkv3snsJ_0?si=1jlWWtl4jlgU5NTa",
    "youtubeId": "iQkv3snsJ_0",
    "embedUrl": "https://www.youtube.com/embed/iQkv3snsJ_0?autoplay=1&rel=0&modestbranding=1",
    "thumbUrl": "https://i.ytimg.com/vi/iQkv3snsJ_0/hqdefault.jpg"
  },
  {
    "id": "timothee-chalamet-bbc-radio-1",
    "title": "Timoth\u00e9e Chalamet \u2014 BBC Radio 1",
    "year": "2025",
    "role": "Videographer & Video Editor",
    "client": "BBC Radio 1",
    "tags": [
      "Interview",
      "Broadcast",
      "Film"
    ],
    "videoUrl": "https://youtu.be/N3Lu7IE0V-0?si=39i2uM0Mpcc3Khbg",
    "youtubeId": "N3Lu7IE0V-0",
    "embedUrl": "https://www.youtube.com/embed/N3Lu7IE0V-0?autoplay=1&rel=0&modestbranding=1",
    "thumbUrl": "https://i.ytimg.com/vi/N3Lu7IE0V-0/hqdefault.jpg"
  }
] as const;
