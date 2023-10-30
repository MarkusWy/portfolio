import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
  height: 60vh;
`;

const Title = styled.h2`
  color: #0073ec;
  font-size: 10vw;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center !important;
    text-align: center;
  }
`;

const Subtitle = styled.h1`
  color: #0073ec;
  font-size: 2vw;

  //text align center in mobile
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
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
    width: 100%;
    img {
      width: 50%;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
    }
  }
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
`;

const LeftSide = styled.div`
  margin-top: 32px;
  align-self: center;
`;

const Hero = ({subtitle="Software Engineer & tech enthusiast"}) => {
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
                loading="eager"
                imgStyle={{ borderRadius: '100%', border: "5px inset rgb(0 129 255 / 65%)", boxSizing: "border-box"}}
                />
            </LeftSide>
            <RightSide>
                <Title>Markus Wyrin</Title>
                <Subtitle>{subtitle}</Subtitle>
            </RightSide>
            </Overlay>
        </Wrapper>
    )
}

export default Hero;