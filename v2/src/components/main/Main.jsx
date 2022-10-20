import React, { createContext, useRef, useState } from 'react';
import ButtonArea from './buttons/ButtonArea';
import * as M from "./Main.style"
import WebCamArea from "./webcam/WebCamArea"

const Main = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);


    // 끝인지
    const [isFin,setIsFin] = useState(false);
    
    // 이미지
    const [image,setImage] = useState([]);


    return (
        <M.Wrapper>
            <M.CamWrapper>
                <WebCamArea
                    webcamRef={webcamRef}
                />
            </M.CamWrapper>
            <M.ButtonWrapper>
                <ButtonArea
                    canvasRef={canvasRef}
                />
            </M.ButtonWrapper>
        </M.Wrapper>
    );
};

export default Main;