import React from "react";
import Container from "../components/pinpage/PinContainer";
import PinImage from "../components/pinpage/PinImage";
import ButtonBox from "../components/pinpage/PinButtonBox";
import Desc from "../components/pinpage/PinDesc"

const Pin = () => {

    return (
    <>
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
    </>
    )


};

export default Pin;