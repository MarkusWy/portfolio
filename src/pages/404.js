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

const Embarrasing = styled.div`
    font-size: 32px;
    font-color: #0081ff
    height: 500px;
    align-items: center;
`;


const ComingSoon = () => {
  return (
    <Layout>
      <Header/>
      <Hero/>
      <title>Coming soon</title>
      <Embarrasing>
        <p>
            This is embarrasing.<br/>
            The page you tried to access is not yet implemented.<br/>
            Here is Rick to keep you company.
        </p>
      </Embarrasing>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Pf2IDz-E5MUuetPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Footer/>
    </Layout>
  )
}

export default ComingSoon;