import React from "react";
import Wysiwyg from "../components/Wysiwyg";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Seo from "../components/seo";
import styled from "@emotion/styled";
import { Link } from "gatsby"

const BlogPostWrapper = styled.div`
  padding: 0 32px;
  align-items: center;

  display: flex;
  align-items: flex-start;
  flex-direction: row;

  //padding top on desktop
  @media (max-width: 768px) {
    padding-top: 16px;
  }

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

  //desktop styling
  @media (min-width: 768px) {
    top: 32px;
    position: sticky;
  }
`;

const MainImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    height: 400px;
    border-bottom: 5px #0073ec dotted;
    padding-bottom: 16px;
  }
`;

const MainImage = styled.picture`
  object-fit: contain;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
  }
`;


const StyledLink = styled(Link)`
  color: #0073ec;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
`;

const BlogPostTemplate = ({location, pageContext, pageResources, params, path, serverData, uri, ...rest}) => {
    const postContent = pageContext.postContent;
    const mainImage = pageContext.mainImage;
    const {gatsbyImageData} = mainImage;

    return (
      <>
        <Layout>
          <Header/>
          <Hero subtitle={pageContext.title}/>
          <MainImageWrapper>
            <MainImage>
              <img alt="" srcSet={gatsbyImageData.images.fallback.srcSet} sizes={gatsbyImageData.images.fallback.sizes}/>
            </MainImage>
          </MainImageWrapper>
          <BlogPostWrapper>
            <IntroWrapper>
              <h2>{pageContext.title}</h2>
              <ol>
                {postContent.map ((post, index) => (
                  <li key={index}>
                    <StyledLink to={`#${post.section_id.replace(' ', '-').toLowerCase()}`}>{post.section_id}</StyledLink>
                  </li>
                ))}
              </ol>
            </IntroWrapper>
            <PostContentWrapper>
              {postContent.map ((post, index) => (
                <Wysiwyg key={index} section_id={post.section_id} html={post.prismic_wysiwyg.html}/>
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