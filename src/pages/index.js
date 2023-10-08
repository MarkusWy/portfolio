import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Brag from "../components/Brag";
import { Link } from "gatsby"

const BragTitle = styled.div`
  min-height: 100px;
  font-size: 64px;
  margin-bottom: 16px;
`;

const BragWrapper = styled.div`
  min-height: 300px;
  background-color: ${props => props.background || 'white'};
  border-radius: 20px;
  width: 100%;

  @media (min-width: 768px) {
    &:nth-child(3n+1) {
      background: #f1f9ff;
    }
  }

  @media (max-width: 768px) {
    // select every other element
    &:not(:nth-child(2n)) {
      background: #f1f9ff;
    }
  }
`;

const BragInnerWrapper = styled.div`
  padding: 32px;
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
  grid-gap: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Home = () => {
  return (
    <Layout>
      <title>Markus Wyrin</title>
      <Header/>
      <Hero/>
      <Brag/>
      <Resume/>
    </Layout>
  )
}

export default Home;