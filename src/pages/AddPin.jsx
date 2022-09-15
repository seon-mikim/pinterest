import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Container from "../components/pinpage/PinContainer";
import Button from "../elem/Button"
import HeaderUser from "../components/HeaderUser"
import { __AddPin } from "../redux/modules/Pin"


const AddPin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [uploadedfile, setUploadedfile] = useState(""); //업로드한 파일

    // const PinData = {
    //     title: title,
    //     content: content,
    //     image: image,
    //     category: category,
    // }

    const SummitSave = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", uploadedfile);
        formData.append("category", category);

        if (title ==="" || image ==="" || content ==="" | category ==="" ){
            window.alert("항목을 모두 입력하세요.");
            return;
        }
        dispatch(__AddPin(formData));
        // navigate("/", {replace: true});
        window.location.replace("/")
    };

    const titleChangeHandler = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    const contentChangeHandler = (e) => {
        const content = e.target.value;
        setContent(content);
    };

    const fileChangeHandler = (e) => {
        const files = e.target.files;
        setUploadedfile(files[0]);
    };

    const categoryChangeHandler = (e) => {
        const category = e.target.value;
        setCategory(category);
    };

     //업로드한 사진 미리 보여주는 함수
     const handleChangeFile = (event) => {
        event.preventDefault();
        const reader = new FileReader();
        reader.onloadend = () => {
            // 2. 읽기가 완료되면 아래코드가 실행
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
            }
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장
            setImage(event.target.files[0]); // 파일 상태 업데이트
        }
    };


    return (
        <>
            <HeaderUser />
            <Background>
                <MainWrapper>
                    <ButtonWrapper>
                        <Button
                            className="addBtn"
                            width="64px"
                            height="40px"
                            font_size="16px"
                            font_weight="700"
                            color="white"
                            background_color="red"
                            border_radius="7px"
                            border="none"
                            _onClick={SummitSave}
                        >Save</Button>
                    </ButtonWrapper>
                    <Bottom>
                        <LeftSide>
                            <UploaderWrapper
                                name="uploadedImg"
                                id="uploadedImg"
                                type="file"
                                accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"
                                onChange={handleChangeFile}
                            >
                                {imgBase64 ? (
                                    <Preview>
                                        <img
                                            src={imgBase64}
                                            alt="imagepreview"
                                            // onClick={setImgBase64(null)}
                                        />
                                    </Preview>
                                ) : null}
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
                                        onChange={fileChangeHandler}
                                    ></Uploader>
                                </InsideUploader>
                            </UploaderWrapper>
                        </LeftSide>
                        <RightSide>
                            <PinTitle
                                type="text"
                                placeholder="Add your title"
                                maxlength="50"
                                rows="1"
                                onChange={titleChangeHandler}
                            // onKeyDown={(e) => Resizing(e.target)}
                            // onChange={titleChangeHandler}
                            />
                            <PinDescription
                                type="text"
                                placeholder="Tell everyone what your Pin is about"
                                maxlength="500"
                                rows="1"
                                onChange={contentChangeHandler}
                            // onKeyDown={(e) => Resizing(e.target)}
                            // onChange={desChangeHandler}
                            />
                             <PinCategory
                                type="text"
                                placeholder="Tell everyone what your Pin is about"
                                maxlength="500"
                                rows="1"
                                onChange={categoryChangeHandler}
                            // onKeyDown={(e) => Resizing(e.target)}
                            // onChange={desChangeHandler}
                            />
                        </RightSide>
                    </Bottom>
                </MainWrapper>
            </Background>
        </>
    )

};

export default AddPin;


const Background = styled.div`
    position: relative;
    height: 100vh;
    background-color: #efefef;
`;

const MainWrapper = styled.div`
    width: 800px;
    padding-top: 40px;
    position: absolute;
    background-color: #fff;
    top: 10px;
    left: 50%;
    height: auto;
    transform: translate(-50%, 10%);
    border-radius: 16px;
    margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0 30px;
`;


const Bottom = styled.div`
    display: flex;
`;

const UploaderWrapper = styled.div`
    background-color: rgb(239, 239, 239);
    box-shadow: none;
    width: 100%;
    border-radius: 8px;
    padding: 15px;
    height: 510px;
    position: relative;
`;

const Preview = styled.div`
    top: 0;
    left: 0;
    z-index: 700;
    position: absolute;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`;

const LeftSide = styled.div`
    margin: 10px 30px 30px;
    width: 100%;
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
    left: 46.9%;
    /* transition: (-50%, -40%); */
    display: block;
    svg {
        margin: 0;
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

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    margin: 0 30px 30px 20px;
    position: relative;
`;


const PinTitle = styled.input`
    border: none;
    border-bottom: 1px solid rgba(142, 142, 142, 0.5);
    padding: 10px;
    margin-top: 40px;
    font-size: 34px;
    font-weight: 700;
    color: #333;
    caret-color: #333;
    overflow: auto;
    outline: 0px none transparent;
    resize: none;
    &:focus {
        border-bottom: 1.5px solid rgb(0, 116, 232);
    }
`;

const PinDescription = styled.input`
    width: 320px;       
    border: none;
    border-bottom: 1px solid rgba(142, 142, 142, 0.5);
    padding: 10px;
    margin-top: 40px;
    font-size: 15px;
    font-weight: 700;
    color: #333;
    caret-color: #333;
    overflow: auto;
    outline: 0px none transparent;
    resize: none;
    &:focus {
        border-bottom: 1.5px solid rgb(0, 116, 232);
    }
`;

const PinCategory = styled.input`
    width: 320px;       
    border: none;
    border-bottom: 1px solid rgba(142, 142, 142, 0.5);
    padding: 10px;
    margin-top: 40px;
    font-size: 15px;
    font-weight: 700;
    color: #333;
    caret-color: #333;
    overflow: auto;
    outline: 0px none transparent;
    resize: none;
    &:focus {
        border-bottom: 1.5px solid rgb(0, 116, 232);
    }
`;