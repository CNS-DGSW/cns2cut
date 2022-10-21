import React from 'react';
import * as S from "./SmpleCom.style"

const SampleCom = ({
    source,
    clickHandler
}) => {
    return (
        <S.Wrapper onClick={clickHandler}>
            <S.ImgWrapper>
                <div/><div/>
                <img src={source} />
            </S.ImgWrapper>
            <S.SecondImg>
                <div/><div/>
                <img src={source} />
            </S.SecondImg>
        </S.Wrapper>
    );
};

export default SampleCom;