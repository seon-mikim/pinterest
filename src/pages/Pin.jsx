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
    <Container
        className="PinWrapper"
        justify_content="initial"
        align_items="start"
        margin="80px auto"
        width="50%"
        border_radius="32px"
        box_shadow="0 1px 20px 0 rgb(0 0 0 / 10%)"
    >
        <PinImage/>
        <ButtonBox/>
        <Desc/>
    </Container>
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