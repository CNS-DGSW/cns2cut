import React, { useEffect } from "react";
import * as B from "./ButtonArea.style";

import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as bodyPix from "@tensorflow-models/body-pix";

import school from "../../../assets/school.jpg"

const ButtonArea = ({
    image,
    setImage,
    background,
    setBackground,
    canvasRef,
    webcamRef,
    bodypixnet,
    setBodypixnet,
}) => {

  // -------사진 찍기 관련
  function snapShot() {
    setImage((prev) => [...prev, canvasRef.current.toDataURL("image/jpeg")]);
  }
  

  async function drawImage(webcam,context,canvas){
    const tempCanvas1 = document.createElement("canvas");
    tempCanvas1.width = canvas.width;
    tempCanvas1.height = canvas.height;
    const tempCanvas1Ctx = tempCanvas1.getContext("2d");

    const tempCanvas2 = document.createElement("canvas");
    tempCanvas2.width = canvas.width;
    tempCanvas2.height = canvas.height;
    const tempCanvas2Ctx = tempCanvas1.getContext("2d");

    const segmentation = await bodypixnet.segmentPerson(webcam);
    const mask = bodyPix.toMask(segmentation);

    (async function drawMask() {
        requestAnimationFrame(drawMask);
        // draw mask on tempCanvas
        const segmentation = await bodypixnet.segmentPerson(webcam);
        const mask = bodyPix.toMask(segmentation);
        tempCanvas1Ctx.putImageData(mask, 0, 0);
        // draw original image
        context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
        // use destination-out, then only masked area will be removed
        context.save();
        context.globalCompositeOperation = "destination-out";
        context.drawImage(tempCanvas1, 0, 0, canvas.width, canvas.height);
        context.restore();
  
        // context.clearRect(0, 0, canvas.width, canvas.height);
        // if (isload) {
        //   context.drawImage(img, 0, 0, canvas.width, canvas.height);
        // }
        // context.drawImage(sexCanvas, 0, 0, canvas.width, canvas.height);

      })();
  }  

  async function canvasSetter(backImage){
    const webcam = webcamRef.current.video;
    const canvas = canvasRef.current;

    webcam.width = canvas.width = webcam.videoWith;
    webcam.height = canvas.height = webcam.videoHeight;

    const context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);

    if (bodypixnet){
        drawImage(webcam,context,canvas);
    }

    setBackground(backImage)
    
  }

  useEffect(() => {
    canvasSetter(school)
  },[bodypixnet])

  return (<B.Wrapper>
    <B.Button onClick={snapShot}>사진 찍기</B.Button>
    {
        image.map((e,idx) => (
            <B.Img src={e} key={idx} />
        ))
    }
  </B.Wrapper>);
};

export default ButtonArea;
