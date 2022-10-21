import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { imageState } from '../../global/image';
import * as R from "./Result.style"


const Result = () => {
    // 기본색은 검정
    const [resultBackColor,setResultBackColor] = useState("black")
    const [resultBackImg,setResultBackImg] = useState()
    const [image,setImage] = useRecoilState(imageState)

    const colors = [
        "black",
        "#FFFAFA", // 흰색
        "#f7e600",
        "#50bcdf",
    ]

    /**배경을 단색으로 했을 때 */
    function colorHandler(color){
        // 이미지 없애기
        setResultBackImg("");
        setResultBackColor(color)
    }
    /**배경을 사진으로 했을 때 */
    function imageHandler(imgSrc){
        // 검정색 초기화
        setResultBackColor("black");
        setResultBackImg(imgSrc)
    }
    

    const navigater = useNavigate();
    function exitHandler(){
        if (window.confirm("편집을 끝내고 나가실건가요?") === true){
            setImage([]) // 이미지 초기화
            navigater("/")
        }
    }

    return (
        <R.Wrapper>
            <R.ResultWrapper>
                <R.ResultContent backColor={resultBackColor}>
                    {
                        image.map((i,idx) => (
                            <img key={idx} src={i} />
                        ))
                    }
                </R.ResultContent>
                {resultBackImg}
            </R.ResultWrapper>
            <R.ButtonWrapper>
                <R.BasicBackWrapper>
                    <h2>기본 색 테마</h2>
                    <R.BasicBacks>
                        {colors.map((i) => (<R.BasicBack 
                        key={i} 
                        backColor={i}
                        onClick={() => colorHandler(i)}
                        />))}
                    </R.BasicBacks>
                </R.BasicBackWrapper>
                <R.SelectBackWrapper>
                        <h2>색 선택</h2>
                        <input type="color" value={resultBackColor} placeholder="선택" onChange={(e) => colorHandler(e.target.value)} />
                </R.SelectBackWrapper>
                <R.ImgBackWrapper>
                        <h2>이미지 선택</h2>
                        <R.ImgBack>
                        <div></div>
                        <div></div>
                        </R.ImgBack>
                </R.ImgBackWrapper>
            </R.ButtonWrapper>
            <R.ExitWrapper>
                <R.Exit onClick={exitHandler}>나가기</R.Exit>
            </R.ExitWrapper>
        </R.Wrapper>
    );
};


export default Result;