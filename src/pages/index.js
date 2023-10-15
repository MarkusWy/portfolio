import * as React from "react"
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Brag from "../components/Brag";
import Footer from "../components/Footer";
import Seo from "../components/seo";

const ComponentsWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 32px;
  align-items: center;
`;

const Home = () => {
  return (
    <Layout>
      <title>Markus Wyrin</title>
      <Header/>
      <Hero/>
      <ComponentsWrapper>
        <Brag/>
      </ComponentsWrapper>
      <Footer/>
    </Layout>
  )
}

export function Head() {
  return (
    <Seo/>
  )
}

export default Home;