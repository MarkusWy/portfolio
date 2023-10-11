import React from "react";

const Wysiwyg = ({html}) => {

    let test = 0;

    if (typeof window !== "undefined") {
        test = 1;
    }

    return (
        <>
            <div>{test}</div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}

export default Wysiwyg;