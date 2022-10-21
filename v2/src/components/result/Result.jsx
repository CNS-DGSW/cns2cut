import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { imageState } from '../../global/image';
import * as R from "./Result.style"


const Result = () => {
    // 기본색은 검정
    const [resultBackColor,setResultBackColor] = useState("black")
    const [resultBackImg,setResultBackImg] = useState()
    const [image,setImage] = useRecoilState(imageState)

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

    return (
        <R.Wrapper>
            <R.ResultWrapper>
                <R.ResultContent>

                </R.ResultContent>
                {resultBackImg}
            </R.ResultWrapper>
            <R.ButtonWrapper>
                <R.BasicBackWrapper></R.BasicBackWrapper>
                <R.ImgBackWrapper></R.ImgBackWrapper>
            </R.ButtonWrapper>
        </R.Wrapper>
    );
};


export default Result;