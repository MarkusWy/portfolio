import * as React from "react"
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Seo from "../components/seo";

const Embarrasing = styled.div`
    font-size: 32px;
    font-color: #0073ec
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

export function Head() {
  return (
    <Seo/>
  )
}

export default ComingSoon;