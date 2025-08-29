import React from "react";
import { authors } from "../store/mockData";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const VideoCard = ({ video }) => {
  const author = authors.find((a) => a.id === video.authorId);

  // Convert YouTube URL (supports youtu.be short links or watch?v= links)
  const getEmbedUrl = (url) => {
    try {
      // Handle short links like https://youtu.be/VIDEO_ID
      if (url.includes("youtu.be")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // Handle normal YouTube links like https://www.youtube.com/watch?v=VIDEO_ID
      if (url.includes("watch?v=")) {
        const videoId = new URL(url).searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // Otherwise return as is
      return url;
    } catch (e) {
      console.error("Invalid video URL:", url);
      return url;
    }
  };

  const openVideo = () => {
    const embedUrl = getEmbedUrl(video.videoUrl);

    MySwal.fire({
      title: video.title,
      html: `
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
          <iframe 
            src="${embedUrl}?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style="position:absolute;top:0;left:0;width:100%;height:100%;">
          </iframe>
        </div>
      `,
      width: 800,
      showCloseButton: true,
      showConfirmButton: false,
      background: "#000",
      customClass: {
        title: "swal2-video-title",
      },
    });
  };

  return (
    <div className="col-lg-6">
      <article>
        <div
          className="post-img video-thumb"
          style={{ position: "relative", cursor: "pointer" }}
          onClick={openVideo}
        >
          <img src={video.thumbnail} alt={video.title} className="img-fluid" />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "48px",
              color: "white",
              pointerEvents: "none",
            }}
          >
            ►
          </div>
        </div>

        <p className="post-category">Videos</p>
        <h2 className="title">{video.title}</h2>
        <div className="d-flex align-items-center">
          <img
            src={author?.avatar}
            alt={author?.name}
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">{author?.name}</p>
            <p className="post-date">{video.date}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default VideoCard;
