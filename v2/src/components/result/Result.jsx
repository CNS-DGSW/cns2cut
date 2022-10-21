import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { imageState } from "../../global/image";
import * as R from "./Result.style";
import logo from "../../assets/logo.png";
import SampleCom from "./sampleCom/SampleCom";

import cloud from "../../assets/backImg/cloud.jpg";
import galaxy from "../../assets/backImg/galaxy.jpg";

const Result = () => {
  // 기본색은 검정
  const [resultBackColor, setResultBackColor] = useState("black");
  const [resultBackImg, setResultBackImg] = useState();
  const [comment, setCommnet] = useState("2022년 10월 22일 exco에서");
  //   const [commentOption,setCommentOption] = useState({
  //     color:"white",
  //     bold:false,
  //     ital:false,
  //   })
  const [commentColor, setCommentColor] = useState("white");
  const [commentBold, setCommentBold] = useState(false);
  const [commentItal, setCommentItal] = useState(false);

  const [image, setImage] = useRecoilState(imageState);

  const colors = [
    "black",
    "#FFFAFA", // 흰색
    "#f7e600",
    "#50bcdf",
  ];

  /**배경을 단색으로 했을 때 */
  function colorHandler(color) {
    // 이미지 없애기
    setResultBackImg("");
    setResultBackColor(color);
  }
  /**배경을 사진으로 했을 때 */
  function imageHandler(imgSrc) {
    // 검정색 초기화
    setResultBackColor("black");
    setResultBackImg(imgSrc);
  }

  const navigater = useNavigate();
  function exitHandler() {
    if (window.confirm("편집을 끝내고 나가실건가요?") === true) {
      setImage([]); // 이미지 초기화
      navigater("/");
    }
  }

  useEffect(() => {
    console.log(resultBackImg);
  }, [resultBackImg]);

  return (
    <R.Wrapper>
      <R.ResultWrapper>
        <R.ResultContent backColor={resultBackColor}>
          {image.map((i, idx) => (
            <R.UserImg key={idx} src={i} />
          ))}
          {resultBackImg && <R.ResultImg src={resultBackImg} />}
          <R.ResultLogo
            color={commentColor}
            bold={commentBold}
            ital={commentItal}
          >
            <p>{comment}</p>
            <img src={logo} />
          </R.ResultLogo>
        </R.ResultContent>
      </R.ResultWrapper>
      <R.ButtonWrapper>
        <R.BasicBackWrapper>
          <h2>색 테마(커스텀 가능)</h2>
          <R.BasicBacks>
            {colors.map((i) => (
              <R.BasicBack
                key={i}
                backColor={i}
                onClick={() => colorHandler(i)}
              />
            ))}
            <input
              type="color"
              value={resultBackColor}
              placeholder="선택"
              onChange={(e) => colorHandler(e.target.value)}
            />
          </R.BasicBacks>
        </R.BasicBackWrapper>
        <R.ImgBackWrapper>
          <h2>또는 이미지 선택</h2>
          <R.ImgBack>
            {/* <div></div>
            <div></div> */}
            <SampleCom
              clickHandler={() => setResultBackImg(cloud)}
              source={cloud}
            />
            <SampleCom
              clickHandler={() => setResultBackImg(galaxy)}
              source={galaxy}
            />
          </R.ImgBack>
        </R.ImgBackWrapper>
        <R.CommentWrapper>
          <h2>문구 작성(비우기 가능)</h2>
          <input
            type="text"
            value={comment}
            onChange={(e) => setCommnet(e.target.value)}
          />
        </R.CommentWrapper>
        <R.CommentOptionWrapper>
          <h2>문구 옵션</h2>
          <R.CommentOptions>
            <R.CommentOptionColor
              selected={commentColor === "black"}
              att="black"
              onClick={() => setCommentColor("black")}
            >
              검정색
            </R.CommentOptionColor>
            <R.CommentOptionColor
              att="white"
              selected={commentColor === "white"}
              onClick={() => setCommentColor("white")}
            >
              흰색
            </R.CommentOptionColor>
            <R.CommentOptionSplit>|</R.CommentOptionSplit>
            <R.CommentOptionBold
              selected={commentBold}
              onClick={() => setCommentBold((prev) => !prev)}
            >
              굵게
            </R.CommentOptionBold>
            <R.CommentOptionSplit>|</R.CommentOptionSplit>
            <R.CommentOptionItal
              selected={commentItal}
              onClick={() => setCommentItal((prev) => !prev)}
            >
              이텔릭
            </R.CommentOptionItal>
          </R.CommentOptions>
        </R.CommentOptionWrapper>
      </R.ButtonWrapper>
      <R.ExitWrapper>
        <R.Exit onClick={exitHandler}>나가기</R.Exit>
      </R.ExitWrapper>
    </R.Wrapper>
  );
};

export default Result;
