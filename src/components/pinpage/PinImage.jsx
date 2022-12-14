import React from "react";
import Flex from "../../elem/Flex";
import Image from "../../elem/Image"

const PinImage = (props) => {
    const { className, imgURL } = props;
    return (
        <Flex className={className} width="50%" padding="20px 20px">
            <Image
                width="100%"
                border="none"
                border_radius="32px 32px 32px 32px"
                // src={imgURL.urls.regular}
                src={imgURL}
            />
        </Flex>
    );
};

export default PinImage;