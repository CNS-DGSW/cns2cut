import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const ResultWrapper = styled.div`
  width: 55%;
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
  /* background-color: black; */
  background-color: ${(props) => props.backColor};
  // print했을 때 left,top을 설정해줌으로써 잘 되도록 한다
  @media print {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    left: 0px;
    top: 0px;
  }

  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:20px;
  
  gap:15px;
  >img{
    width:85%;
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
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    margin: 10px 0px;
  }
`;
export const BasicBackWrapper = styled.div`
  width: 80%;

`;

export const BasicBacks = styled.div`
  display: flex;
`;
export const BasicBack = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.backColor};
  border-radius: 10px;
  border: 1px solid #a0a0a0;
  cursor: pointer;
  margin: 10px 10px 10px 0px;
`;

export const SelectBackWrapper = styled.div`
  width: 80%;
  > input {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #a0a0a0;
    margin: 10px 10px 10px 0px;
  }
`;

export const ImgBackWrapper = styled.div`
  /* width: 300px;
  height: 300px; */
`;


export const ExitWrapper = styled.div`
    width:15%;
    display:Flex;
`
export const Exit = styled.h3`
  background-color: tomato;
  border-radius: 15px;
  margin-top:100px;
  color: white;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: Center;
  cursor: pointer;
`;
