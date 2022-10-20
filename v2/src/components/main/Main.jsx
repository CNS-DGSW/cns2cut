import React, { useEffect, useRef, useState } from "react";
import * as M from "./Main.style";

import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

import cut from "../../assets/cut.jpeg";
import schoolBackImg from "../../assets/dgswback.jpg";
import schoolFrontImg from "../../assets/main.jpg";
import playGroundImg from "../../assets/school.jpg";

const Main = () => {
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);
    // Manage the state of bodypixnet with useState
    const [bodypixnet, setBodypixnet] = useState();
  
    // Run only when the page is first loaded
    useEffect(() => {
      bodyPix.load().then((net) => {
        setBodypixnet(net);
      });
    }, []);
  
    const drawimage = async (webcam) => {
      const segmentation = await bodypixnet.segmentPerson(webcam);
      console.log(segmentation);
    };
  
    const clickHandler = async () => {
      const webcam = webcamRef.current.video;
      const canvas = canvasRef.current;
      // Make the canvas, webcam, and video size all the same size.
      webcam.width = canvas.width = webcam.videoWidth;
      webcam.height = canvas.height = webcam.videoHeight;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      // If it is clicked before bodypixnet is set, it will cause an error, so just in case.
      if (bodypixnet) {
        drawimage(webcam);
      }
    };
  return (
    <M.Wrapper>
      <M.CamWrapper>
        <Webcam
          ref={webcamRef}
          audio={false}
          width={1280}
          height={720}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="webcam"
        />
      </M.CamWrapper>
      <M.ButtonWrapper>
        <M.Button>사진1</M.Button>
        <M.TakeButton>사진1</M.TakeButton>
      </M.ButtonWrapper>
    </M.Wrapper>
  );
};

export default Main;
