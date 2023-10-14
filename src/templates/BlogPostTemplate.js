import React from "react";
import Wysiwyg from "../components/Wysiwyg";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Seo from "../components/seo";
import styled from "@emotion/styled";


const BlogPostWrapper = styled.div`
  padding: 0 32px;
  align-items: center;

  display: flex;
  align-items: flex-start;
  flex-direction: row;

  //flex-direction row on mobile
  @media (max-width: 768px) {
    flex-direction: column;
  }
  max-width: 1000px;

  margin: auto;
`;

const PostContentWrapper = styled.div`
  display: block;
  border-left: 5px dotted #0073ec;
  padding-left: 32px;

  @media (max-width: 768px) {
    padding: 16px 0 0;
    border-left: none;
    border-top: 5px dotted #0073ec;
  }
`;

const IntroWrapper = styled.div`
  display: block;
  color: black;
  min-width: 20vw;
`;

const BlogPostTemplate = ({location, pageContext, pageResources, params, path, serverData, uri, ...rest}) => {
    const postContent = pageContext.postContent;

    console.log(pageContext.title);

    return (
      <>
        <Layout>
          <Header/>
          <Hero subtitle={pageContext.title}/>
          <BlogPostWrapper>
            <IntroWrapper>
              <h1>{pageContext.title}</h1>
              <h3>{pageContext.date}</h3>
            </IntroWrapper>
            <PostContentWrapper>
              {postContent.map ((post, index) => (
                <Wysiwyg index={index} html={post.prismic_wysiwyg.html}/>
              ))}
            </PostContentWrapper>
          </BlogPostWrapper>
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