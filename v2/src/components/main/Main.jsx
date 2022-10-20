import React, { createContext, useEffect, useRef, useState } from 'react';
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
    // 배경 이밎
    const [background,setBackground] = useState()

    const [bodypixnet, setBodypixnet] = useState(); // bodyPixnet


    useEffect(() => {
        console.log(image);
    },[image])

    

    return (
        <M.Wrapper>
            <M.CamWrapper>
                <WebCamArea
                    background={background}
                    setBackground={setBackground}
                    webcamRef={webcamRef}
                    canvasRef={canvasRef}
                    bodypixnet={bodypixnet}
                    setBodypixnet={setBodypixnet}
                />
            </M.CamWrapper>
            <M.ButtonWrapper>
                <ButtonArea
                    image={image}
                    setImage={setImage}
                    background={background}
                    setBackground={setBackground}
                    canvasRef={canvasRef}
                    webcamRef={webcamRef}
                    bodypixnet={bodypixnet}
                    setBodypixnet={setBodypixnet}
                />
            </M.ButtonWrapper>
        </M.Wrapper>
    );
};

export default Main;