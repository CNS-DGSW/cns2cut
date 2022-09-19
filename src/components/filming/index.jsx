import React, { useEffect, useRef } from "react";

const CONSTRAINTS = { video: true };

const FilmingCom = () => {
  useEffect(() => {
    let a = 10;
    const time = setInterval(() => {
      if (a === 0) {
        snapshot();
        clearInterval(time);
      }
      console.log(a--);
    }, 1000);
  }, []);

  useEffect(() => {
    startVideo();
  }, []);

  const videoRef = useRef(null);

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
    if (videoRef && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream;
    }
  };

  function snapshot() {
    var videoElement = document.querySelector("video");
    var canvasElement = document.querySelector("canvas");
    var context = canvasElement.getContext("2d");

    context.drawImage(
      videoElement,
      0,
      0,
      videoElement.width,
      videoElement.height
    );
    document.querySelector("img").src = canvasElement.toDataURL("image/webp");
  }

  return (
    <div>
      <video autoPlay ref={videoRef} />
      <canvas width="320" height="240"></canvas>
      <img src="" alt="" />
    </div>
  );
};

export default FilmingCom;
