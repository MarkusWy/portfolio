import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100vw;
`;

const Title = styled.h1`
  color: white;
  font-size: 10vw;
  filter: drop-shadow(8px 4px 8px black);
  margin-bottom: 0;
`;

const Subtitle = styled.div`
  color: white;
  font-size: 2vw;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  margin-top: 40px;
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
        <Wrapper>
            <div className="desktop">
            <StaticImage
                src="https://code.visualstudio.com/assets/docs/languages/typescript/overview.png"
                alt="A kitten"
                placeholder="blurred"
                layout="fullWidth"
                aspectRatio={16/6}
                breakpoints={[750, 1080, 1366, 1920]}
                imgStyle={{filter: 'blur(10px)'}}
                />
            </div>
            <div className="mobile">
            <StaticImage
                src="https://placekitten.com/1000/600"
                alt="A kitten"
                placeholder="blurred"
                layout="fullWidth"
                aspectRatio={0.75}
                breakpoints={[750, 1080, 1366, 1920]}
            />
            </div>
            <Overlay>
            <LeftSide>
                <StaticImage
                src="https://media.licdn.com/dms/image/D4D03AQGJEfZ-OAVGAA/profile-displayphoto-shrink_800_800/0/1692974202805?e=1701907200&v=beta&t=pcsAHo923sV_YYaejRXAfEFsZM6kINCKQOLpkwi3ALA"
                alt="Markus Wyrin"
                placeholder="none"
                width={500}
                height={500}
                imgStyle={{ borderRadius: '100%', border: "10px inset rgb(255 255 255 / 65%)", boxSizing: "border-box"}}
                />
            </LeftSide>
            <RightSide>
                <Title>Markus Wyrin</Title>
                <Subtitle>Passionate Web Engineer & tech enthusiast</Subtitle>
            </RightSide>
            </Overlay>
        </Wrapper>
    )
}

export default Hero;