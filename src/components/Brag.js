import * as React from "react"
import styled from "@emotion/styled";
import { Link } from "gatsby"

const BragTitle = styled.div`
  font-size: 64px;
  margin-bottom: 16px;

  //mobile overrides
  @media (max-width: 768px) {
    font-size: 32px;
  }
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
  font-size: 25px;
  margin-top: 16px;

  //smaller font size on mobile
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const LinkButton = styled(Link)`
  background-color: #0073ec;
  color: white !Important;
  padding: 15px 32px;
  display: block;
  width: fit-content;
  border-radius: 10px;

  &::hover {
    background-color: white;
    color: #0073ec;
  }
`;

const LinkButtonWrapper = styled.div`
  display: flex;

  //flex direction column on mobile
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LinkDescription = styled.div`
  margin: auto 16px;

  @media (max-width: 768px) {
    margin: 16px 0;
  }
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

const Brag = () => {
  return (
    <BragGrid>
        <BragWrapper>
            <BragInnerWrapper>
            <BragTitle>🚀Optimized</BragTitle>
            <LinkButtonWrapper>
                <LinkButton to="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmarkus.wyrin.se%2F">PageSpeed Insights</LinkButton>
                <LinkDescription>Feel free to audit this site!</LinkDescription>
            </LinkButtonWrapper>
            <BragSubtitle>I pride myself in making well optimized, fast applications.</BragSubtitle>
            </BragInnerWrapper>
        </BragWrapper>

        <BragWrapper>
            <BragInnerWrapper>
            <BragTitle>📱Mobile first</BragTitle>
            <LinkButtonWrapper>
                <LinkButton to="https://search.google.com/test/mobile-friendly?url=https%3A%2F%2Fmarkus.wyrin.se%2F">Mobile Friendly test</LinkButton>
                <LinkDescription>See for yourself!</LinkDescription>
            </LinkButtonWrapper>
            <BragSubtitle>All my webapps are optimized for different devices.</BragSubtitle>
            </BragInnerWrapper>
        </BragWrapper>

        <BragWrapper>
            <BragInnerWrapper>
            <BragTitle>🧼Clean</BragTitle>
            <LinkButtonWrapper>
                <LinkButton to="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fmarkus.wyrin.se%2F">GitHub</LinkButton>
                <LinkDescription>See the source code for this site!</LinkDescription>
            </LinkButtonWrapper>
            <BragSubtitle>I write clean code without spaghetti 🍝</BragSubtitle>
            </BragInnerWrapper>
        </BragWrapper>

        <BragWrapper>
            <BragInnerWrapper>
            <BragTitle>👨‍💻Contact me</BragTitle>
            <LinkButtonWrapper>
                <LinkButton to="/contact">Get in touch</LinkButton>
                <LinkDescription>I look forward to hearing from you!</LinkDescription>
            </LinkButtonWrapper>
            <BragSubtitle>Do you want help with your business?<br/>get in touch!</BragSubtitle>
            </BragInnerWrapper>
        </BragWrapper>
    </BragGrid>
  )
}

export default Brag;