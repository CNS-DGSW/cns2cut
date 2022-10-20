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
      // 똑같은 크기의 켄바스를 만든다
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = webcam.videoWidth;
      tempCanvas.height = webcam.videoHeight;
      const tempCtx = tempCanvas.getContext("2d");

      const segmentation = await bodypixnet.segmentPerson(webcam);
      console.log(segmentation);
    };

    // async function drawimage (webcam,context,canvas){
    //     // 똑같은 크기의 켄바스를 들고온다
    //     const tempCanvas = document.createElement("canvas");
    //     tempCanvas.width = webcam.videoWidth;
    //     tempCanvas.height = webcam.videoHeight;
    //     const tempCtx = tempCanvas.getContext("2d");

    //     // 웹캡의 인수를 넣어서 분석을 해준다
    //     const segmentation = await bodypixnet.segmentPerson(webcam);

    //     (async function drawMask() {
    //         requestAnimationFrame(drawMask);
    //         // draw mask on tempCanvas
    //         const segmentation = await bodypixnet.segmentPerson(webcam);
    //         const mask = bodyPix.toMask(segmentation);
    //         tempCtx.putImageData(mask, 0, 0);
    //         // draw original image
    //         context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
    //         // use destination-out, then only masked area will be removed
    //         context.save();
    //         context.globalCompositeOperation = "destination-out";
    //         context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    //         context.restore();
    //       })();
    // }

    // const drawimage = async (
    //     webcam: HTMLVideoElement,
    //     context: CanvasRenderingContext2D,
    //     canvas: HTMLCanvasElement
    //   ) => {
    //     // create tempCanvas
    //     const tempCanvas = document.createElement("canvas");
    //     tempCanvas.width = webcam.videoWidth;
    //     tempCanvas.height = webcam.videoHeight;
    //     const tempCtx = tempCanvas.getContext("2d");
    //     const segmentation = await bodypixnet.segmentPerson(webcam);


    //     const mask = bodyPix.toMask(segmentation);
    //     (async function drawMask() {
    //       requestAnimationFrame(drawMask);
    //       // draw mask on tempCanvas
    //       const segmentation = await bodypixnet.segmentPerson(webcam);
    //       const mask = bodyPix.toMask(segmentation);
    //       tempCtx.putImageData(mask, 0, 0);
    //       // draw original image
    //       context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
    //       // use destination-out, then only masked area will be removed
    //       context.save();
    //       context.globalCompositeOperation = "destination-out";
    //       context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    //       context.restore();
    //     })();
    //   };
  
    const clickHandler = async (backImgName) => {
      const webcam = webcamRef.current.video;
      const canvas = canvasRef.current;
      // 켄바스, 웹캠, 비디오 사이즈를 같게 한다
      console.log(webcam.width)
      console.log(canvas.width)
      console.log(webcam.videoWidth)
      console.log(webcam.videoHeight)
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

      const videoConstraints = {
        // width: "1000px",
        // height: "720px",
        optional:[
            {maxWidth:1000}
        ],
        facingMode: "user"
      };
      
  return (
    <M.Wrapper>
      <M.CamWrapper>
        <Webcam
          ref={webcamRef}
          audio={false}
          width={640}
          height={480}
          screenshotFormat="image/jpeg"
          className="webcam"
        //   videoConstraints={videoConstraints}
        />
        <canvas ref={canvasRef} className="canvas" />
      </M.CamWrapper>
      <M.ButtonWrapper>
        <M.Header>대소고 인생네컷</M.Header>
        <M.Button onClick={() => clickHandler(schoolBackImg)}>학교 운동장</M.Button>
        <M.TakeButton onClick={()=> snapshot()}>사진 찍기</M.TakeButton>
        {
            image.map((e,idx) => (
                <img src={e} key={idx} />
            ))
        }
      </M.ButtonWrapper>
    </M.Wrapper>
  );
};

export default Main;
