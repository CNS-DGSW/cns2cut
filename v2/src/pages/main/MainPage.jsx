import React from 'react';
import styled from 'styled-components';
import Main from '../../components/main/Main';

const MainWrapper = styled.div`
    width:100%;
    height:100vh;
    /* background-color:black; */
`

const MainPage = () => {
    return (
        <MainWrapper>
           <Main/>
        </MainWrapper>
    );
};

export default MainPage;