import React from "react";
import Header from "../components/Header";
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

const PostTitle = styled.h5`
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
`;

const PostLink = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    margin: auto;

    rotate: -5deg;
    float: right;

    &:not(:nth-of-type(2n)) {
        @media (max-width: 768px) {
            rotate: 5deg;
        }
        span {
            float: left;
        }
    }
`;

    

const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 15px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
`;

const PostListingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;


    // max width on desktop
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 32px;

        max-width: 1000px;
    }

    border-left: dotted blue;
    border-right: dotted blue;
`;

const PostListingOuterWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
`;

const Tag = styled.span`
    background-color: #0073ec;
    color: white;
    margin: 32px;
    padding: 8px;
    text-style: bold;

    border-radius: 4px;
`;
    
    

const BlogPostTemplate = (props) => {
    console.log(props);

    return (
        <>
            <Header/>
            <PostListingOuterWrapper>
                <PostListingWrapper>
                    { props.pageContext.posts.map( (post, index) => 
                        <PostLink to={post.path}>
                            <PostTitle>{post.title}</PostTitle>
                            <ImageWrapper>
                                <picture>
                                    {post.image.sources.map( (source, index) =>
                                        <source srcSet={source.srcSet} sizes={source.sizes}/>
                                    )}
                                    <PostImage srcSet={post.image.fallback.srcSet} src={post.image.fallback.src} />
                                </picture>
                            </ImageWrapper>
                            <Tag>Project</Tag>
                        </PostLink>
                    )};
                </PostListingWrapper>
            </PostListingOuterWrapper>
            <Footer/>
      </>
    )
}

export function Head() {
  return (
    <Seo/>
  )
}

export default BlogPostTemplate;