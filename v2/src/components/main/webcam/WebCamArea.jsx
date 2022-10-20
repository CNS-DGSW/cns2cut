import React from 'react';
import * as W from "./WebCamArea.style"
import Webcam from "react-webcam"

const WebCamArea = ({
    webcamRef
}) => {

    const videoConstraints = {
        // width: "100%",
        // height:"100%",
        width: 1280,
        height: 720,
        facingMode: "user",
      };
      
    return (
        <W.Wrapper>
          <Webcam
            ref={webcamRef}
            audio={false}
            // width={1280}
            // height={720}
            // height="100%"
            width="100%"
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="webcam"
          />
        </W.Wrapper>
    );
};

export default WebCamArea;