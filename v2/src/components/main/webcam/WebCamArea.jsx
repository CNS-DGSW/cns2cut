import React, { useEffect, useState } from "react";
import * as W from "./WebCamArea.style";
import Webcam from "react-webcam";

import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as bodyPix from "@tensorflow-models/body-pix";

const WebCamArea = ({ 
    background,
    setBackground,
    webcamRef, 
    canvasRef,
    bodypixnet,
    setBodypixnet,
 }) => {
  const videoConstraints = {
    // width: "100%",
    // height:"100%",
    width: 1280,
    height: 1280,
    facingMode: "user",
  };


  // --------초기 세팅
  useEffect(() => {
    bodyPix.load().then((net) => {
        setBodypixnet(net);
    })
  },[])

  // --------canvas관련
  const drawImage = async (webcam, context, canvas) => {
    const tempCanvas = document.createElement("canvas");
  };
  //   console.log(webcamRef.videoWidth);



  return (
    <W.Wrapper>
      <Webcam
        ref={webcamRef}
        audio={false}
        // width={720}
        // height={720}
        // height="100%"
        width="100%"
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="webcam"
      />
      <canvas ref={canvasRef} className="canvas" />
    </W.Wrapper>
  );
};

export default WebCamArea;
