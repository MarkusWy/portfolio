import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: black;
`;

export default function Home() {

  return (
    <Wrapper>
      <StaticImage src="https://placekitten.com/1000/600" alt="A kitten" />
      <Title>Markus Wyrin</Title>
    </Wrapper>
  )
}
