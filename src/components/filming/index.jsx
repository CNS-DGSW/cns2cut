import React, { useEffect, useRef, useState } from "react";

const CONSTRAINTS = { video: true };

const FilmingCom = () => {
  const videoRef = useRef(null);
  const [image, setImage] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    let time;
    if (!state) {
      let a = 10;
      time = setInterval(() => {
        if (a === 0) {
          snapshot();
          clearInterval(time);
        }
        console.log(a--);
      }, 1000);
    }
  }, [state]);

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(false);
      }, 1000);
    }
  }, [state]);

  useEffect(() => {
    if (!state) {
      startVideo();
    }
  }, [state]);

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
      videoElement.videoWidth,
      videoElement.videoHeight
    );

    setImage([...image, canvasElement.toDataURL("image/webp")]);
    setTimeout(() => {
      setState(true);
    }, 100);

    // let pixels = context.getImageData(
    //   0,
    //   0,
    //   canvasElement.width,
    //   canvasElement.height
    // );

    // document.querySelector("img").src = canvasElement.toDataURL("image/webp");

    // document.querySelector("img").src = pixels;
  }

  return (
    <>
      {!state ? (
        <div>
          <video width={640} height={480} autoPlay ref={videoRef} />
          <canvas style={{ display: "none" }} width={640} height={480}></canvas>
        </div>
      ) : (
        image.map((v, index) => <img src={v} alt="" key={index} />)
      )}
    </>
  );
};

export default FilmingCom;
