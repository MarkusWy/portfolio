import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Seo from "../components/seo";
import styled from "@emotion/styled";
import { Link } from "gatsby"
import Layout from "../components/layout";

const PostTitle = styled.div`
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
  text-wrap: pretty;
  padding: 20px;
`;

const PostLink = styled(Link)`
    position: relative;
    display: block;
    width: 100%;
    margin: auto;
    padding: 20px 0;
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

const PostListingWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    list-style-type: none;
    padding: 0;


    // max width on desktop
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 32px;
        border-left: dotted blue;
        border-right: dotted blue;
        max-width: 1200px;
    }


`;

const PostListingOuterWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
`;

const Tag = styled.label`
    background-color: #0073ec;
    color: white;
    margin: 32px;
    padding: 8px;
    text-style: bold;

    border-radius: 4px;
`;
    
const ListItem = styled.li`
    list-style-type: none;

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
`

const BlogPostTemplate = (props) => {

    return (
        <Layout>
            <Header/>
            <Hero subtitle="This is where I write 'n stuff :)"/>
            <PostListingOuterWrapper>
                <PostListingWrapper>
                    { props.pageContext.posts.map( (post, index) =>
                        <ListItem key={post.title}>
                            <PostLink to={post.path}>
                                <PostTitle>{post.title}</PostTitle>
                                <ImageWrapper>
                                    <picture>
                                        {post.image.sources.map( (source, index) =>
                                            <source
                                                srcSet={source.srcSet}
                                                sizes={
                                                    "(max-width: 768px) 80vw,  200px"
                                                }/>
                                        )}
                                        <PostImage loading={index > 1 ? "lazy" : null} alt={post.title} srcSet={post.image.fallback.srcSet} src={post.image.fallback.src} />
                                    </picture>
                                </ImageWrapper>
                                <Tag>{post.tag || 'Article'}</Tag>
                            </PostLink>
                        </ListItem> 
                    )}
                </PostListingWrapper>
            </PostListingOuterWrapper>
            <Footer/>
      </Layout>
    )
}

export function Head() {
  return (
    <Seo/>
  )
}

export default BlogPostTemplate;