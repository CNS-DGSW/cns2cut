import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
`
export const CamWrapper = styled.div`
    height:100%;
    width:70%;
`
export const ButtonWrapper = styled.div`
    height:100%;
    width:30%;
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