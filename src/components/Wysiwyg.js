import React from "react";
import styled from "@emotion/styled";

const HtmlWrapper = styled.div`
    width: 100%;

    img {
        max-height: 1500px;
        max-width: 1500px;

        width: 100%;
        height: 100%;
        aspect-ratio: 1;

        //50% width and height on desktop
        @media (max-width: 768px) {
            width: 50%;
            height: 50%;
        }

    }
    .block-img {
        width: 50%;
        // width 100% on mobile
        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
        }
    }
`

const Wysiwyg = ({html, section_id}) => {

    return (
        <>
            <HtmlWrapper id={section_id.replace(' ', '-').toLowerCase()} dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}

export default Wysiwyg;