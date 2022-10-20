import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    box-sizing:border-box;
    position:relative;
    background-color:black;

`
export const CamWrapper = styled.div`
    height:100%;
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    .webcam{border-radius:15px;}
    .canvas{position:absolute}
`
export const ButtonWrapper = styled.div`
    height:100%;
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
export const Header = styled.h1`
    color:white;
`

export const Button = styled.button`
      cursor: pointer;
  width: 200px;
  height: 50px;
  outline: none;
  border: 0px;
  border-radius: 15px;
  background-color: #0095f6;
  color: white;
`
export const TakeButton = styled(Button)`
  height: 100px;
`