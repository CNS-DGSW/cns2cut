import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const ResultWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ResultContent = styled.div`
  width: 450px;
  height: 700px;
  position: absolute;
  background-color: black;
  // print했을 때 left,top을 설정해줌으로써 잘 되도록 한다
  @media print {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    left: 0px;
    top: 0px;
  }
`;

export const Background = styled.img`
  position: absolute;
  /* left:0px;
    top:0px; */
  width: 100%;
  height: 100%;
`;

// -------

export const ButtonWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const BasicBackWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: powderblue;
`;
export const ImgBackWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: tomato;
`;
