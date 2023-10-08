import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import LinkedInIcon from "../icons/linkedin.svg";
import GithubIcon from "../icons/github.svg";


const FooterWrapper = styled.div`
  background: #0081ff;
`;

const CopyrightText = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
`;

const SocialMediaTitle = styled.div`
    color: white;
    font-size: 20px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmailIcon = styled.div`
  font-size: 50px;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
        <CopyrightText>Copyright © 2023 Markus Wyrin.</CopyrightText>
    </FooterWrapper>
  );
};

export default Footer;