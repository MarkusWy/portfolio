import React from "react";
import styled from "@emotion/styled";

const HtmlWrapper = styled.div`
    width: 100%;

    img {
        width: 100vw;
        height: 100vw;

        max-height: 1500px;
        max-width: 1500px;
    }
`

const Wysiwyg = ({html}) => {

    return (
        <>
            <HtmlWrapper dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}

export default Wysiwyg;