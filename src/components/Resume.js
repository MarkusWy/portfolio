import * as React from "react"
import styled from "@emotion/styled";
import { Link } from "gatsby"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 16px;
  content: "";
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.div`
  font-size: 32px;
  color: #0073ec;
`;

const Subtitle = styled.div`
  font-size: 24px;
  color: black;
  margin-bottom: 8px;
  color: #0073ec;

`;

const ResumeWrapper = styled.div`
  width: 100%;
  display: block;
`;

const ListItem = styled.li`
  font-size: 20px;
  &::marker {
    content: "${props => props.text || 'default'}";
    height: 10px;
    width: 10px;
    color: black;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Resume = () => {
  return (
      <ResumeWrapper id="resume">
        <Title>Work experience</Title>
        <Row>
          <Column>
            <Subtitle>Freelance</Subtitle>
            <b>2015-present.</b><br/><br/>
            I have developed various websites, games, APIs, and more.<br/>
            I am good at adapting.
            I have broad technical competence and a background in design. I can take on challenges big and small.
            in a wide variety of tech stacks.
          </Column>
          <Column>
            <Subtitle>Grebban</Subtitle>
            <b>March 2020-present.</b><br/><br/>
            I have tech lead responsibility for <Link to="https://kvanum.com/en/">Kvänum</Link> and I played a major role in the development of <Link to="https://berginsight.com">Berg Insight</Link>.
          </Column>
          <Column>
            <Subtitle>Webbhuset</Subtitle>
            <b>February 2019 - March 2020.</b><br/><br/>
            I quickly adapted and learned the frontend language <Link to="https://elm-lang.org/">ELM</Link> for the role. This was used for a headless front-end for Magento e-commerce.
          </Column>
        </Row>
        <Title>Tech stack</Title>
        <Row className="test">
          <Flex>
            <Column>
              <Subtitle>Frontend</Subtitle>
              <ul>
                <ListItem text="📰">HTML</ListItem>
                <ListItem text="🖌️">CSS</ListItem>
                <ListItem text="☕">Javascript</ListItem>
                <ListItem text="❤️">React.js</ListItem>
                <ListItem text="💜">Gatsby.js</ListItem>
                <ListItem text="🖤">Next.js</ListItem>
                <ListItem text="💚">Vue.js</ListItem>
                <ListItem text="💙">ELM</ListItem>
              </ul>
            </Column>
            <Column>
              <Subtitle>Backend</Subtitle>
              <ul>
                <ListItem text="👨‍💻">PHP</ListItem>
                <ListItem text="🍎">Laravel</ListItem>
                <ListItem text="🖥️">Node.js</ListItem>
                <ListItem text="🐍">Python</ListItem>
                <ListItem text="😄">C#</ListItem>
                <ListItem text="😃">.NET</ListItem>
                <ListItem text="🏃‍♂️">Go</ListItem>
              </ul>
            </Column>
            <Column>
              <Subtitle>Devops</Subtitle>
              <ul>
                <ListItem text="🌴">AWS</ListItem>
                <ListItem text="☁️">Oracle Cloud</ListItem>
                <ListItem text="🐣">Heroku</ListItem>
                <ListItem text="🚢">Docker</ListItem>
                <ListItem text="💚">Gatsby Cloud</ListItem>
              </ul>
            </Column>
          </Flex>
        </Row>
      </ResumeWrapper>
  )
}

export default Resume;