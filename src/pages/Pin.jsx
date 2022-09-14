import React from "react";
import styled from "styled-components";
import Container from "../components/pinpage/PinContainer";
import PinImage from "../components/pinpage/PinImage";
import ButtonBox from "../components/pinpage/PinButtonBox";
import Desc from "../components/pinpage/PinDesc"
import HeaderUser from "../components/HeaderUser"

const Pin = () => {

    return (
    <>
    <HeaderUser/>
    <Background>
    <MainWrapper>
   
        <PinImage/>
        <ButtonBox/>
        <Desc/>

    </MainWrapper>
    </Background>
    </>
    )


};

export default Pin;

const Background = styled.div`
    position: relative;
    height: 100vh;
    background-color: #efefef;
`;

const MainWrapper = styled.div`
    width: 880px;
    padding-top: 20px;
    position: absolute;
    background-color: #fff;
    top: 10px;
    left: 50%;
    height: auto;
    transform: translate(-50%, 10%);
    border-radius: 16px;
    margin-bottom: 30px;
`;