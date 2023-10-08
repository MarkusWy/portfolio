import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import { Link } from "gatsby"

const BragTitle = styled.div`
  min-height: 100px;
  font-size: 100px;
  margin-bottom: 16px;
`;

const BragWrapper = styled.div`
  min-height: 300px;
  padding:32px;
`;

const BragSubtitle = styled.div`
  min-height: 100px;
  font-size: 25px;
  margin-top: 16px;
`;

const LinkButton = styled(Link)`
  background-color: #0081ff;
  color: white;
  padding: 15px 32px;
  display: block;
  width: fit-content;
  border-radius: 10px;

  &::hover {
    background-color: white;
    color: #0081ff;
  }
`;

const LinkButtonWrapper = styled.div`
  display: flex;
`;

const LinkDescription = styled.div`
  margin: auto 16px;
`;

const BragGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const Home = () => {
  return (
    <Layout>
      <title>Markus Wyrin</title>
      <Header/>
      <Hero/>
      <BragGrid>
        <BragWrapper>
          <BragTitle>🚀Optimized</BragTitle>
          <LinkButtonWrapper>
            <LinkButton to="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmarkus.wyrin.se%2F">PageSpeed Insights</LinkButton>
            <LinkDescription>Feel free to audit this site!</LinkDescription>
          </LinkButtonWrapper>
          <BragSubtitle>I pride myself in making well optimized, fast applications.</BragSubtitle>
        </BragWrapper>

        <BragWrapper>
          <BragTitle>🚀Optimized</BragTitle>
          <LinkButtonWrapper>
            <LinkButton to="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmarkus.wyrin.se%2F">PageSpeed Insights</LinkButton>
            <LinkDescription>Feel free to audit this site!</LinkDescription>
          </LinkButtonWrapper>
          <BragSubtitle>I pride myself in making well optimized, fast applications.</BragSubtitle>
        </BragWrapper>

        <BragWrapper>
          <BragTitle>🚀Optimized</BragTitle>
          <LinkButtonWrapper>
            <LinkButton to="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmarkus.wyrin.se%2F">PageSpeed Insights</LinkButton>
            <LinkDescription>Feel free to audit this site!</LinkDescription>
          </LinkButtonWrapper>
          <BragSubtitle>I pride myself in making well optimized, fast applications.</BragSubtitle>
        </BragWrapper>

        <BragWrapper>
          <BragTitle>🚀Optimized</BragTitle>
          <LinkButtonWrapper>
            <LinkButton to="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmarkus.wyrin.se%2F">PageSpeed Insights</LinkButton>
            <LinkDescription>Feel free to audit this site!</LinkDescription>
          </LinkButtonWrapper>
          <BragSubtitle>I pride myself in making well optimized, fast applications.</BragSubtitle>
        </BragWrapper>
      </BragGrid>
      <Resume/>
    </Layout>
  )
}

export default Home;