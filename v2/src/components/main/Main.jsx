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
    // bodypix
    const [bodypixnet, setBodypixnet] = useState();
    // 찍힌 이미지
    const [image,setImage] = useState([])
    // 배경 이미지
    const [backImage,setBackImage] = useState();
  
    useEffect(() => {
      bodyPix.load().then((net) => {
        setBodypixnet(net);
      });
    }, []);
  
    const drawimage = async (webcam) => {
      const segmentation = await bodypixnet.segmentPerson(webcam);
      console.log(segmentation);
    };
  
    const clickHandler = async (backImgName) => {
      const webcam = webcamRef.current.video;
      const canvas = canvasRef.current;
      // 켄바스, 웹캠, 비디오 사이즈를 같게 한다
      webcam.width = canvas.width = webcam.videoWidth;
      webcam.height = canvas.height = webcam.videoHeight;

      const context = canvas.getContext("2d");
      // 켄바스 지우기
      context.clearRect(0, 0, canvas.width, canvas.height);

      // 배경 변경
      setBackImage(backImgName)

      // 바디픽서가 없을 땐 에러가 뜨기 때문에
      if (bodypixnet) {
        drawimage(webcam);
      }
    };

    // --------- 사진 찍기
    function snapshot() {
        setImage([...image, canvasRef.current.toDataURL("image/jpeg")]);
      }
  return (
    <M.Wrapper>
      <M.CamWrapper>
        <Webcam
          ref={webcamRef}
          audio={false}
          width={1000}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
        <canvas ref={canvasRef} className="canvas" />
      </M.CamWrapper>
      <M.ButtonWrapper>
        <M.Header>대소고 인생네컷</M.Header>
        <M.Button onClick={() => clickHandler(schoolBackImg)}>학교 운동장</M.Button>
        <M.TakeButton>사진1</M.TakeButton>
      </M.ButtonWrapper>
    </M.Wrapper>
  );
};

export default Main;
