import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    /* background-color:powderblue; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    .canvas{
        position:absolute;
        width:70%;
        aspect-ratio:16/9;
    }
    .webcam{
        /* visibility:hidden; */
    }
`