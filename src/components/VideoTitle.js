import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[30%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="py-6 text-lg w-4/12">{overview}</p>
      <div>
        <button className="py-2 px-2 text-2xl bg-white text-black w-1/12 rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="py-2 px-3 ml-2 text-2xl bg-gray-500 text-white rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
