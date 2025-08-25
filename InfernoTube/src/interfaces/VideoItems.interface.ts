/*  {
            "kind": "youtube#searchResult",
            "id": {
                "kind": "youtube#video",
                "videoId": "Tn6-PIqc4UM"
            },
            "snippet": {
                "publishedAt": "2020-09-08T19:06:55Z",
                "channelId": "UCsBjURrPoezykLs9EqgamOA",
                "title": "React in 100 Seconds",
                "description": "React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Tn6-PIqc4UM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Tn6-PIqc4UM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Tn6-PIqc4UM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Fireship",
                "liveBroadcastContent": "none",
                "publishTime": "2020-09-08T19:06:55Z"
            }
        }, */

export interface IvideoItem {
  kind: string;
  id: {
    kind: string;
    videoId: string;
    playlistId: string;
  };
  snippet: dataSnippet;
  statistics: {
    subscriberCount: string;
  };
}

export interface dataSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishedTime: string;
}
