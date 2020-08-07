import React, { useState, useRef, useEffect } from "react";

const MediaSession = () => {
  const mediaList = [
    {
      src: "https://media.vued.vanthink.cn/CJ7%20-%20Trailer.mp4",
      cover: "https://img1.wxzxzj.com/vpc-example-cover-CJ7-c.jpg",
      title: "长江七号-周星驰导演作品，关于外星人的童话故事",
      director: "周星驰",
    },

    {
      src: "https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4",
      cover: "https://img1.wxzxzj.com/vpc-example-cover-your-name-c.png",
      title: "你的名字-新海诚导演作品，穿越彼此的身体，遇见不可思议",
      director: "新海诚",
    },

    {
      src: "https://media.vued.vanthink.cn/the_garden_of_words_trailer_english__1080p.mp4",
      cover: "https://img1.wxzxzj.com/vpc-example-cover-the-garden-c.jpg",
      title: "言叶之庭-新海诚导演作品，下雨天静谧的动静也有唯美的相遇",
      director: "新海诚",
    },
  ];

  const [mounted, setMounted] = useState(true);
  const index = useRef(0);
  const [media, setMedia] = useState(mediaList[0]);
  const videoRef = useRef(null);

  const setMediaSession = (index) => {
    if ("mediaSession" in navigator) {
      setMedia(mediaList[index]);
    }
  };

  const playNext = () => {
    if (index.current === 2) {
      index.current = 0;
    } else {
      index.current += 1;
    }
    setMediaSession(index.current);
  };
  const playPrev = () => {
    if (index.current === 0) {
      index.current = 2;
    } else {
      index.current -= 1;
    }
    setMediaSession(index.current);
  };

  const initMediaSession = () => {
    if ("mediaSession" in navigator) {
      const ms = navigator.mediaSession;

      setMounted(false);
      setMediaSession(index.current);

      ms.setActionHandler("play", function () {
        videoRef.current.play();
      });

      ms.setActionHandler("nexttrack", function () {
        playNext();
      });

      ms.setActionHandler("previoustrack", function () {
        playPrev();
      });
    }
  };

  useEffect(() => {
    console.log("切换视频", media);
    navigator.mediaSession.metadata = new MediaMetadata({
      title: media.title,
      artist: media.director,
      artwork: [
        {
          src: media.cover,
          sizes: "192x192",
        },
      ],
    });
    videoRef.current.play();
  }, [media]);
  useEffect(() => {
    if (mounted) {
      console.log("init");
      initMediaSession();
    }
  }, [mounted]);

  return (
    <div>
      <h1 className="text-center mb-4">实现类似哔哩哔哩的播放浮层控制</h1>
      <div className="container m-auto">
        <video className="w-3/4 m-auto" ref={videoRef} controls poster={media.cover} src={media.src} />
      </div>
    </div>
  );
};

export default MediaSession;
