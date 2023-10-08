import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Brag from "../components/Brag";
import Footer from "../components/Footer";
import { Link } from "gatsby"

const Contact = styled.div`

`;

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
        <Resume/>
      </ComponentsWrapper>
      <Footer/>
    </Layout>
  )
}

export default Home;