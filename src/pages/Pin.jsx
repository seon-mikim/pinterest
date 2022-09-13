import React from "react";
import Container from "../components/pinpage/PinContainer";
import PinImage from "../components/pinpage/PinImage";
import ButtonBox from "../components/pinpage/PinButtonBox";
import Desc from "../components/pinpage/PinDesc"

const Pin = () => {

    return (
    <>
    <Container>
        <PinImage/>
        <ButtonBox/>
        <Desc/>
    </Container>
    </>
    )


};

export default Pin;