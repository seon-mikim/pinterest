import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../components/pinpage/PinContainer";




const AddPin = () => {



    return (
        <>
        <Container
            className="PinAddWrapper"
            justify_content="initial"
            align_items="start"
            margin="80px auto"
            width="50%"
            border_radius="32px"
            box_shadow="0 1px 20px 0 rgb(0 0 0 / 10%)"
        >
            <UploaderWrapper
                name="uploadedImg"
                id="uploadedImg"
                type="file"
                accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
            >
                <InsideUploader>
                    <IconWrap>
                        <svg>
                         <path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path>
                        </svg>
                    </IconWrap>
                    <Advice>click to upload</Advice>
                    <Uploader
                        id="ImageUploader"
                        type="file"
                        accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                    ></Uploader>
                </InsideUploader>
            </UploaderWrapper>
        </Container>
        </>
    )

};

export default AddPin;

const UploaderWrapper = styled.div`
    background-color: rgb(239, 239, 239);
    box-shadow: none;
    width: 100%;
    border-radius: 8px;
    padding: 15px;
    height: 510px;
    position: relative;

`;

const InsideUploader = styled.div`
    position: relative;
    border: 2px dashed rgb(218, 218, 218);
    border-radius: 6px;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;

const IconWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 48%;
    /* transition: (-50%, -40%); */
    display: block;
    svg {
        color: #767676;
        width: 48px;
        height: 48px;

        path {
            fill: currentColor;
        }
    }
`;

const Uploader = styled.input`
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    font-size: 0px;
    height: 100%;
    cursor: pointer;
`;

const Advice = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    padding: auto 48px;
    position: absolute;
    top: 60%;

`