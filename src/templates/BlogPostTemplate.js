import React from "react";
import Wysiwyg from "../components/Wysiwyg";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Seo from "../components/seo";
import styled from "@emotion/styled";


const ComponentsWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 32px;
  align-items: center;
`;

const BlogPostTemplate = ({location, pageContext, pageResources, params, path, serverData, uri, ...rest}) => {
    const postContent = pageContext.postContent;

    console.log(postContent);

    return (
      <>
        <Layout>
          <Header/>
          <Hero subtitle="This is what I have accomplished so far"/>
          <ComponentsWrapper>
          <h1>Blog Post</h1>
            {postContent.map ((post, index) => (
              <div key={index}>
                  <Wysiwyg html={post.prismic_wysiwyg.html}/>
              </div>
            ))}
          </ComponentsWrapper>
          <Footer/>
        </Layout>
      </>
    )
}

export function Head() {
  return (
    <Seo/>
  )
}

export default BlogPostTemplate;