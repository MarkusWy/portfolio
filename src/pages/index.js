import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Link } from "gatsby"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 16px;
  background: green;
  content: "";
  width: 100&;
  height: 100%;
`;

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const Home = () => {
  return (
    <Layout>
      <Header/>
      <Hero/>
      <Row id="resume">
        <Column>{loremIpsum}</Column>
        <Column>{loremIpsum}</Column>
        <Column>{loremIpsum}</Column>
      </Row>
    </Layout>
  )
}

export default Home;