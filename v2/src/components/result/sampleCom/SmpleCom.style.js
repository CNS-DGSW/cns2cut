import styled from "styled-components";

export const Wrapper = styled.div`
    width: 200px;
    height: 180px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    cursor:pointer;
` 
export const ImgWrapper = styled.div`
    width:100px;
    height:130px;
    display:Flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    position:relative;
    >div{
        width:80%;
        height:30%;
        background-color:white;
        z-index:1;
    }
    >img{
        position:absolute;
        width:100%;
        height:100%;
    }
`

export const SecondImg = styled(ImgWrapper)`
    width:90px;
    height: 100px;
    z-index:-1;
    transform:rotate(-45deg);
    transform-origin:30% 110%;
    position:absolute;
`