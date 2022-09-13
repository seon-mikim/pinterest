import React from "react";
import Flex from "../../elem/Flex"

const Container = (props) => {

    const {
        className,
        flex_direction,
        justify_content,
        align_items,
        margin,
        width,
        border_radius,
        box_shadow,
        children,
    } = props;

    const styles = {
        flex_direction,
        justify_content,
        align_items,
        margin,
        width,
        border_radius,
        box_shadow,
    };
    
    return (
        <Flex className={className} {...styles}>
        {children}
        </Flex>
    )
};

export default Container; 



