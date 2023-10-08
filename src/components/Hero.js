import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
`;

const Title = styled.h1`
  color: #0081ff;
  font-size: 10vw;
  margin-bottom: 0;
`;

const Subtitle = styled.h3`
  color: #0081ff;
  font-size: 2vw;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  margin-top: 40px;

  //mobile overrides
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 50%;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
    }
    h3 {
      font-size: 16px;
      margin-left: 32px;
    }
  }
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
`;

const LeftSide = styled.div`
  margin-top: 32px;
`;

const Hero = () => {
    return (
        <Wrapper className="bubbles">
          {Array.from({length: 20}, (v, i) => (
            <div className="bubble" key={i}></div>
          ))} 
          <Overlay>
            <LeftSide>
                <StaticImage
                src="https://media.licdn.com/dms/image/D4E03AQHiHz5bg_BSrQ/profile-displayphoto-shrink_800_800/0/1696361393481?e=1701907200&v=beta&t=t-70I6zjR5lPAExQIJ6QP6vQUHqqnAEDIsSHWG1iHXk"
                alt="Markus Wyrin"
                placeholder="none"
                width={500}
                height={500}
                imgStyle={{ borderRadius: '100%', border: "5px inset rgb(0 129 255 / 65%)", boxSizing: "border-box"}}
                />
            </LeftSide>
            <RightSide>
                <Title>Markus Wyrin</Title>
                <Subtitle>Software Engineer & tech enthusiast</Subtitle>
            </RightSide>
            </Overlay>
        </Wrapper>
    )
}

export default Hero;