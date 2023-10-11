import React from "react";
import Wysiwyg from "../components/Wysiwyg";

const BlogPostTemplate = ({location, pageContext, pageResources, params, path, serverData, uri, ...rest}) => {
    console.log(pageContext);

    const postContent = pageContext.postContent;

    console.log(postContent);

    return (
      <>
        {postContent.map ((post, index) => (
            <div key={index}>
                <Wysiwyg html={post.prismic_wysiwyg.hmtl}/>
            </div>
        ))}
        <h1>Blog Post</h1>
      </>
    )
}

export default BlogPostTemplate;